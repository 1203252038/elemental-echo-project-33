import Navigation from "@/components/Navigation";
import Footer      from "@/components/Footer";
import { Link }    from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function SaraStory() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ——— HERO (same teal strip) ——— */}
      <section className="bg-[#77b8b1] pt-36 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-neutra font-bold text-7xl">Sara's LSAT Journey</h1>
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
                  src="/lovable-uploads/Images/sara_headshot.png"
                  alt="Sara"
                  className="float-left mr-6 mb-4 h-44 w-44 rounded-full object-cover shadow-md"
                />
                
                <p className="mb-4">
                  I began LSAT prep in January of 2021, studying with a family friend who is skilled at test prep but not an LSAT specialist. Over the course of 5 months, I learned the basics of logic with him, but a lot of my work was self-guided. My diagnostic test in January was a 164, and though I had some highlight practice tests during our time together, I struggled to keep my score consistently above 170. At the time, my goal was a 175, and it felt like––no matter how hard I tried––that score was oceans away.
                </p>
                
                <p className="mb-4">
                  The issue was this: I knew I could score my dream score, I just didn't know how.
                </p>
                
                <p className="mb-4">
                  June rolled around, and I decided it was time to see how well I could do. Frankly, I knew it would be the final three-section Flex test LSAC was offering, and I wanted to give it a shot while the shorter test was available. My practice test scores fluctuated wildly in May (175, 168, 173, 167, the list goes on), and I had no idea what would happen on test day. I gave it my best shot, and finished with a 169. I was disappointed, and didn't know what my next steps would look like. But there was a teal blue book on my desk.
                </p>
                
                <p className="mb-4">
                  Follow below for a "day in the life" along my LSAT journey:
                </p>
                
                <h2 className="font-sybarite text-gray-800 mb-6 text-30px">July – August: The Race to Nowhere</h2>
                
                <p className="mb-4">
                  Late into my first round of prep, around April, a friend recommended The Loophole to me. I read it once and took some tools from it, but didn't really take it seriously. CLIRs? Who knew 'em. I remember reading about the translation drills and literally texting the same friend, "I don't have to actually do these, do I?" There was, admittedly, a lot of eye rolling.
                </p>
                
                <p className="mb-4">
                  But after my score was released in July, I decided to look up the author and see if I could contact her. It couldn't hurt, I figured. I didn't know any LSAT specialists and felt so overwhelmed going into another test, so my hope was that I would connect with her and seek advice.
                </p>
                
                <p className="mb-4">
                  July 12th was a turning point. Ellen and I chatted on the phone and I got acquainted with all the options available over at Elemental Prep. I was determined to take the August exam, and I wanted to know what we could do to help boost me a few points over the course of a month. To me, it seemed rational to pursue 3-5 more points in four weeks. I just needed to tweak some things, right?
                </p>
                
                <p className="mb-4">
                  …Not right. Ellen was honest from the beginning that her method takes time, and rushing toward a few points would be likely fruitless. I heard her, but I didn't hear her.
                </p>
                
                <p className="mb-4">
                  I joined the On Demand program and, over the following month, I pushed myself to study for hours on end. I tried out every drill Ellen threw at me, but never for long, and never for the sake of learning. I wanted the drills to fix my scores. I wanted the drills to fix me. Really, I wanted there to be some sort of magic cure where I could just snap my fingers and make August a 175.
                </p>
                
                <p className="mb-4">
                  Spoiler alert: it wasn't. It… was a 170.
                </p>
                
                <h2 className="font-sybarite text-gray-800 mb-6 text-30px">September: Party Tricking Bootcamp</h2>
                
                <p className="mb-4">
                  In the two weeks between when I took August and when my score was released, something started to shift inside me. Having a bit of a break really forced me to decide what my next steps might be, and whether I would continue prep. Applications were looming, and I was itching to get my essays done and submitted. But at the same time, reflecting on the past month of work, it felt clear to me that there was more I could do. I felt like I was juuuuuuust starting to get the hang of translating and CLIRing. When my score was released, I almost felt relieved. Transparently, had it been any higher, I probably would have stopped. But here was a clear sign to me that I needed to give the LSAT one more go.
                </p>
                
                <p className="mb-4">
                  At this point, fate really intervened. I went online to register for October, convinced that it was the latest I could possibly test and still stick to the schedule in my head. To my dismay, I had missed the deadline for registration by 18 hours. I wanted to scream. I had my first tutoring session with Ellen that day, and we evaluated the situation together––not that I had much choice in the matter, but it was November or bust.
                </p>
                
                <p className="mb-4">
                  As frustrated as I felt, a little part of me really started to listen that day. Given the extra month of prep I now had on the schedule, I was ready to really let Ellen take the wheel. And what that meant, for me, was Party Tricking Jail.
                </p>
                
                <p className="mb-4">
                  I mean bootcamp. I went to party tricking bootcamp. After a week of tracking all of my Translations, Quips, CLIRs, and Missions in a special tracker Elemental uses to ensure a Solid Gold standard, Ellen decided the real work needed to happen in the answer choices. Sure, I thought. Can't be worse than anything else we've done, I thought. After going over the Party Tricking instructions I promised myself I would really try to suss out the right answer without the stimulus. No wild guesses. I was in jail for a reason. Might as well try to rehabilitate. I continued to record my Party Tricking results in the special tracker to force myself to maintain this good behavior––no wild guesses, only Solid Gold.
                </p>
                
                <p className="mb-4">
                  And magic happened. Stripped of the stimulus, my critical brain was allowed to stop searching for THE RIGHT ANSWER in a panicked state, and instead it could translate and assess answer choices for who/what they were. For weeks, I strengthened my powerful-provable senses, getting into the weeds of each and every answer choice and looking for clues. I felt like a detective. I felt like the karate kid. I felt, well, a little insane, but I also felt curious again. As I painted fences for my Mr. Miyagi, I started to build up a real nose for different answer choices. I felt like I could sniff out a necessary assumption answer from a sufficient, blindfolded. It was a weird time. It was a glorious time. I started to reach a point where, through Party Tricking alone, I could correctly answer 20 out of 25 questions on my first pass, and all on my second. Never once reading the stimulus. Applied to Reading Comprehension questions, the same progress occurred, never once reading the passage.
                </p>
                
                <h2 className="font-sybarite text-gray-800 mb-6 text-30px">October: Putting It All Together</h2>
                
                <p className="mb-4">
                  After my month of bootcamp, my mindset had shifted dramatically. During this time, I had also been paired with a mentor and three mentees. This gave me the opportunity to learn with other students. Working through the processes with others compounded the work I was doing and deepened my own knowledge. When I began full timed sections again, my average scores jumped to a range of -0 to -3.
                </p>
                
                <p className="mb-4">
                  At the same time, Ellen and I began to address another major roadblock for me: my anxiety. Though I have dealt with an anxiety disorder for most of my adult life, I hadn't considered how much it was holding me back during this season, nor had I considered working to level my own playing field. After conversations with Ellen and my psychiatrist, we decided to seek testing accommodations to address my testing anxiety and give myself a fairer chance to perform at my best on test day.
                </p>
                
                <p className="mb-4">
                  But that doesn't mean the following six weeks were an easy skate to the finish line. Au contraire, my sweet friend. Though Party Tricking and answer choice translation had strengthened my method in Logical Reasoning dramatically, there were still plenty of kinks in the cord: my Missions needed Jesus, my CLIRs were a little rusty, and my RC Translation needed time and dedication. Week by week, I saw my section scores fluctuate in both LR and RC dipping between -0s and -4s. The difference was, had I seen these scores consistently in August, I would have stopped pushing. But now, the glimmer of a perfect section proved to me that there was more to fight for. I stopped thinking in terms of my 175 dream score, and started thinking of each question as an island. Each was an opportunity for success. Each had a clear and perfect right answer, and no matter what, I would find it.
                </p>
                
                <p className="mb-4">
                  In an effort to capitalize on my successes, Ellen and I drafted two strategies. For Reading Comp, I used one of her unique drills that played to my Party-Tricking strengths. For Logical Reasoning, Missions ultimately became my homebase. No Mission? No question. If I did not have a strong Mission to lead myself into the answer choices, I would not allow myself one step further. I'd make myself comfortable in the stimulus instead, and get to know it before so much as glancing at the answer choices. It took a lot of accountability, but I knew that discipline was my throughline for Logical Reasoning, my toughest section. In the same way I had devoted myself to party tricking in September, I locked in on Missions in early November.
                </p>
                
                <p className="mb-4">
                  And magic happened again. As I began to take four section tests again to prepare for test day, my scores reflected back all the work I had done. I took these tests with the goal of putting everything back together again, and holding myself to the highest standard I could. On my second practice test I got my first 180.
                </p>
                
                <h2 className="font-sybarite text-gray-800 mb-6 text-30px">November: The Last Hurrah</h2>
                
                <p className="mb-4">
                  I… was getting tired. My body was tired. My eyes were tired. I found myself making mistakes even though I knew better now. Suffice to say, these last two weeks were a mental battle.
                </p>
                
                <p className="mb-4">
                  In all honesty, I worried I would disappoint myself. I worried that I didn't have "it" in me to perform at my best on test day. I worried that all of the work I had done wouldn't be worthwhile, and that I would be too tired, too burnt out. Or too lazy to hold to my gold standard behavior. In retrospect, I can see that I lost a lot of my clearheadedness in these weeks, and it affected my ability to stay crisp and focused in sections, leading to some lower scores. In an effort to prove to me that tiredness was the least of my concerns, Ellen challenged me to an infamous six-plus-hour Elemental drill the Friday before my test (Insane! I know! But she's crazy! And she's right!). I spent an entire day burning through section after section, creating the most tiring testing environment I could imagine, because I knew that if I could hold my standard on a day like that, I could hold my standard on a four section test.
                </p>
                
                <p className="mb-4">
                  For mental battles, the support you need can look a little different than tutoring, and this is where the Elemental community had my back. As I struggled to find my confidence, my mentor and mentees listened and empathized. A week out, I connected with a previous Elemental student who had recently received a 180, and she walked me through her journey, including the dark and difficult days before her test. She shared a piece of advice that had helped her: treat wrong answers like money you are withdrawing from the bank. You want to get them all out of you so that you can learn from them before test day. Take your money out, and spend it. Buy yourself something nice. The more wrong answers, the better, so long as you learn from them. It's the perfect metaphor for a growth mindset, and one I think applies far and wide, in the LSAT world and beyond.
                </p>
                
                <p className="mb-4">
                  She also reminded me that I needed to hold myself to the highest possible standard. Shoot for perfection. Don't settle for anything but.
                </p>
                
                <p className="mb-4">
                  For many students the home stretch before test day can be mentally difficult, and often, in your prep, you go back to the basics. Harkening all the way back to my early Elemental beginnings, I revisited the On-Demand Instant Replays, verifying that my method was strong and viable. Before each practice section, I sat and wrote my list of intentions: everything from "no Mission, no question," to "stay curious," to "there is only 1 right answer." Giving myself the time to reflect on the previous day's wrong answers in my Wrong Answer Journal and converting them into mantras for the day's sections was my way of returning to square one, learning from my mistakes, and distilling everything I had learned into bite-sized notions I could repeat to myself while I practiced. I continued my intentions, my On-Demand Instant Replays, and my Wrong Answer Journal all the way through. On test day, my very last intention read: "Own this test. You earned it." And I did. My final score was a 179.
                </p>
                
                <h2 className="font-sybarite text-gray-800 mb-6 text-30px">Closing Thoughts</h2>
                
                <p className="mb-4">
                  If you asked me in June if I saw myself scoring a 179, I would likely have said no. In fact, even right up until test day, a part of me doubted my ability to keep my cool and do everything I had learned at once, when I needed to do it. The LSAT is a lot like tap dancing while spinning plates and juggling: you have to keep everything moving, in tandem, in balance. All engines are firing. But holding yourself to the highest standard is, ultimately, an opportunity. An opportunity to trust yourself. An opportunity to believe in yourself. An opportunity to prove that hard work can pay off. An opportunity to show admissions committees your willingness to try and fail and try again, work harder, do better. Really, an opportunity to challenge the negative self-conception that urges you to give up, that tells you you cannot go one step further. You can. It's a choice, but it's your choice. It's work, but it's your work. I can think of no better preparatory experience for me heading into law school, because I've proved to myself that I can do big things, hard things. Even if it's just me, alone, in a room with a book and a pencil.
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