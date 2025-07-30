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

              <section className="space-y-8">

                <p className="text-lg">
                  Follow below for a “day in the life” along my LSAT journey:
                </p>

                {/* FEB – MAR */}
                <h2 className="mb-2 text-2xl font-extrabold text-gray-800">
                  February – March: “Sloooooowwwww down”
                </h2>

                <h3 className="mb-2 text-xl font-bold text-gray-800">The Drills:</h3>
                <p>
                  Translation Drills, vocabulary growth, casual reading (for comprehension), re-visit the Loophole –  
                  I did not engage in any formal “drills” throughout these couple months.
                </p>

                <h3 className="mb-2 text-xl font-bold text-gray-800">The Results:</h3>
                <p>
                  I gained confidence in understanding the test holistically.  
                  At this point in my process, I was not taking my studies as seriously as I should have been.  
                  This ended up being a great asset, however, because it allowed me to better understand  
                  the environment necessary in order to succeed.
                </p>

                <h3 className="mb-2 text-xl font-bold text-gray-800">The Breakdown:</h3>
                <p>
                  The first two months were dedicated to learning the fundamentals, creating a schedule and finding  
                  a rhythm which encouraged maximum efficiency and intake. Ellen and I crafted manageable goals;  
                  Ellen spent this time working with me and getting to better understand me and my style.
                </p>
                <p>
                  Much of March revolved around the fundamentals: translating, quipping, CLIRing, and comprehension;  
                  the emphasis during this month was translating and properly annotating the stimulus.  
                  Much of my work came in understanding exactly what the stimulus was saying:  
                  the majority of my effort was dedicated to slowing down and remaining mindful.  
                  Throughout this period, I learned to put the lessons of the book into action;  
                  I was constantly revisiting the Loophole text and gleaning greater insight.  
                  I found my footing and gained the confidence necessary to take it to the next level.
                </p>

                {/* APR – JUN */}
                <h2 className="mb-2 text-2xl font-extrabold text-gray-800">
                  April – June: “Your will rise to the occasion of the expectations you set for yourself”
                </h2>

                <h3 className="mb-2 text-xl font-bold text-gray-800">The Drills:</h3>
                <p>
                  Translation Drills, timed Mini-Cycles, Inside-Out RC, memory games, Party Tricking
                </p>

                <h3 className="mb-2 text-xl font-bold text-gray-800">The Results:</h3>
                <p>
                  My translation drills continued to contribute to my growing confidence in tackling the questions.  
                  I was writing all my problems and misunderstandings in a notebook and reviewing them with Ellen.  
                  My Mini-Cycles started out very poorly: I found myself averaging anywhere between -14 to -8,  
                  then -8 to -6 after camo review. Starting near the end of May into early June,  
                  I got with the program and began inputting the majority of my data into the Elemental Progress Tracker.  
                  At this point, I found some real progress.
                </p>

                <h3 className="mb-2 text-xl font-bold text-gray-800">The Breakdown:</h3>
                <p>
                  Through this period of time is when I really got into the process of the LSAT: things got serious.  
                  My goal from the onset of the process was to take the test in August.  
                  Having started studying in February, I felt comfortable taking it easy.  
                  I had to decide to “press go” and really set my sights on success.  
                  This took more effort than I realized it would and forced me to really take things seriously.
                </p>
                <p>
                  I progressively became stronger in the Elemental skill sets and took the time to hone my intuition.  
                  I created “sacred hours” where I was unreachable. A large issue I was dealing with was maintaining  
                  my focus and finding solace from the outside world. At times it felt like I wasn’t getting anywhere,  
                  but every single day of effort during these few months contributed to my greater success.  
                  I moved from strictly Logical Reasoning to include Reading Comprehension sections during this period.
                </p>

                {/* JUL – AUG */}
                <h2 className="mb-2 text-2xl font-extrabold text-gray-800">
                  July – August: “You need achievable goals, otherwise you’ll be in a perpetual state of unhappiness”
                </h2>

                <h3 className="mb-2 text-xl font-bold text-gray-800">The Drills:</h3>
                <p>
                  Party Tricking, Marathons, timed sections, PTs
                </p>

                <h3 className="mb-2 text-xl font-bold text-gray-800">The Results:</h3>
                <p>
                  LR – I started lingering around -11 or so, camo-ing at -8.  
                  By the end of July, I found myself stuck in the -6 to -9 range, camo-ing as low as -2.  
                  As August rolled around I found these scores to be more consistently in the low-end.
                </p>
                <p>
                  RC – I found myself in the -8 to -5 range for RC.  
                  LG – I found myself consistently missing a single game, going perfect for 3 and then being stumped on the fourth.  
                  With hard work, I found myself going -2 to -4 consistently.
                </p>

                <h3 className="mb-2 text-xl font-bold text-gray-800">The Breakdown:</h3>
                <p>
                  These last couple months were crunch time.  
                  There were times when Ellen was uncertain if I was ready; she even told me she didn’t think I was up to par yet.  
                  That lit the fire in my belly that was necessary to push me over the finish line.
                </p>
                <p>
                  I polished my skills and honed in on the finer details—the subtle nuances that make Elemental’s program so valuable.  
                  Ellen’s insight on small word choices—like “only if” versus “if”—really propelled me over the top.
                </p>
                <p>
                  I lived and breathed LSAT. I dedicated at least four hours every day, more on weekends.  
                  Ellen and I created lofty but achievable goals, and I sharpened the fundamentals to be fully prepared for August.
                </p>
                <p>
                  I was assigned a phenomenal Logic Games mentor, and all the seemingly disparate skills I had learned came together.
                </p>
                <p>
                  When Ellen showed me her method, I caught on quickly. My mentor met with me at 6:30 AM every morning  
                  for the three weeks leading up to my test—one of the most important parts of my success.
                </p>
                <p>
                  In the days before the test, I focused on full-length PTs and getting confident with time.  
                  It was tight—I almost didn’t make it. But when I saw that 168, I cried.  
                  It couldn’t have happened any other way.
                </p>

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