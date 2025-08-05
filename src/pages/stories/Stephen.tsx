import Navigation from "@/components/Navigation";
import Footer      from "@/components/Footer";
import { Link }    from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function StephenStory() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ——— HERO (same teal strip) ——— */}
      <section className="bg-[#77b8b1] pt-36 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-neutra font-bold text-7xl">Stephen's LSAT Journey</h1>
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
                  src="/lovable-uploads/Images/stephen_headshot.png"
                  alt="Stephen"
                  className="float-left mr-6 mb-4 h-44 w-44 rounded-full object-cover shadow-md"
                />
                
                <p className="mb-4">
                  I started my LSAT journey in March 2021 by enrolling in an online LSAT course that was taught by a major test prep company. My diagnostic score was a 152, and I diligently worked through all the materials provided by the course while attending their weekly instructional sessions. Although the course itself was helpful in providing me the basic information and skills necessary to learn the LSAT, I struggled to fully grasp major concepts and felt like there was still so much to learn about this test. It was around this time that I discovered The Loophole, which fundamentally changed the way I thought about Logical Reasoning questions.
                </p>
                
                <p className="mb-4">
                  I found Ellen's perspective in the way she broke down complex concepts into digestible pieces to be not only refreshing, but also engaging and fun. By the end of my first read-through, I knew that I had to reach out to Ellen and see what else I could do to truly grasp and master this test. As a current 1L in a T-14 looking back on this moment a year later, this was hands down the best decision I made during my entire law school application process.
                </p>
                
                <h2 className="font-sybarite text-gray-800 mb-6 text-30px">August – September: "Translation, Translation, Translation"</h2>
                
                <p className="mb-4">
                  <strong>The Drills:</strong><br />
                  Translation + CLIR drills
                </p>
                
                <p className="mb-4">
                  <strong>The Results:</strong><br />
                  The goal here was pretty simple: to successfully translate and CLIR every stimulus in a Logical Reasoning section in 20 minutes or less. The process was brutal – something so seemingly basic and simple was excruciatingly difficult for me when I first started. But this was a good sign! It meant that I was lacking fundamentally crucial skills that would prove immensely useful in every other section: actually comprehending what I was reading and being able to pick apart an argument in real time as I was combing through a stimulus. Although it took over a month, I was eventually able to bring my Translation + CLIR time down to 20-22 minutes per section on a consistent basis. This. Was. Huge!
                </p>
                
                <p className="mb-4">
                  <strong>The Breakdown:</strong><br />
                  As mentioned above, I had a tremendously difficult time with translations at first. All I had to do was read a sentence or two, then restate them in my own words right? How difficult could that be? Extremely hard. I found that prior to doing translation drills, I would often literally forget whatever I had just read two to three sentences before. This would cause me to re-read stimuli multiple times at the cost of very precious seconds or even minutes. So I had to quite honestly re-train my brain to retain more information in my short-term memory, and then progress to utilizing what I captured in my short-term memory and turn that into legitimately understanding what I had just read by translating the stimulus' words into my own. After doing that, I then had to spot inconsistencies between what the conclusion stated and how or if the premises actually supported the claim(s). This was such an awkward process to re-tool how my own brain functions, but it was absolutely critical to truly grasping (and mastering) the complex layers of Logical Reasoning. I can, without a doubt, say that translation drills were the most important aspect of my LSAT journey.
                </p>
                
                <h2 className="font-sybarite text-gray-800 mb-6 text-30px">September – October: "Actively apply the principles you're learning until they become second nature"</h2>
                
                <p className="mb-4">
                  <strong>The Drills:</strong><br />
                  Logic Games, LR Answer Write-Ins, Answer Choice Translations, Inside-Out RC
                </p>
                
                <p className="mb-4">
                  <strong>The Results:</strong><br />
                  Ellen's method for mastering logic games worked very well for me, and I quickly began scoring between -0 to -2 on each section in a matter of weeks. Fundamentally grasping Logic Games also gave me enough confidence to no longer be intimidated by Logical Reasoning and Reading Comprehension anymore. I began to understand what exactly the questions were asking for and started to notice patterns between correct and incorrect answer choices. I finally felt like I was beginning to comprehend the particular skills this exam was testing me on, and was able to better identify my weaknesses into specific areas rather than just saying "I don't get this question".
                </p>
                
                <p className="mb-4">
                  <strong>The Breakdown:</strong><br />
                  Ellen's method for Logic Games makes intuitive sense in that it enables you to see pretty much the entire game in one place. I was used to solving games a different way at this point so there was a period of unlearning old habits; however, her method was so much more efficient and effective that it didn't take long for me to hit my first -0 section. For Logical Reasoning, I really focused on what the question types were asking me to do by actually doing drills that really honed my mission formation. This forced me to deeply analyze the stimuli in a way that I hadn't done so before. Then, I began to translate answer choices just like I was translating stimuli in the previous month in order to better understand what the answer choices were really saying. This was huge for me as it quickly enabled me to spot patterns between answer choices and across different question stems. Moving to Reading Comprehension, the drills Ellen had me do focused on the "bigger picture" or broad strokes of the passages instead of the details that I would get so caught up in most times. This helped tremendously in how I approached each question.
                </p>
                
                <h2 className="font-sybarite text-gray-800 mb-6 text-30px">November – December: "Set higher standards for yourself"</h2>
                
                <p className="mb-4">
                  <strong>The Drills:</strong><br />
                  Mini-Cycles, Hyperskipping, Consistent diagramming, RC Translation, Reverse Shuffle RC
                </p>
                
                <p className="mb-4">
                  <strong>The Results:</strong><br />
                  By this point, I was feeling much more confident than I was a couple months ago and decided to take the November LSAT. Although I ended up scoring a 164, this was a substantial jump from my previous score in the 150s only a few months prior. I was inspired by the progress and strongly felt that I could do better so I continued studying and planned to take the LSAT for the last time in January. I understood the test holistically at this point and had built a solid foundation in my grasp of the fundamentals. Now it was time to refine my focus and start honing specific tactics that would help me break past the next threshold.
                </p>
                
                <p className="mb-4">
                  <strong>The Breakdown:</strong><br />
                  Mini-Cycles, hyperskipping, and becoming more consistent and accurate with diagramming were pivotal to bringing my Logical Reasoning scores as close to -0 as possible. At this point, I understood all of the different question types and what I needed to look for in correct answer choices. My main issue, however, was that I often didn't know why the incorrect answer choices were actually incorrect. Mini- Cycles helped me focus on this issue while also helping me to build confidence in choosing correct answer choices. As I got better at this, I cemented what I had learned by hyperskipping more difficult questions by having to rely on my gut instincts and to not waste valuable time. Diagramming then became very important for addressing my weaknesses when it came to dense stimuli and parsing out the more abstract arguments. For the Reading Comprehension, Translations and Reverse Shuffle drills were used to work on my memory and information retention of key points in passages so that I could answer questions more efficiently and quickly.
                </p>
                
                <h2 className="font-sybarite text-gray-800 mb-6 text-30px">December – January: "Be awake, alert, and aware. Consistency is key"</h2>
                
                <p className="mb-4">
                  <strong>The Drills:</strong><br />
                  Marathons, FailSafes
                </p>
                
                <p className="mb-4">
                  <strong>The Breakdown:</strong><br />
                  With only 4-6 weeks left until my final LSAT take, timing and consistency became the most important aspects for me to master. At this point, most of my drills were still untimed and I was averaging about 40-42 minutes per Logical Reasoning and Reading Comprehension section with scores ranging anywhere from -0 to -6 per section (I had already gotten Logic Games to under 35 minutes with a consistent score of -0 by this point). This was a pretty significant score differential so I had to really focus on my accuracy in order to bring my range into a much tighter and more consistent -0 to -3. I also had to bring my timing per section down to 35 minutes – this is where the Marathons and FailSafes kicked in. With not a lot of time left until I took my January LSAT, I had to focus very hard on becoming faster and more consistent in my practice – we believed we could achieve this through the sheer volume of sections (with CAMO review) that I completed during this time.
                </p>
                
                <h2 className="font-sybarite text-gray-800 mb-6 text-30px">The Final Result</h2>
                
                <p className="mb-4">
                  When the day finally arrived, I felt pretty confident and prepared going into the exam. My experience, however, was not great. I began to crack under the pressure after the first section and by the last section, thoughts about canceling my score began to creep in. I felt like a total mess and was devastated after I completed the exam – in fact, I went straight to the LSAC website to cancel my score and was one click away from actually canceling my score. By the grace of a higher power, I couldn't do it. I knew deep down that I should consult with Ellen first before making any rash decisions, and when I brought it up to her a few days later, she very strongly convinced me not to cancel my score (and by very strongly I mean scolded/praised/begged/guilt-tripped/rationally persuaded me over the course of two weeks) until the score cancelation deadline passed. Without a single doubt in my mind, listening to her was the best decision I have ever made. My final score turned out to be a 168, which was technically towards the lower band of where I was scoring in practice, but significantly better than I expected based on my testing experience. The decision not to cancel, and Ellen's support throughout my entire LSAT journey, was instrumental to me ultimately having a successful law school application cycle. In fact, I'm extremely confident that I would not be writing this student story during the first week at my dream law school if it wasn't for Ellen.
                </p>
                
                <p className="mb-4">
                  Ellen believed in me even when I didn't believe in myself. And I'm not saying this in a cliché manner. The difference with Ellen is that she will legitimately expose your weaknesses, press where it hurts, accurately diagnose the issue, prescribe a highly effective treatment plan to ensure you build back stronger with healthy habits, and then invest an immense amount of personal and emotional support to ensure that you succeed. She is not only one of the best instructors I've ever had, but she is also an amazing mentor who will help you shatter your own self-doubt and exceed whatever goal you've set for yourself. This is what makes Elemental Prep so special.
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