
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with teal background and proper typography and top padding for fixed nav */}
      <section className="bg-[#77b8b1] text-white py-20 pt-36 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* H1: 92px Neutra Bold */}
            <h1 className="font-neutra text-92px font-bold mb-6">
              The LSAT Won't Kill Your Dream
            </h1>
            {/* Subhead: 50px Neutra */}
            <p className="font-neutra text-50px mb-8">I can prove it.</p>
            {/* Button: 20px Neutra uppercase bold */}
            <Button className="bg-[#F48487] hover:bg-[#f37579] text-white font-neutra text-20px font-bold py-3 px-8 rounded-full uppercase tracking-wide">
              See How
            </Button>
          </div>
        </div>
      </section>

      {/* Navy background starts here */}
      <div className="bg-[#2d3c6f]">
        {/* Main Card Container - Navy with overlap and side shadows */}
        <div className="relative -mt-12 mx-4 sm:mx-8 lg:mx-12">
          <div className="bg-[#2d3c6f] rounded-t-lg shadow-2xl">
            {/* Main Content Section */}
            <section className="text-white py-16 px-8 lg:px-16">
              <div className="max-w-4xl mx-auto">
                {/* Body text: 18px Neutra */}
                <div className="space-y-6 font-neutra text-18px leading-relaxed">
                  <p>
                    Learning the LSAT with Elemental is like learning to ride a bike. You might fall off a few times, but once you get it, it sticks. You'll never forget how to take an argument apart, how to approach a game, or how to read to remember.
                  </p>
                  <p>
                    We're not here to lure you in with the promise of quick and easy test prep tricks. The LSAT is designed to defeat low-effort hacks; it's designed to identify students with awesome reading and thinking skills. This is awesome. You're capable of improving these skills, meaning you can significantly improve your LSAT score. Elemental is here to show you how. We aim to turn our students into LSAT naturals, the people who can organically give the LSAT what it wants.
                  </p>
                  <p>
                    We've spent five years perfecting our curriculum across a wide variety of students before launching nationally. We were determined to never simply replicate what was already on the market. Our curriculum has been tested, edited, and retested again and again. That's what five years of development is for. Now, we couldn't be more excited to share a fundamentally new approach to LSAT prep with you.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="text-white py-16 px-8 lg:px-16">
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    {/* Get in Touch: 47px Sybarite */}
                    <h2 className="font-sybarite text-47px mb-6">Get in Touch</h2>
                    {/* Fill out form: 19px Sybarite */}
                    <p className="font-sybarite text-19px mb-6">Fill out the form to send us a message</p>
                    <div className="flex items-center space-x-3 mb-6">
                      <img src="/lovable-uploads/6f424e8b-1bbd-46e1-bf2f-5561001baba3.png" alt="Reddit icon" className="w-14 h-14" />
                      <div>
                        {/* Subreddit text: 30px Sybarite */}
                        <p className="font-sybarite text-30px">We also have a subreddit!</p>
                        {/* Come ask questions: 19px Sybarite */}
                        <p className="font-sybarite text-19px">
                          Come ask your questions at{" "}
                          <a href="https://www.reddit.com/r/TheLoophole" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
                            r/TheLoophole
                          </a>
                          !
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Section - Grey background within the same card, no bottom border radius */}
            <div className="bg-[#323437]">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Index;
