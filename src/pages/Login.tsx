import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Login = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-navy mb-8">LOGIN</h1>
            <p className="text-lg text-sage">This is a placeholder page for Login.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;