import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SeeHowWithVids = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sybarite text-5xl md:text-6xl text-gray-800 mb-8">
            See How With Vids
          </h1>
          <p className="font-neutra text-xl text-gray-600 mb-8">
            Video content coming soon...
          </p>
          <div className="bg-gray-100 rounded-lg p-12 mb-8">
            <p className="font-neutra text-gray-500">
              This page will feature instructional videos and tutorials.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SeeHowWithVids;