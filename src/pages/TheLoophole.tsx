import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TheLoophole = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const bookImages = [
    {
      src: "/lovable-uploads/e217baba-f0ea-4b6d-8949-98c33bab854f.png",
      alt: "The Loophole in LSAT Logical Reasoning - Front Cover"
    },
    {
      src: "/lovable-uploads/6ef31a46-9166-419a-8b0e-6f3f0ba6673f.png", 
      alt: "The Loophole in LSAT Logical Reasoning - Back Cover"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % bookImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + bookImages.length) % bookImages.length);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with teal background and proper typography and top padding for fixed nav */}
      <section className="bg-[#77b8b1] text-white py-20 pt-36 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-neutra font-bold text-7xl">
            The Loophole in LSAT Logical Reasoning
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
                  <div className="lg:w-1/2 flex justify-center lg:justify-start">
                    <div className="relative">
                      <img 
                        src={bookImages[currentImage].src}
                        alt={bookImages[currentImage].alt}
                        className="w-full max-w-md h-auto rounded-lg shadow-lg transition-all duration-300" 
                      />
                      
                      {/* Navigation buttons */}
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                      </button>
                      
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                      </button>

                      {/* Dots indicator */}
                      <div className="flex justify-center mt-4 space-x-2">
                        {bookImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                              index === currentImage 
                                ? "bg-[#77b8b1] scale-110" 
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`View ${index === 0 ? 'front' : 'back'} cover`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="space-y-6 font-neutra text-18px text-gray-700 leading-relaxed">
                      <p>
                        The Loophole in LSAT Logical Reasoning is the single most effective LSAT Logical Reasoning book on the market. It's the much-needed, ice-cold <span className="text-[#F48487]">La Croix™</span> in your LSAT life.
                      </p>
                      <p>
                        The Loophole in LSAT Logical Reasoning is the result of five years of development, testing, and iteration. Its methodologies are not just comprehensive; they're frankly just better. It contains an actually new approach to LSAT Logical Reasoning mastery. Like for real. Check out these excerpts for proof:
                      </p>
                      
                      <div className="space-y-2">
                        <ul className="space-y-1 list-disc list-inside">
                          <li><a href="https://elementalprep.com/wp-content/uploads/2020/08/Table_of_Contents.pdf" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">Table of Contents</a></li>
                          <li><a href="https://elementalprep.com/wp-content/uploads/2020/08/Introduction.pdf" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">Introduction</a></li>
                          <li><a href="https://elementalprep.com/wp-content/uploads/2020/08/Translation-Cluster-Sentences.pdf" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">Translation & Cluster Sentences</a></li>
                          <li><a href="https://elementalprep.com/wp-content/uploads/2020/08/Stimulus-Framework.pdf" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">Stimulus Framework</a></li>
                          <li><a href="https://elementalprep.com/wp-content/uploads/2020/08/Arguments-Inferences.pdf" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">Arguments & Inferences</a></li>
                          <li><a href="https://elementalprep.com/wp-content/uploads/2020/08/Assumptions.pdf" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">Assumptions</a></li>
                          <li><a href="https://elementalprep.com/wp-content/uploads/2020/08/The-Loophole.pdf" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">The Loophole</a></li>
                          <li><a href="https://elementalprep.com/wp-content/uploads/2020/08/A-Few-Classic-Flaws.pdf" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">A Few Classic Flaws</a></li>
                          <li><a href="https://elementalprep.com/wp-content/uploads/2020/08/The-Powerful-Provable-Primer.pdf" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">The Powerful-Provable Primer</a></li>
                          <li><a href="https://elementalprep.com/wp-content/uploads/2020/08/Method-Question-Type-Section.pdf" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">Method Question Type Section</a></li>
                          <li><a href="https://elementalprep.com/wp-content/uploads/2020/08/Classic-Flaw-Question-Type-Section.pdf" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">Classic Flaw Question Type Section</a></li>
                          <li><a href="https://elementalprep.com/wp-content/uploads/2020/08/A-Few-Answer-Choice-Types.pdf" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">A Few Answer Choice Types</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Full-width Buy on Amazon Button and TrustIndex Reviews */}
                <div className="mt-16 space-y-8">
                  {/* Buy on Amazon Button */}
                  <div className="flex justify-center">
                    <Button className="bg-[#F48487] hover:bg-[#f37579] text-white font-neutra text-20px font-bold py-4 px-12 rounded-full uppercase tracking-wide text-lg" style={{ color: '#ffffff' }}>
                      Buy on Amazon
                    </Button>
                  </div>

                  {/* TrustIndex Reviews placeholder */}
                  <div className="flex justify-center">
                    <div className="border border-gray-300 p-8 rounded-lg bg-gray-50 w-full max-w-2xl">
                      <p className="text-center text-gray-600 font-neutra text-lg">TrustIndex Reviews</p>
                    </div>
                  </div>
                </div>

                {/* Detailed Content Section */}
                <div className="mt-16 space-y-8 font-neutra text-18px text-gray-700 leading-relaxed">
                  <p>
                    The Loophole in LSAT Logical Reasoning assumes you know literally nothing about how to reason logically at the start of the book. We build your skills one by one as we go. Each new idea snowballs from the last to build a skill set that goes far beyond the basics. But what does going "far beyond these basics" mean, really? Test prep is often full of empty promises, so I feel your need for specificity here. Let's get specific.
                  </p>

                  <p>
                    <span className="font-bold">Just one drill in <em className="font-bold">The Loophole in LSAT Logical Reasoning</em> often accounts for more score improvement than many LSAT prep systems produce across all three sections.</span> The Basic Translation Drill has taken many students, even those who have already studied the major systems on the market, from a plateaued -10+ per Logical Reasoning section to a -1. That same drill has even bought students 6+ points on Reading Comp. That's just within the first 100 pages of <em>The Loophole in LSAT Logical Reasoning</em>. Here's what one student had to say about it:
                  </p>

                  <p className="italic">
                    "I genuinely struggled to understand what the stimulus was saying, even after several reads. I clearly saw the results when I was getting 15 wrong on a section. Translation seriously works. Trust the process, do the work, and you will definitely see the results. I went from consistently getting 15 wrong on a section to 1 wrong. Now that I'm starting at UCLA Law, I translate my legal reading every day."
                  </p>

                  <p>
                    And the Basic Translation Drill isn't even what most students think is the most useful concept in the book. Here's what most students said improved their score the most:
                  </p>

                  <blockquote className="border-l-4 border-[#77b8b1] pl-6 italic">
                    &quot;<span className="text-[#F48487] font-bold not-italic">Powerful-Provable</span>. No doubt.&quot; -Kevin B.
                  </blockquote>

                  <p>
                    Every correct answer on the LSAT is either powerful or provable. When you're only ever looking for power or provability, the answer choices become seriously simpler. The Loophole in LSAT Logical Reasoning shows you how to leverage the Powerful-Provable Spectrum toward much easier, faster correct answers.
                  </p>

                  <blockquote className="border-l-4 border-[#77b8b1] pl-6 italic">
                    &quot;<span className="text-[#F48487] font-bold not-italic">The CLIR</span>. It just makes you so much faster.&quot; -Camille B.
                  </blockquote>

                  <p>
                    You can predict the answer to most Logical Reasoning questions without even knowing the question type. Yeah, you read that right. That's what the CLIR is for. It's super awesome and fun. The Loophole in LSAT Logical Reasoning will teach you how to use CLIR to make the correct answer way more predictable.
                  </p>

                  <blockquote className="border-l-4 border-[#77b8b1] pl-6 italic">
                    &quot;<span className="text-[#F48487] font-bold not-italic">Hyper-skipping</span>. I was tanking my score staying on a few hard questions for way too long. Now I hyper-skip them, and I&apos;m finishing in 30 minutes, saving five full minutes to give the hard questions a second look. On the second pass, I see the answer fast. Most of them feel stupidly obvious. Now that I&apos;m not wasting so much time, I&apos;m missing 0-1 on each LR consistently.&quot; -Daniel J.
                  </blockquote>

                  <p>
                    Many questions that seem insurmountably difficult aren't actually that hard. They seem impossible because you've misread something in the stimulus or answer choices. With the misread's bad information, there really is no right answer. When you stay on a question for 2+ minutes, you usually don't make much progress on correcting the misread; you're just replaying the memory of your initial read over and over again. Hyper-skipping is a system designed to wipe that cached copy of the misread as efficiently as possible, minimizing time, anxiety, and wrong answers.
                  </p>

                  <p>
                    The Loophole in LSAT Logical Reasoning approaches Logical Reasoning from a skills-based perspective. In order to get questions right in Logical Reasoning, you have to be able to read and analyze the stimulus, differentiate what makes an answer choice correct, and approach the section strategically. This is what The LSAT Loophole in Logical Reasoning helps you do. It results in not just a higher score, but an easier score.
                  </p>

                  <div className="mt-12">
                    <h2 className="font-sybarite text-30px text-[#F48487] mb-6">About the Author</h2>
                    <p>
                      Ellen Cassidy is the founder of Elemental Prep and the author of The Loophole in LSAT Logical Reasoning. After studying at Stanford University and Oxford University, she received two official 99th percentile LSAT scores and turned down Harvard Law School to teach the LSAT. Since then, she's been researching and testing experimental LSAT prep methodologies and compiling her successes into a forthcoming series of LSAT strategy guides. Ellen's LSAT prep methodologies are the result of the relationships she's built with the hundreds of LSAT students she has personally taught.
                    </p>
                    <p className="text-sm mt-4 italic">
                      La Croix is the registered trademark of Everfresh Beverages, Inc.
                    </p>
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

export default TheLoophole;