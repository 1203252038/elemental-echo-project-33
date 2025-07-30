import Navigation from "@/components/Navigation";
import Footer      from "@/components/Footer";
import { Link }    from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function EdStory() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ——— HERO (same teal strip) ——— */}
      <section className="bg-[#77b8b1] pt-36 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-neutra font-bold text-7xl">Ed's LSAT Journey</h1>
        </div>
      </section>

      {/* ——— NAVY BACKGROUND LAYER ——— */}
      <div className="bg-[#2d3c6f]">
        <div className="relative -mt-12 mx-4 sm:mx-8 lg:mx-12">
          <div className="rounded-t-lg bg-white shadow-2xl">

            {/* ——— MAIN CONTENT ——— */}
            <article className="px-8 py-16 lg:px-20 mx-auto max-w-3xl font-neutra text-[18px] leading-relaxed text-gray-700 space-y-10">

              {/* PRESENT DAY with wrapped text */}
              <section>
                {/* Avatar with floating text */}
                <img
                  src="/lovable-uploads/Images/ed_headshot.png"
                  alt="Ed"
                  className="float-left mr-6 mb-4 h-44 w-44 rounded-full object-cover shadow-md"
                />
                
                <p className="mb-4">
                  In my view, my LSAT journey is by no means unique.  
                  In fact, I would argue that anyone can achieve what I did if they are determined to do so.  
                  I attribute my success to Ellen and the whole of the Elemental Prep team.  
                  I am fortunate to have found this program as it has led me to achieve the score of my dreams,  
                  to be able to achieve what I never thought possible.  
                  I learned an important lesson in my LSAT experience: nothing is impossible.
                </p>
                
                <p className="mb-4">
                  I first took the LSAT in February of 2020.  
                  I had studied for a total of fifteen hours – tops.  
                  I was attending college as well as working full-time,  
                  which in turn allowed me to rationalize my lack of effort.  
                  At this point in my life, things came very easily to me.  
                  I thought the LSAT would be something similar.  
                  I could not have been more wrong.  
                  Having never taken a practice test, my only exposure to the test format was through the textbook I had been self “studying” with.  
                  I felt confident when I left the testing building.  
                  A few weeks later, I opened my results: I scored a whopping 144.  
                  I went on to graduate college and apply to a single school in the hopes they would give me a pity acceptance.  
                  It didn’t work…
                </p>
                
                <p className="mb-4">
                  I found <i>The Loophole</i> around the middle of January 2021.  
                  I immediately loved the work – I found Ellen’s explanations resonating with me on an intuitive level  
                  and knew that this was the right program for me.  
                  Before this, I had been resistant to the idea of getting a tutor.  
                  I thought studying for the LSAT was a sort of litmus test for my ability to succeed in law school.  
                  It was around the end of January when I swallowed my pride and reached out to the Elemental team.  
                  I started tutoring on February 25.  
                  I was very nervous leading up to our first meeting.  
                  When I met Ellen, my insecurities immediately fell by the wayside.  
                  I felt like I had known her for a long time, that she was a friend,  
                  and I was immediately taken aback by her drive to help me succeed.
                </p>
                
                <p className="mb-4">
                  My process was slow, mainly due to the fact that I procrastinated.  
                  I questioned myself; my insecurities were in the driver’s seat often,  
                  leaving me over-worrying and creating stagnation throughout my process.  
                  In hindsight, these shortcomings were necessary.  
                  Not only did my experience with Ellen make me into an LSAT machine, scoring in the 94th percentile,  
                  but I grew astronomically as a person.  
                  To be candid, Ellen helped me through a fair number of emotional breakdowns;  
                  I often joked half her job was being a therapist.  
                  And I am grateful to have discovered her and her work.  
                  I am a better person because of it, far outside of any intellectual endeavor.
                </p>
                
                {/* Clear float */}
                <div className="clear-both"></div>
              </section>

              {/* BACK LINK */}
              <div className="pt-8 text-center">
                <Link to="/student-stories" onClick={() => window.scrollTo(0, 0)}>
                  <Button className="bg-[#F48487] hover:bg-[#f37579] text-white font-neutra font-bold py-2 px-6 rounded-full">
                    Back to Student Stories
                  </Button>
                  </Link>
              </div>
            </article>

            {/* ——— FOOTER STRIPE ——— */}
            <div className="bg-[#323437]">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}