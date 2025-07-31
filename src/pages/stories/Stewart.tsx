import Navigation from "@/components/Navigation";
import Footer      from "@/components/Footer";
import { Link }    from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function StewartStory() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ——— HERO (same teal strip) ——— */}
      <section className="bg-[#77b8b1] pt-36 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-neutra font-bold text-7xl">Stewart's LSAT Journey</h1>
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
                  src="/lovable-uploads/Images/stewart_headshot.png"
                  alt="Stewart"
                  className="float-left mr-6 mb-4 h-44 w-44 rounded-full object-cover shadow-md"
                />
                
                <p className="mb-4">
                  In April 2018, over three years ago, I completed my first diagnostic LSAT. I scored a 142. By December 2020 – over three years and four different test prep platforms later – I could only achieve a practice test score ranging from 148-153. These results were far less than satisfactory and, in the intervening time, I changed career paths and enrolled in an MBA. Beyond frustrated with my lack of significant LSAT improvement, I effectively gave up hope of attaining a competitive score for admission to a top law school.
                </p>
                
                <p className="mb-4">
                  Ellen Cassidy changed everything. I cannot thank her enough for her tremendous help and patience with helping me prepare for the LSAT. I truly have never met a more affable, competent, and professional tutor. It is remarkable to me how much energy and devotion Ellen brings to helping others tackle the LSAT. Unlike other teachers with whom I have worked in the past, Ellen will ensure that her students fully understand the material that she presents. Despite her laudable background and achievements as an educator, academic, and entrepreneur, she was never haughty or condescending – even when I would ask her the most vacuous of questions. Working with Ellen was a tremendous pleasure and yielded results that I previously thought unattainable. I highly recommend her to anyone seeking to better themselves with the LSAT without hesitation.
                </p>
                
                <p className="mb-4">
                  Follow below for a "day in the life" along my LSAT journey:
                </p>
                
                <h3 className="font-neutra font-bold text-xl text-[#77b8b1] mb-3">February: Translation</h3>
                
                <p className="mb-4">
                  <strong>The Results:</strong><br />
                  I initially read The Loophole and began to work through translation drills. I did not time the drills but read the stimuli and translations aloud into a recording device. Although this was time consuming and felt very strange, Ellen's method of listening to one's voice intonations as a stimulus is read trains the test taker to focus on the crucial words.
                </p>
                
                <p className="mb-4">
                  <strong>The Breakdown:</strong><br />
                  In previous test prep courses, I was taught to orient my focus on anticipating a type of question (e.g., attempt to predict while reading the stimulus whether a question might be a strengthen/weaken, parallel reasoning, main point, etc.). However, this places all emphasis on the test question itself.
                </p>
                
                <p className="mb-4">
                  Ellen's method turned this completely on its head. Rather than emphasizing the question, Ellen's method prioritizes fundamentally understanding the stimulus. When Ellen first said to me "a lot of what is written in the LSAT is completely ridiculous", I was beyond surprised. As my strategy before was to focus on the test question, I therefore gave the content of a stimulus lower priority and never thought about the veracity or logical sense of the stimulus itself. However, the more stimuli I read, the more I realized that Ellen was right. Some stimuli on the LSAT are indeed patently ridiculous. This deeper understanding of how a stimulus works, emphasis on recognizing crucial words and phrases, and how to recognize an argument's conclusion were essential tools in furthering my understanding of the test.
                </p>
                
                <p className="mb-4">
                  Do not be discouraged if this process takes a long time to comprehend. For me, I devoted the entire month of February to understanding these fundamental concepts. I also had to break old habits that I had learned with other test prep platforms.
                </p>
                
                <h3 className="font-neutra font-bold text-xl text-[#77b8b1] mb-3">March: Translation, Party Tricking, Mini-Cycles, Inside Out RC</h3>
                
                <p className="mb-4">
                  <strong>The Results:</strong><br />
                  I finished reading The Loophole and continued to complete translation and conditional reasoning drills. I also began to attempt LSAT questions.
                </p>
                
                <p className="mb-4">
                  Although I did not keep track of the number of questions that I missed in a section (I was still in the preliminary stages of attempting questions), I still found my understanding of the stimuli and question stems to be significantly higher as a result of working with Ellen.
                </p>
                
                <p className="mb-4">
                  I also began to translate RC passages and questions. To me, RC questions are easier and not as intense as LR questions – largely because the majority of RC questions are provable rather than powerful. Once I understood this, RC became easier to approach.
                </p>
                
                <p className="mb-4">
                  <strong>The Breakdown:</strong><br />
                  I remember this month being generally frustrating in that it was difficult to break the bad habits that I formed with previous test prep platforms. Juggling school with LSAT prep was also challenging.
                </p>
                
                <p className="mb-4">
                  Party tricking and minicycles were completely new to me and initially very strange. However, the more LR questions I translated and attempted, the more Ellen and I could recognize my tendencies with approaching certain questions as well as my responses to certain test situations. Ellen also writes wonderful comprehensive notes and pointers during her sessions. These notes gave me invaluable, nuanced pointers to improve my technique.
                </p>
                
                <p className="mb-4">
                  RC translation can be very meticulous – particularly with a complicated passage. Practicing RC sections therefore took me much longer to complete than LR.
                </p>
                
                <h3 className="font-neutra font-bold text-xl text-[#77b8b1] mb-3">April: Translation, Party Tricking, Mini-Cycles, Inside Out RC, Timed Sections</h3>
                
                <p className="mb-4">
                  <strong>The Results:</strong><br />
                  For LR, although I did not focus as much on how many questions per section I was missing, I ranged from -6 to -10. I also continued with RC translation for both the passages and questions. The sections that I completed were untimed.
                </p>
                
                <p className="mb-4">
                  <strong>The Breakdown:</strong><br />
                  The LR practice sections that I completed took a significant amount of time, with each section ranging from 56 – 98 minutes. Although this was substantial, I was able to improve my scoring and time to average -7 within about 65 minutes by the end of the month.
                </p>
                
                <h3 className="font-neutra font-bold text-xl text-[#77b8b1] mb-3">May: Translation, Timed Sections</h3>
                
                <p className="mb-4">
                  <strong>The Results:</strong><br />
                  During the first half of May, my LR scores deteriorated and I took more time to complete sections. However, this relapse eventually helped me improve my LR section score, and by the end of May I was able to range from -3 to -5 on a consistent basis. I even scored a -1 on a section! This felt like a major breakthrough.
                </p>
                
                <p className="mb-4">
                  I had a lot of success with RC sections and was able to range from -2 to a -7 in a section (I consistently scored -4 or -5).
                </p>
                
                <p className="mb-4">
                  I watched the LG videos on Elemental's website and began working through LG sections. However, I focused more on LR and RC during this month.
                </p>
                
                <p className="mb-4">
                  <strong>The Breakdown:</strong><br />
                  During May, I had final exams for school and also began a Summer internship. The exam period perhaps contributed to my relapse in LR section scores. This period for me was extremely frustrating – particularly since I felt that I had a good understanding of an argument stimulus but was nonetheless unable to translate this into desirable results with selecting the correct answer choice.
                </p>
                
                <p className="mb-4">
                  However, when I eventually improved my section scores, Ellen had to remind me of the implications of missing only 4 or 5 questions per LR section. When I began studying for the LSAT (before working with Ellen), I typically missed 11 – 15 questions per LR section. Ellen now had to point out to me how surreal it seemed and even how funny it was that I was now frustrated with missing 4 or 5 questions per section.
                </p>
                
                <p className="mb-4">
                  The LG videos are literally mind-blowing. After spending so much time with previous test prep platforms memorizing diagrams and different methods of approaching different types of games, learning Ellen's method was truly eye-opening and alleviated a lot of stress that I previously had for the LG section.
                </p>
                
                <h3 className="font-neutra font-bold text-xl text-[#77b8b1] mb-3">June – July: Translation, Timed Sections, PTs</h3>
                
                <p className="mb-4">
                  <strong>The Results:</strong><br />
                  During these last two months of test prep, I focused on increasing my stamina for completing at first two sections at a time, then three, and then a full practice test. Although I inevitably lost focus in at least one section during a PT, this allowed me to draft an attack plan to better approach a PT.
                </p>
                
                <p className="mb-4">
                  I consistently scored 164-167.
                </p>
                
                <p className="mb-4">
                  <strong>The Breakdown:</strong><br />
                  Building up stamina to take a full PT is challenging. I literally made a list of things to think about before, during, and after certain sections. Ellen also referred me to Gabe Kenney – a therapist who helps standardized test takers prepare for test day. Gabe was instrumental in helping me build my mental stamina and composure during these last two months before my test.
                </p>
                
                <p className="mb-4">
                  Ellen also recommended that I re-read The Loophole. This allowed me to internalize pointers more effectively since I now had more context after studying throughout the Spring and Summer.
                </p>
                
                <h3 className="font-neutra font-bold text-xl text-[#77b8b1] mb-3">August: Test Day!</h3>
                
                <p className="mb-4">
                  In the two weeks before my test, I continued to take PTs and re-read The Loophole. Based on my PT scores, I was confident that I would score in the 164-167 range. My 168 therefore came as a surprise! However, I hope that this experience not only serves as a testimony to Ellen's superior method and ability as a tutor, but also as encouragement to those who consider themselves ill-suited to standardized tests. If Ellen was able to help me improve my score to this degree, I am certain that she can help anyone who comes to her with an open and positive attitude, dedication, and willingness to persevere and improve. Good luck!
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