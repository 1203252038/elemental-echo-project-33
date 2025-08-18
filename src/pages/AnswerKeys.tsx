import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const AnswerKeys = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const answerKeys = [
    {
      id: 1,
      title: "Basic Translation Drill Answer Key - June 2007 Section 2",
      coverPath: "The Loophole Bonus Content/Answer Keys/Answer Keys Covers/Basic-Translation-Drill-Answer-Key-June-2007-Section-2-Cover.png",
      pdfPath: "The Loophole Bonus Content/Answer Keys/Basic-Translation-Drill-Answer-Key-June-2007-Section-2.pdf"
    },
    {
      id: 2,
      title: "Basic Translation Drill Answer Key - June 2007 Section 3",
      coverPath: "The Loophole Bonus Content/Answer Keys/Answer Keys Covers/Basic-Translation-Drill-Answer-Key-June-2007-Section-3-Cover.png",
      pdfPath: "The Loophole Bonus Content/Answer Keys/Basic-Translation-Drill-Answer-Key-June-2007-Section-3.pdf"
    },
    {
      id: 3,
      title: "CLIR Drill Answer Key - June 2007 Section 2",
      coverPath: "The Loophole Bonus Content/Answer Keys/Answer Keys Covers/CLIR-Drill-Answer-Key-June-2007-Section-2-Cover.png",
      pdfPath: "The Loophole Bonus Content/Answer Keys/CLIR-Drill-Answer-Key-June-2007-Section-2.pdf"
    },
    {
      id: 4,
      title: "CLIR Drill Answer Key - June 2007 Section 3",
      coverPath: "The Loophole Bonus Content/Answer Keys/Answer Keys Covers/CLIR-Drill-Answer-Key-June-2007-Section-3-Cover.png",
      pdfPath: "The Loophole Bonus Content/Answer Keys/CLIR-Drill-Answer-Key-June-2007-Section-3.pdf"
    }
  ];

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

  const openPDF = async (pdfPath: string, title: string) => {
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
        body: { filename: pdfPath }
      });

      if (error) {
        console.error('Edge function error:', error);
        throw error;
      }

      if (data.success) {
        // Open PDF in new tab
        window.open(data.signedUrl, '_blank');
        
        toast({
          title: "Access Granted",
          description: `${title} opened successfully!`,
        });
      }
      
    } catch (error) {
      console.error('Error accessing PDF:', error);
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
            Answer Keys
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {answerKeys.map((answerKey) => (
                      <div
                        key={answerKey.id}
                        className="bg-gray-50 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                        onClick={() => openPDF(answerKey.pdfPath, answerKey.title)}
                      >
                        <div className="aspect-[3/4] bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                          <div className="text-gray-500 text-center p-4">
                            <h3 className="text-sm font-semibold mb-2">
                              {answerKey.title}
                            </h3>
                            <p className="text-xs">Click to open PDF</p>
                          </div>
                        </div>
                        <h4 className="text-sm font-semibold text-gray-800 text-center line-clamp-2">
                          {answerKey.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Login prompt for non-authenticated users */
                  <div className="bg-gray-50 rounded-lg p-8 shadow-inner text-center">
                    <div className="max-w-md mx-auto">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Protected Content
                      </h3>
                      <p className="text-gray-600 mb-6">
                        These answer keys are available to authenticated users. Please log in to access the content.
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

                {loading && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F48487] mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading PDF...</p>
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

export default AnswerKeys;