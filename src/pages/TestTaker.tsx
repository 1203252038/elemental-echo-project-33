import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TestTaker = () => {
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
                {/* PDF Access Message */}
                <div className="bg-gray-50 rounded-lg p-8 shadow-inner text-center">
                  <div className="max-w-md mx-auto">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Protected Content
                    </h3>
                    <p className="text-gray-600 mb-6">
                      This PDF guide is available to authenticated users. Please log in to access the content.
                    </p>
                    <div className="space-y-4">
                      <button 
                        className="bg-[#F48487] hover:bg-[#f37579] text-white font-neutra text-16px font-bold py-3 px-6 rounded-full transition-all duration-200"
                        onClick={() => {
                          // Add authentication check and PDF access logic here
                          alert('Authentication and PDF access will be implemented here');
                        }}
                      >
                        Access PDF Guide
                      </button>
                      <p className="text-sm text-gray-500">
                        Don't have an account? <a href="/auth" className="text-[#F48487] hover:underline">Sign up here</a>
                      </p>
                    </div>
                  </div>
                </div>

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