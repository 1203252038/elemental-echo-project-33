import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const TestTaker = () => {
  const [user, setUser] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check current user
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    
    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const accessPDF = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to access this content.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('serve-pdf', {
        body: { filename: 'The Loophole Bonus Content/How to be a Good Test Taker/How-to-Be-a-Good-Test-Taker-Demo-Cover-Page.pdf' }
      });

      if (error) {
        console.error('Edge function error:', error);
        throw error;
      }

      if (data.success) {
        // Convert base64 to blob and create object URL
        const binaryString = atob(data.data);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        const blob = new Blob([bytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
        
        toast({
          title: "Access Granted",
          description: "PDF loaded successfully!",
        });
      }
      
    } catch (error) {
      console.error('Error accessing PDF:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      toast({
        title: "Access Error",
        description: `Unable to access the PDF: ${error.message || 'Unknown error'}`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with teal background */}
      <section className="bg-[#77b8b1] text-white py-20 pt-36 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-neutra font-bold text-7xl">
            How to Be a Good Test Taker
          </h1>
        </div>
      </section>

      {/* Navy background starts here */}
      <div className="bg-[#2d3c6f]">
        {/* Main Card Container - White with overlap and side shadows */}
        <div className="relative -mt-12 mx-4 sm:mx-8 lg:mx-12">
          <div className="bg-white rounded-t-lg shadow-2xl">
            {/* Main Content Section */}
            <section className="py-16 px-8 lg:px-16">
              <div className="max-w-6xl mx-auto">
                {user ? (
                  pdfUrl ? (
                    /* PDF Viewer for authenticated users */
                    <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
                      <div className="mb-4 text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          How to Be a Good Test Taker
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Welcome {user.email}! Viewing your premium content.
                        </p>
                      </div>
                      <iframe
                        src={pdfUrl}
                        className="w-full h-[600px] border-0 rounded"
                        title="How to Be a Good Test Taker PDF"
                      />
                      <div className="mt-4 text-center">
                        <a 
                          href={pdfUrl}
                          download="How-to-Be-a-Good-Test-Taker.pdf"
                          className="inline-block bg-[#F48487] hover:bg-[#f37579] text-white font-neutra text-sm font-bold py-2 px-4 rounded transition-all duration-200"
                        >
                          Download PDF
                        </a>
                      </div>
                    </div>
                  ) : (
                    /* Access button for authenticated users */
                    <div className="bg-gray-50 rounded-lg p-8 shadow-inner text-center">
                      <div className="max-w-md mx-auto">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                          Welcome back, {user.email}!
                        </h3>
                        <p className="text-gray-600 mb-6">
                          You have access to this premium PDF guide. Click below to view it.
                        </p>
                        <button 
                          className="bg-[#F48487] hover:bg-[#f37579] text-white font-neutra text-16px font-bold py-3 px-6 rounded-full transition-all duration-200 disabled:opacity-50"
                          onClick={accessPDF}
                          disabled={loading}
                        >
                          {loading ? "Loading..." : "Access PDF Guide"}
                        </button>
                      </div>
                    </div>
                  )
                ) : (
                  /* Login prompt for non-authenticated users */
                  <div className="bg-gray-50 rounded-lg p-8 shadow-inner text-center">
                    <div className="max-w-md mx-auto">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Protected Content
                      </h3>
                      <p className="text-gray-600 mb-6">
                        This PDF guide is available to authenticated users. Please log in to access the content.
                      </p>
                      <div className="space-y-4">
                        <a 
                          href="/auth"
                          className="inline-block bg-[#F48487] hover:bg-[#f37579] text-white font-neutra text-16px font-bold py-3 px-6 rounded-full transition-all duration-200"
                        >
                          Log In to Access
                        </a>
                        <p className="text-sm text-gray-500">
                          Don't have an account? <a href="/auth" className="text-[#F48487] hover:underline">Sign up here</a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </section>

            {/* Footer Section - Grey background within the same card */}
            <div className="bg-[#323437]">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestTaker;