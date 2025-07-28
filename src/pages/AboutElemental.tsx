import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const AboutElemental = () => {
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with teal background and proper typography and top padding for fixed nav */}
      <section className="bg-[#77b8b1] text-white py-20 pt-36 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-neutra font-bold text-7xl">
            Team Elemental
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
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  <div className="lg:w-1/3 flex justify-center lg:justify-start">
                    <img src="/lovable-uploads/7a042b11-cc91-433b-8da5-af7ee59d4297.png" alt="Ellen Cassidy, Founder" className="w-80 h-auto rounded-lg shadow-lg" />
                  </div>
                  <div className="lg:w-2/3">
                    <h2 className="font-sybarite text-gray-800 mb-6 text-30px">
                      Ellen Cassidy, Founder
                    </h2>
                    <div className="space-y-6 font-neutra text-18px text-gray-700 leading-relaxed">
                      <p>The luckiest day of my life was March 18, 2011. My best friend prodded me out of the house to a “hot tub” party I really didn’t want to go to. I was determined to avoid all hot tub-related activity, so I spent the whole party listening to a stranger tell funny stories about her clients. She was a public defender. I thought, “Law is hilarious. I should take the LSAT.” </p>
                      <p>I bought the PowerScore Bibles on my phone before I even left the party. It was an impulsive, unreasonable decision. It was the opposite of logical reasoning. But when I started doing LSAT, I was enraptured. It felt like my brain had always been running at about 70% capacity until that day, and suddenly it ramped up to 100%. </p>
                      <p>Prepping for the LSAT was one of the most invigorating experiences of my life. When I got in the car after taking the test, I said, “I wish I could just do the LSAT forever.” I didn’t understand how that could be a realistic life plan, so I figured I had to apply to law school. The best school I got into was Harvard Law School, and I deferred three times before turning them down to teach the LSAT. Turns out, you can do the LSAT forever.</p>
                      <p>
                        I've taught the LSAT ever since. I have the unique privilege of helping my students through what can be a super-stressful time. That's the purpose of my life. Whether it's one-on-one, in the classroom, in a book, or online, I'm here to take this dreaded law school process and turn it into something great. That's why I founded Elemental Prep. That's why I wrote <em>The Loophole in LSAT Logical Reasoning</em>. That's why I'll keep writing LSAT books until there is seriously nothing else to write about.
                      </p>
                      <p className="font-bold">We're in this together, reader. Let's do it.</p>
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
    </div>;
};
export default AboutElemental;