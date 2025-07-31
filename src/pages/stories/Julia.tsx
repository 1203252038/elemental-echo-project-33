import Navigation from "@/components/Navigation";
import Footer      from "@/components/Footer";
import { Link }    from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function JuliaStory() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ——— HERO (same teal strip) ——— */}
      <section className="bg-[#77b8b1] pt-36 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-neutra font-bold text-7xl">Julia's LSAT Journey</h1>
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
                  src="/lovable-uploads/Images/julia_headshot.png"
                  alt="Julia"
                  className="float-left mr-6 mb-4 h-44 w-44 rounded-full object-cover shadow-md"
                />
                
                <p className="mb-4">
                  A 141. That was my diagnostic score. When I first saw this number, I knew I had a long road ahead of me, but was determined to study as much as I needed to in order to get the score I wanted. I studied using mainstream LSAT materials and was progressing into the high 150's but was struggling to get past a 158. I knew I was missing something, so I started looking online for suggestions. I saw The Loophole all over the place. People were praising it saying it helped them improve in logical reasoning so, since LR was one of my worst sections, I ordered it.
                </p>
                
                <p className="mb-4">
                  Though before I could even finish the book my November LSAT was here. After studying for over a year, I took the November 2021 LSAT and received a 162. While I was impressed with my progress, I knew that I could do better. In order to improve my score, however, I needed to change my approach. I went back to The Loophole and actually finished it (something I highly recommend to all Loophole-casual readers!). Ellen's methodology was so different from what I was used to, and after applying it to some of my drills I already started to see an improvement. I knew the next time I took the test I wanted to go all out, so I decided to go the extra mile and sign up for tutoring with Ellen.
                </p>
                
                <p className="mb-4">
                  Follow below for a "day in the life" along my LSAT journey:
                </p>
                
                <h3 className="font-neutra font-bold text-xl text-[#77b8b1] mb-3">February – March: Meeting Ellen, Trying to Quit, and Translation and CLIR Drills</h3>
                
                <p className="mb-4">
                  <strong>The Drills:</strong><br />
                  Translation + CLIR!
                </p>
                
                <p className="mb-4">
                  <strong>The Results:</strong><br />
                  To say my first week with Elemental was rocky would be an understatement. Not only did I record my first Daily Virtual Tutoring lesson in complete silence while using the wrong practice test, but I also tried to leave Elemental altogether. Yes, you read that right. I tried to leave. Despite feeling excited about this new chapter in my LSAT journey, I started second guessing things. The change in approach was so new and so different that I wanted to just run away and abandon ship. In an anxiety-induced breakdown, I emailed Ellen and explained that I no longer wanted to pursue tutoring with her and requested a refund. Thankfully, Ellen saw through my anxiety-riddled response and asked if we could have a short chat. Ellen saw that I was overwhelmed but knew I had what it took. After calming me down, she encouraged me to stay with Elemental, and so, I did. And thank God for that!
                </p>
                
                <p className="mb-4">
                  Thankfully Ellen talked me off this ledge!
                </p>
                
                <p className="mb-4">
                  <strong>The Breakdown:</strong><br />
                  Despite my rocky start with Elemental, I knew I was in the right hands. I am pretty confident in saying that there is no one on planet earth who is more passionate about the LSAT and her students than Ellen Cassidy. I gradually started to improve my Translation skills through Translation drills and the Daily Virtual Tutoring lessons. While my Translation skills were improving, I still had zero confidence in my ability to CLIR. This, again, triggered more anxiety-induced freakouts in my study room. Once my Translation skills were pretty solid, Ellen began addressing my insecurity with CLIRing. She assigned CLIR drills to me to start directly tackling this problem. Looking back, it is almost funny to me how much I struggled with CLIRs in the beginning because they have become second nature to me.
                </p>
                
                <h3 className="font-neutra font-bold text-xl text-[#77b8b1] mb-3">March-April: Sinking into the Process</h3>
                
                <p className="mb-4">
                  <strong>The Drills:</strong><br />
                  Inside-Out RC, RC Marathon, and Mini-Cycles
                </p>
                
                <p className="mb-4">
                  <strong>The Results:</strong><br />
                  Once my LR skills started to improve, Ellen and I moved to RC. She told me to do some Inside-Out RC Drills, where I got into the nitty gritty of the RC section and all of its components. These drills certainly improved my understanding of the section, but my comprehension of the passages was still faltering. It became clear that I was not applying the same standards of translating LR to translating these RC passages. So, Ellen assigned the dreaded RC Marathon Drill to me. While I would argue this is one of the most daunting drills to do, I also believe it played a fundamental role in my overall performance on the RC section. As I continued practicing RC with Ellen, we started doing Mini-Cycles to further improve my LR skills. During this time I found a testing method that would stick with me all the way to test day in June 2022: TQCM/PV/B. Okay, I know this looks confusing, but this is what laid the foundation for me having a consistent and standard approach to each and every LR question. The letters in TQCM/PV/B each stand for a particular step in my LR method. I would write this acronym vertically next to each question and check each letter off as I went through the steps to ensure I was following my own gold standard.
                </p>
                
                <p className="mb-4">
                  <strong>The Breakdown:</strong><br />
                  After doing the RC Marathon for a week, I finally had a solid understanding of the entire passage, which not only improved my overall score, but gave me the confidence that I was lacking for so long in RC. Out of all of the testing methodologies I used, the TQCM/PV/B acronym was one of the most essential ones in improving my score. It was the perfect way for me to ensure that I followed each and every step and never allowed my standards to fall.
                </p>
                
                <h3 className="font-neutra font-bold text-xl text-[#77b8b1] mb-3">April-May: More RC and Form Checks</h3>
                
                <p className="mb-4">
                  <strong>The Drills:</strong><br />
                  Inside Out RC, RC Decaf Translation, RC Marathons
                </p>
                
                <p className="mb-4">
                  <strong>The Results:</strong><br />
                  The Inside-Out RC and the RC Marathon helped improve my performance, but my approach still wasn't perfect. I tried out the RC Decaf approach, which brought my Translation of the passages to an entirely new, and nearly perfect, level. PS! If you're interested in getting the instructions for the RC Translation drill, email hello@elementalprep.com! During this time, I had all of the pieces for LR and RC- I just needed help putting them together. I had already done a few Form Checks with Molly during the month of March, but April is when I really started to invest a lot of time into them. With Form Checks, Molly would observe me doing an LR or RC section and would then give me big takeaways (what I did well, what I needed to work on, and so on), as well as an in-depth analysis of each and every question I went through. She gave me feedback on the LSAT process of course, but equally valuable was her feedback on my test mindset. She would hear me say little comments to myself that I hadn't even noticed, like "this question is hard, I don't know," and watch it turn into improper LSAT form and a wrong answer. We worked together to identify and practice test day mentality strategies to make sure I performed my absolute best, no matter what challenges the test threw my way.
                </p>
                
                <p className="mb-4">
                  <strong>The Breakdown:</strong><br />
                  By this point in my studying, I had developed a solid understanding of the exam. My main issue throughout my time with Elemental that I kept running into was…me. I would constantly get in my own way and delay my progress because I simply lacked the confidence in my abilities. My sessions with Ellen and my Form Checks with Molly really helped me start to see how far I had come.
                </p>
                
                <h3 className="font-neutra font-bold text-xl text-[#77b8b1] mb-3">May-June: More Form Checks and Putting it All Together</h3>
                
                <p className="mb-4">
                  <strong>The Drills:</strong><br />
                  Timed Sections
                </p>
                
                <p className="mb-4">
                  <strong>The Results:</strong><br />
                  During this last month of prep, I continued doing my Form Checks. I got my first ever -1 in RC and -1 in LR! I was shocked at how much I had improved! I continued doing timed sections, reviewing them with Ellen, and doing my Form Checks with Molly.
                </p>
                
                <p className="mb-4">
                  Then, before I knew it, it was test day! For my exam, I received accommodations (70 minutes per section, start/stop time, paper exam, talk out loud, and a 2-day administration). Knowing I had these tools and the standards I had worked so hard on with Ellen and Molly with me, I knew it was my time to shine and show off my skills! My first section was LR, and I followed my standards to a tee (this ended up being my experimental section, but hey, it's good practice). After I took a break, I moved on to the second and last section for that day: RC. I knew exactly what I needed to do and began my section feeling confident. Then, I lost it. I became overwhelmed with this feeling of dread. I had no idea what I was doing and started to panic and cry. I told myself that I had already failed the exam and was never going to get a 170+. I immediately stopped my timer and took the time to cry and get all of the negative emotions out. These breakdowns were not uncommon during my Form Checks, so I knew I just needed a breather. After about 20 minutes, I readjusted my mindset and was ready to continue. I finished the other three passages and then came back to the first. All in all, there were only two questions I felt a bit uneasy about, which was pretty good for me!
                </p>
                
                <p className="mb-4">
                  On day two I started off with LG. You may have noticed that I haven't discussed LG at all up until this point. To be honest, I was always pretty good at LG. I followed Ellen's method the entire time and knew I finished the LG section with a -0. Then, my real LR section was here. Again, I followed my standards to a tee.
                </p>
                
                <p className="mb-4">
                  After the test, I felt confident that I did much better than my 162, but, like everyone, I was feeling nervous and insecure. Before I knew it, it was almost score release day. I knew I wouldn't be able to check my score without having a complete mental breakdown, so thankfully Molly was gracious enough to check for me. I gave her my username and password to my LSAC account the night before and then…waited. Before I knew it, I was being awoken by my phone ringing. And that's when I found out I had received…a 172!
                </p>
                
                <h3 className="font-neutra font-bold text-xl text-[#77b8b1] mb-3">Final Thoughts</h3>
                
                <p className="mb-4">
                  At the end of the day, my results speak for themselves. I put in the time and effort and was able to score a 172. While studying for this test is an emotional process (trust me, I have cried countless times), it is important to be realistic. This is a difficult test. One of the most difficult standardized tests out there. Mastering this exam does not happen overnight and requires a great deal of dedication. If you are ready to dedicate yourself to this test and put your trust in the Elemental process, then you can and will succeed.
                </p>
                
                <p className="mb-4">
                  I found a quote off the internet that I ended up taping to my wall to motivate me. It says "grit is the stubborn refusal to quit." You must live by this quote while you study for the LSAT. There are going to be times when you plateau, get confused, and want to quit. You cannot allow these moments of insecurity to get the best of you. You must push through to get to the other side. If I can go from the 15th percentile to the 98th, then you can get the score you want.
                </p>
                
                <p className="mb-4">
                  PS – If you are like me and suffer from medical and mental health issues, please apply for accommodations through LSAC for your examination. There is absolutely nothing wrong with acknowledging that because of physical or mental health challenges, you need your examination to be accommodated. Seriously, DO IT!
                </p>
                
                <h3 className="font-neutra font-bold text-xl text-[#77b8b1] mb-3">Final Final Thoughts</h3>
                
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Do not take the test until you're ready (and trust me, Ellen will let you know when you're ready).</li>
                  <li>It is normal to get confused and overwhelmed! Once you've read The Loophole and have been working with Ellen, you know how to do this test. So, do not allow your standards to fall when you get overwhelmed! Stop, calm down, and start over! The beauty of The Loophole and Elemental is that they give you a step-by-step approach to every question, so if you're overwhelmed all you need to do is take a breather and go back to the stimulus. There is no shame in doing that! I literally had to do that on test day!</li>
                  <li>Utilize the Elemental Community, and record your practicing! I think what helped me improve was posting videos of my process so that other Elemental students could interact with me and help me out. Not only did this help my actual skills, but it also showed everyone that it's okay to make mistakes! Even 180 people make mistakes!</li>
                  <li>One more time: If I started at a 141 and can get a 172, then you can get the score you've always wanted!</li>
                </ul>
                
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