import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const StudyGearRecommendations = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with teal background */}
      <section className="bg-[#77b8b1] text-white py-20 pt-36 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sybarite text-50px md:text-92px leading-tight text-white mb-8">
              Study Gear Recommendations
            </h1>
          </div>
        </div>
      </section>

      {/* Navy background starts here */}
      <div className="bg-[#2d3c6f]">
        {/* Main Card Container - White with overlap and side shadows */}
        <div className="relative -mt-12 mx-4 sm:mx-8 lg:mx-12">
          <div className="bg-white rounded-t-lg shadow-2xl">
            {/* Main Content Section */}
            <section className="py-16 px-8 lg:px-16">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none text-gray-700">
                  
                  <p className="font-neutra text-19px leading-relaxed mb-6">
                    That's about 10% of my pencil collection. I am an unabashed pencil nerd.
                  </p>
                  
                  <p className="font-neutra text-19px leading-relaxed mb-6">
                    My tutoring students are always intrigued by my fancy pencils, erasers, and notebooks. They've been trying to convince me to make a guide showcasing my favs for years. Now, I've finally gotten enough online requests that I'm ready to share the fruits of my many, many pencil/eraser/notebook tests. The pencils, erasers, and sharpeners that I'm recommending all conform to LSAC guidelines and have been used successfully by many tutoring students on the day of the test.
                  </p>
                  
                  <p className="font-neutra text-19px leading-relaxed mb-6">
                    Obviously, you can buy whatever LSAT gear you want at Office Max, but I think of cute LSAT gear as akin to cute workout gear. If enrobing myself in special soft Lycra will make me workout more, I think it's worth it. Especially with how the LSAT often makes you feel gross. Really nice pencils will make your experience just that much less suck.
                  </p>
                  
                  <p className="font-neutra text-19px leading-relaxed mb-6">
                    All the pencils I'm recommending are Palomino Blackwings. For us pencil nerds, Palomino Blackwings are our Chanel. When you hold them in your hand, they just feel better. When you write with them, what you're writing feels better too.
                  </p>

                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Grey Footer Section */}
        <div className="bg-gray-100">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default StudyGearRecommendations;