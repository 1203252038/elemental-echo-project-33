import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

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
        body: { filename: 'How-to-Be-a-Good-Test-Taker-Demo-Cover-Page.pdf' }
      });

      if (error) {
        throw error;
      }

      // For now, since we moved the PDF back to src and can't serve it directly,
      // we'll show a success message and provide a download link
      toast({
        title: "Access Granted",
        description: "You have access to this PDF content.",
      });

      // In a real implementation, you'd serve the PDF from Supabase Storage
      // For now, we'll create a blob URL from a placeholder
      setPdfUrl("placeholder");
      
    } catch (error) {
      console.error('Error accessing PDF:', error);
      toast({
        title: "Access Error",
        description: "Unable to access the PDF. Please try again.",
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
                      <div className="bg-white rounded p-8 text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                          How to Be a Good Test Taker
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Welcome {user.email}! You have access to this premium content.
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          PDF content would be displayed here. In a full implementation, this would be served from Supabase Storage.
                        </p>
                        <div className="space-y-4">
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p className="text-blue-800 font-medium">Content Preview Available</p>
                            <p className="text-blue-600 text-sm mt-1">
                              This is a demo of gated content access. The PDF would be displayed here.
                            </p>
                          </div>
                        </div>
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