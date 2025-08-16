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
                {/* PDF Viewer Container */}
                <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
                  <embed
                    src="/How-to-Be-a-Good-Test-Taker-Demo-Cover-Page.pdf"
                    type="application/pdf"
                    className="w-full h-[800px] border-0 rounded"
                    title="How to Be a Good Test Taker PDF"
                  />
                  <div className="text-center text-gray-600 p-4 text-sm">
                    If the PDF doesn't display above, 
                    <a 
                      href="/How-to-Be-a-Good-Test-Taker-Demo-Cover-Page.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F48487] hover:underline ml-1"
                    >
                      click here to view it in a new tab
                    </a>
                  </div>
                </div>

                {/* Download Link */}
                <div className="mt-8 text-center">
                  <a 
                    href="/How-to-Be-a-Good-Test-Taker-Demo-Cover-Page.pdf" 
                    download
                    className="inline-block bg-[#F48487] hover:bg-[#f37579] text-white font-neutra text-18px font-bold py-3 px-8 rounded-full transition-all duration-200"
                  >
                    Download PDF
                  </a>
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