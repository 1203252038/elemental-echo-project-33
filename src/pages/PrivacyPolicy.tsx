import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-sybarite text-5xl md:text-6xl text-gray-800 mb-8 text-center">
            Privacy Policy
          </h1>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="font-neutra text-gray-600 mb-6">
              Privacy policy content will be added here.
            </p>
            <p className="font-neutra text-gray-500 text-sm">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;