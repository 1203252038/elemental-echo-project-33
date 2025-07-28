import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Tutoring = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Debug scroll behavior when sheet closes
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      console.log("Sheet closing - current scroll position:", window.scrollY);
      
      // Immediately set a flag to track if something tries to scroll
      let scrollAttempts = 0;
      const originalScrollTo = window.scrollTo;
      
      window.scrollTo = (...args: any[]) => {
        scrollAttempts++;
        console.log(`Scroll attempt #${scrollAttempts}:`, args);
        console.log("Stack trace:", new Error().stack);
        // Block ALL scrolling during close
        return;
      };
      
      setIsFormOpen(false);
      
      // Check final position after everything settles
      setTimeout(() => {
        console.log("Final scroll position after sheet close:", window.scrollY);
        console.log("Total scroll attempts blocked:", scrollAttempts);
        window.scrollTo = originalScrollTo;
      }, 200);
    } else {
      setIsFormOpen(true);
    }
  };
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with teal background and proper typography and top padding for fixed nav */}
      <section className="bg-[#77b8b1] text-white py-20 pt-36 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-neutra font-bold text-7xl">
            LSAT Tutoring
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
                {/* Start Tutoring Button */}
                <div className="flex justify-center mb-16">
                  <Sheet open={isFormOpen} onOpenChange={handleOpenChange}>
                    <SheetTrigger asChild>
                      <Button className="bg-[#F48487] hover:bg-[#f37579] !text-white font-neutra text-20px font-bold py-4 px-12 rounded-full uppercase tracking-wide">
                        Start Tutoring
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full sm:max-w-2xl p-0 overflow-hidden border-0" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
                      <div className="h-full">
                        <iframe
                          src="https://elementalprep.typeform.com/to/CUK9hNBZ"
                          className="w-full h-full border-0"
                          title="LSAT Tutoring Form"
                        />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

                <div className="space-y-8 font-neutra text-18px text-gray-700 leading-relaxed">
                  <div>
                    <h2 className="font-sybarite text-30px text-gray-800 mb-6">What is LSAT tutoring?</h2>
                    <p className="mb-4">
                      Honestly, LSAT tutoring is usually somebody's side gig. Almost all LSAT tutors do it part-time. They are mostly reciting content they memorized from some book. They've never created a new LSAT methodology in their lives. There's a big difference between working with someone who can create new methodologies and working with someone who only knows how to regurgitate. Someone who can't create something new can't look at your situation, analyze all the variables, and design a specifically targeted new way for you to LSAT. That's what I do.
                    </p>
                    <p>
                      A lot of people can get a 99th percentile LSAT score themselves. <strong>But you are not paying an LSAT tutor to take the LSAT. You're paying them to teach the LSAT.</strong> If someone does not have incisive communication skills, massive amounts of empathy, and an encyclopedic knowledge of what they're talking about… it doesn't matter how many 180s they have. They're going to suck.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-sybarite text-30px text-gray-800 mb-6">But do you really care about tutoring anymore, Ellen? You wrote The Loophole, so I'd think you're just living off the land at this point.</h2>
                    <p className="mb-4">
                      Yes, I care far more than is reasonable. LSAT tutoring has been my full-time job for 12 years. For the past five years, I have not taken more than three days off per year, and even on these "days off" I still corresponded with students. I regularly tutor the LSAT for hundreds of days straight. At one point in 2016, I actually counted and saw myself hit 97 days straight. I tutor far more than 2,000 hours per year, so the whole 10,000 hours thing is ancient history at this point. Also, I only tutor the LSAT. Helping students with the LSAT is my whole daily world.
                    </p>
                    <p>
                      Let me give you an example. I had double hernia surgery in 2017; I tutored the LSAT for 11 hours straight 20 hours after getting out of the hospital. I tried to schedule someone for the same day, but the student insisted I "needed to rest." What they didn't realize is that teaching the LSAT is by far the best thing I could have done that day even if I did need to rest. This is why I exist. There is nothing I am better at and there is nothing that makes me happier.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-sybarite text-30px text-gray-800 mb-6">What does tutoring with Ellen look like?</h2>
                    <p className="mb-4">
                      Basically, I devote my life to making your LSAT life better. I do everything in my power to make sure that your LSAT prep experience is as awesome and successful as it can possibly be. There is no set formula for tutoring. It's not like, "Well, we've completed Module 3, so you have to move to Weaken questions because you should be getting it by now" (if a tutor ever says those italicized words to you, fire them immediately).
                    </p>
                    <p>
                      Tutoring is, above all, customized to your needs. There are many techniques I only recommend to students I've seen fit very specific profiles because I know those methods tend to work with that population and actively damage everyone else. These methods don't tend to make it into my books because of their potential for misuse when broadly applied, but they make a huge difference in tutoring.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-sybarite text-30px text-gray-800 mb-6">What's the structure of Elemental Prep LSAT tutoring?</h2>
                    <p className="mb-4">Tutoring occurs in two phases:</p>
                    <ol className="list-decimal list-inside mb-4 space-y-2 pl-4">
                      <li>Daily Virtual Tutoring</li>
                      <li>Weekly Live Tutoring</li>
                    </ol>
                    <p>
                      It took me a little over nine years of teaching the LSAT to realize the ideal way to structure tutoring. In the beginning, we need to meet as often as possible, ideally far more than once per week, to ensure that you ingrain the skills needed to improve rapidly. There's a lot to cover, so we have to start with a breadth-first approach. During the latter stages of tutoring, we need longer, more in-depth sessions to facilitate the analysis needed to diagnose more persistent problems. We also need time between check-ins to get the LSAT data required for more persistent, intense problem solving.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-sybarite text-gray-800 mb-6 text-30px">What's Daily Virtual Tutoring?</h2>
                    <p className="mb-4">
                      Daily Virtual Tutoring is a series of back-and-forth interactive video lessons using a tool called VideoAsk. Here's how it works:
                    </p>
                    <ol className="list-decimal list-inside mb-4 space-y-2 pl-4">
                      <li>You receive a customized VideoAsk lesson and assignment every weekday.</li>
                      <li>You record yourself completing the assignment all within VideoAsk. Assignments are things like:
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                          <li>Translating a stimulus</li>
                          <li>Party Tricking a set of answer choices</li>
                          <li>Completing a full question</li>
                          <li>Translating an RC passage</li>
                          <li>Critiquing sample Translations</li>
                          <li>Proctor simulations</li>
                          <li>Something new that doesn't exist yet! I make new lessons to address student needs all the time!</li>
                        </ul>
                      </li>
                      <li>I watch (and rewatch) your new VideoAsk submission every weekday.
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                          <li>I take extensive notes on what you show me in your video: your form, your mistakes, your victories, and how you've improved from recent previous video submissions.</li>
                          <li>I pull up your tracker to analyze the homework you inputted today and incorporate any questions and insights into my notes.</li>
                          <li>I check our Slack communications to see if you've sent any questions throughout the day that I need to answer in my reply.</li>
                        </ul>
                      </li>
                      <li>I send you a video reply telling you what you did wrong and how to fix it!</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-sybarite text-24px text-gray-800 mb-4 text-19px font-bold">Example Daily Video Critiques from Ellen</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold mb-2">If I see this in your video:</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Inaccurate Translation</li>
                          <li>Slow Translation time</li>
                          <li>Inaccurate CLIRs</li>
                          <li>Silly mistakes in the answer choices</li>
                          <li>Conditional diagramming errors</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">I prescribe in my video reply:</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>How to make your Translation accurate</li>
                          <li>How to speed up your Translation</li>
                          <li>How to improve your CLIRs</li>
                          <li>Strategies for when you're down to two</li>
                          <li>How to include diagramming in Translation</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-4">
                      The cadence of Daily Virtual Tutoring allows students to address their mistakes much faster. Seeing the student's process everyday allows me to tailor my critiques much more accurately and understand the student's problems much more quickly.
                    </p>
                    <p className="mt-4">
                      For an example of how quickly we can diagnose and fix problems in Daily Virtual Tutoring, please check out <a href="https://elementalprep.com/how-elemental-students-improve/" className="text-[#F48487] hover:underline" target="_blank" rel="noopener noreferrer">Ana's 54-day journey</a>.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-sybarite text-30px text-gray-800 mb-6">What's Weekly Live Tutoring?</h2>
                    <p className="mb-4">
                      Weekly Live Tutoring is when we can fix your most persistent LSAT problems. The ones that haunt your PT dreams. When we have two hours together, I can dive into your process with a dozen follow-up questions on every misstep in your thinking. This will allow us to understand the true root of your problem at a much deeper level than we can ever get to in VideoAsk. To get a sense of how this has worked, take a look at our <a href="/student-stories" className="text-[#F48487] hover:underline">Elemental Prep Student Stories</a>.
                    </p>
                    <p>
                      Weekly Live Tutoring is also when we discover new LSAT drills and methodologies specifically designed for you. <strong>My tutoring students are the root of every LSAT innovation I've ever created.</strong> When a student is stuck, I create new processes designed specifically for them to succeed. If the idea works well for them, I test it across my other tutoring students. If the idea works well across all my tutoring students, it goes into my book. Tutoring is the laboratory for everything cool. Read <a href="https://elementalprep.com/tutoring-is-responsible-for-every-good-lsat-thing/" className="text-[#F48487] hover:underline" target="_blank" rel="noopener noreferrer">how the CLIR was invented</a> to get a sense of the Weekly Live Tutoring process in action.
                    </p>
                    <p className="mt-4 mb-4">
                      Law school admissions consulting is also available to current and former Elemental Prep tutoring students, and follows the same format as Weekly Live Tutoring.
                    </p>
                  </div>

                  <div>
                    <h2 className="font-sybarite text-30px text-gray-800 mb-6">What does tutoring include?</h2>
                    <p className="mb-4">I've built a lot of LSAT resources since The Loophole was published. Let me give you a quick primer:</p>
                    
                    <ul className="list-disc list-inside space-y-6 pl-4">
                      <li>
                        <strong>100+ Confidential Elemental Prep LSAT Drills</strong>
                        <ul className="list-disc list-inside space-y-1 ml-8 mt-2">
                          <li>Every advanced Logical Reasoning strategy you can (and can't) imagine – the legacy of fixing every LSAT issue I've ever seen in tutoring</li>
                          <li>Unorthodox new Reading Comprehension drills that take the strategies outlined in The Loophole to another level</li>
                        </ul>
                      </li>

                      <li>
                        <strong>The Elemental Video Library and VideoAsk Compendium</strong>
                        <ul className="list-disc list-inside space-y-1 ml-8 mt-2">
                          <li>Hundreds of individual videos documenting everything from one step of a Logical Reasoning question to how to approach the passage in Reading Comprehension</li>
                          <li>New videos are recorded and added all the time. I am more than open to community suggestions if anyone would like me to record anything in particular.</li>
                        </ul>
                      </li>

                      <li>
                        <strong>Interactive Typeform Bootcamps</strong>
                        <ul className="list-disc list-inside space-y-1 ml-8 mt-2">
                          <li>Covering conditional reasoning, RC Translation, Making a Mission, Sufficient and Necessary Assumptions, and much more</li>
                        </ul>
                      </li>

                      <li>
                        <strong>Our Elemental Slack Community</strong>
                        <ul className="list-disc list-inside space-y-1 ml-8 mt-2">
                          <li>You can ask any LSAT question at any time and receive an expert-vetted reply within 24 hours.</li>
                          <li>Elemental students are collaborative; they love to share their Quizlets and coordinate impromptu study halls. Plus, I monitor everything that goes on in Slack to make sure no one gets weird.</li>
                        </ul>
                      </li>

                      <li>
                        <strong>The Elemental Notable Question Database</strong>
                        <ul className="list-disc list-inside space-y-1 ml-8 mt-2">
                          <li>I've identified many novel question patterns and answer choice types since The Loophole was published. I tag LSAT questions of each type every day, so students can see real examples of things like Flippers, Panaceas, and Defective Necessary Assumptions. It's ok that you don't know what those are; you will soon.</li>
                          <li className="">(Just to be super clear, we don't provide the actual LSAT questions to you. We just note the citation of relevant questions so you can look them up in your own LawHub Advantage account.)</li>
                        </ul>
                      </li>

                      <li>
                        <strong>CLIR Answer Keys</strong>
                        <ul className="list-disc list-inside space-y-1 ml-8 mt-2">
                          <li>Yup, the thing that <a href="https://www.reddit.com/r/LSAT/" className="text-[#F48487] hover:underline" target="_blank" rel="noopener noreferrer">r/LSAT</a> and <a href="https://www.reddit.com/r/TheLoophole/" className="text-[#F48487] hover:underline" target="_blank" rel="noopener noreferrer">r/TheLoophole</a> have always wanted… we've got CLIR Answer Keys.</li>
                        </ul>
                      </li>

                      <li>
                        <strong>The Peer Mentoring Program</strong>
                        <ul className="list-disc list-inside space-y-1 ml-8 mt-2">
                          <li>Peer mentoring relationships are one of the best parts of Elemental Prep. They've led to several pairs of lifelong best friends and more than a few law school study buddies.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-sybarite text-30px text-gray-800 mb-6">What are tutoring students saying?</h2>
                    
                    <div className="space-y-6">
                      <blockquote className="border-l-4 border-[#77b8b1] pl-6 italic">
                        <p className="mb-2">
                          "The best thing that has happened to me during my LSAT studying journey is picking up The Loophole on a late night before going to bed. Before I finished reading Chapter 1 I knew two things: 1) I need to find Ellen, and 2) my LSAT studying journey is approaching its end.
                        </p>
                        <p className="mb-2">
                          The second-best thing that has happened to me is actually reaching out to Ellen before finishing reading The Loophole. For the longest time, I have been struggling to have a consistent LSAT methodology. Tutoring with Ellen has changed that. I was able to learn so much not only about the LSAT but also about how one should read anything in life. I am sure the skills I've acquired through learning the LSAT with Ellen will benefit me in many years to come.
                        </p>
                        <p>
                          Congratulations on finding Elemental Prep! Your perspective of the LSAT is about to be fundamentally changed for the better."
                        </p>
                        <cite className="block mt-4 font-bold not-italic">Elaine, 177</cite>
                      </blockquote>

                      <blockquote className="border-l-4 border-[#77b8b1] pl-6 italic">
                        <p>
                          "Ellen is your mentor, guide, and cheerleader. Ellen stops at nothing to help you achieve success. She's constantly developing new techniques to help you blow through mental blocks and get you to that aha! moment. Team Elemental truly never gives up on you."
                        </p>
                        <cite className="block mt-4 font-bold not-italic">Kate, 175</cite>
                      </blockquote>

                      <blockquote className="border-l-4 border-[#77b8b1] pl-6 italic">
                        <p>
                          "Working with Ellen's method, with no exaggeration, literally changed my life. Ellen understood that this test is a terrifying mountain that seemed impossible to climb, and she started with the very basics of the language before building up to tackling questions themselves. The LSAT was no longer something that could conquer me; it was something I could conquer myself. Ellen took that girl who had no self-confidence and helped her reach a 180 in a matter of months."
                        </p>
                        <cite className="block mt-4 font-bold not-italic">Nethra, 180</cite>
                      </blockquote>
                    </div>
                  </div>

                  <div>
                    <h2 className="font-sybarite text-30px text-gray-800 mb-6">How much does this all cost?</h2>
                    <p className="mb-4">
                      The rate for Daily Virtual Tutoring is $790 per week. Students must complete a minimum of six consecutive weeks in the Daily Virtual Tutoring program unless they are moved to a Weekly Live Tutoring slot before that time.
                    </p>
                    <p className="mb-4">
                      The rate for Weekly Live Tutoring is $1050 per hour. Every Weekly Live Tutoring session is two hours.
                    </p>
                    <p className="mb-4">
                      Making every session two hours is a purposeful choice to increase the value of each Weekly Live Tutoring session. Most sessions begin with a 15-minute debrief about how the homework has gone and end with 15 minutes of homework planning. If sessions lasted one hour, that would leave only 30 minutes of instructional time, as opposed to 90 minutes in a two-hour session.
                    </p>
                    <p>
                      I want to build longterm relationships with my students. That's how significant score improvements happen, not through a single session here or there with no consistency. The relationships we build through tutoring will hopefully last far longer than it takes you to study for the LSAT. I mean I was in a former student's wedding in India a few years ago. These relationships matter.
                    </p>
                  </div>

                  {/* Final Start Tutoring Button */}
                  <div className="flex justify-center mt-16">
                    <Sheet open={isFormOpen} onOpenChange={handleOpenChange}>
                      <SheetTrigger asChild>
                        <Button className="bg-[#F48487] hover:bg-[#f37579] !text-white font-neutra text-20px font-bold py-4 px-12 rounded-full uppercase tracking-wide">
                          Start Tutoring
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="right" className="w-full sm:max-w-2xl p-0 overflow-hidden border-0" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
                        <div className="h-full">
                          <iframe
                            src="https://elementalprep.typeform.com/to/CUK9hNBZ"
                            className="w-full h-full border-0"
                            title="LSAT Tutoring Form"
                          />
                        </div>
                      </SheetContent>
                    </Sheet>
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
export default Tutoring;