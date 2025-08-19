import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const ChallengeQuestions = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const challengeQuestions = [
    {
      id: 1,
      title: "Argument Part Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Argument-Part-Challenge-Question-Explanation.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Argument-Part-Challenge.png"
    },
    {
      id: 2,
      title: "Classic Flaw Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Classic-Flaw-Challenge-Question-Explanation.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Classic-Flaw-Challenge.png"
    },
    {
      id: 3,
      title: "Conclusion Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Conclusion-Challenge-Question-Explanation.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Conclusion-Challenge.png"
    },
    {
      id: 4,
      title: "Contradiction Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Contradiction-Challenge-Question-Explanation.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Contradiction-Challenge-768x994.png"
    },
    {
      id: 5,
      title: "Controversy Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Controversy-Challenge-Question-Explanation.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Controversy-Challenge-768x994.png"
    },
    {
      id: 6,
      title: "Counter Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Counter-Challenge-Question-Explanation.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Counter-Challenge-768x994.png"
    },
    {
      id: 7,
      title: "Evaluate Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Evaluate-Challenge-Question-Explanation.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Evaluate-Challenge-768x994.png"
    },
    {
      id: 8,
      title: "Inference Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Inference-Challenge-Question-Explanations.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Inference-Challenge-768x994.png"
    },
    {
      id: 9,
      title: "Loophole Flaw Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Loophole-Flaw-Challenge-Question-Explanation.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Loophole-Flaw-Challenge-768x994.png"
    },
    {
      id: 10,
      title: "MSS Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/MSS-Challenge-Question-Explanations.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/MSS-Challenge-768x994.png"
    },
    {
      id: 11,
      title: "Method Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Method-Challenge-Question-Explanation.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Method-Challenge-768x994.png"
    },
    {
      id: 12,
      title: "Necessary Assumption Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Necessary-Assumption-Challenge-Question-Explanations.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Necessary-Assumption-Challenge-768x994.png"
    },
    {
      id: 13,
      title: "Parallel Flaw Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Parallel-Flaw-Challenge-Question-Explanation.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Parallel-Flaw-Challenge-768x994.png"
    },
    {
      id: 14,
      title: "Parallel Reasoning Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Parallel-Reasoning-Challenge-Question-Explanations.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Parallel-Reasoning-Challenge-768x994.png"
    },
    {
      id: 15,
      title: "Principle Conform Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Principle-Conform-Challenge-Question-Explanation.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Principle-Conform-Challenge-768x994.png"
    },
    {
      id: 16,
      title: "Resolution Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Resolution-Challenge-Question-Explanation.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Resolution-Challenge-768x994.png"
    },
    {
      id: 17,
      title: "Strengthen Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Strengthen-Challenge-Question-Explanations.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Strengthen-Challenge-768x994.png"
    },
    {
      id: 18,
      title: "Sufficient Assumption Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Sufficient-Assumption-Challenge-Question-Explanation.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Sufficient-Assumption-Challenge-768x994.png"
    },
    {
      id: 19,
      title: "Weaken Challenge Question",
      pdfPath: "The Loophole Bonus Content/Challenge Question Explanations/Weaken-Challenge-Question-Explanations.pdf",
      coverImage: "/lovable-uploads/Challenge_uploads/Weaken-Challenge-768x994.png"
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
            Challenge Question Explanations
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
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {challengeQuestions.map((question) => (
                      <div
                        key={question.id}
                        className="bg-gray-50 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                        onClick={() => openPDF(question.pdfPath, question.title)}
                      >
                        <div className="aspect-[3/4] rounded-lg mb-3 overflow-hidden">
                          <img 
                            src={question.coverImage} 
                            alt={question.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-xs font-semibold text-gray-800 text-center line-clamp-3 leading-tight">
                          {question.title}
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
                        These challenge question explanations are available to authenticated users. Please log in to access the content.
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

export default ChallengeQuestions;