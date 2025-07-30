import Navigation from "@/components/Navigation";
import Footer      from "@/components/Footer";
import { Link }    from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CelesteStory() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ——— HERO (same teal strip) ——— */}
      <section className="bg-[#77b8b1] pt-36 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-neutra font-bold text-7xl">Celeste’s LSAT Journey</h1>
        </div>
      </section>

      {/* ——— NAVY BACKGROUND LAYER ——— */}
      <div className="bg-[#2d3c6f]">
        <div className="relative -mt-12 mx-4 sm:mx-8 lg:mx-12">
          <div className="rounded-t-lg bg-white shadow-2xl">

            {/* ——— MAIN CONTENT ——— */}
            <article className="px-8 py-16 lg:px-20 mx-auto max-w-3xl font-neutra text-[18px] leading-relaxed text-gray-700 space-y-10">

              {/* PRESENT DAY (two-column flex) */}
              <section className="lg:flex lg:items-start lg:gap-10">
                {/* Avatar */}
                <img
                  src="/lovable-uploads/Images/celeste_headshot.jpg"
                  alt="Celeste"
                  className="mx-auto mb-6 h-44 w-44 rounded-full object-cover shadow-md lg:mx-0 lg:mb-0 flex-shrink-0"
                />

                {/* Text block */}
                <div className="flex-1">
                  <p>
                    I’m a non-native English speaker who believed that the LSAT was undefeatable for someone like me. 
                    I have vocabularies that I don’t know the meaning of when reading a passage. I would need extra time 
                    to parse out the sentence when it’s long enough for me to lose track. Worst of all, I had way too few
                    experiences of reading convoluted English passages compared to native English speakers. 
                    All of the above made me a super slow English reader, and the LSAT asked for something opposite. 
                    I studied for the LSAT myself for five months before I found Ellen. I scored 147 for my first timed 
                    PT after finishing the 7sage curriculums. Honestly, Ellen was my last hope before I gave up the dream
                    of attending a US law school. So, when I first met Ellen, I told her that my goal was 165, and deep down, 
                    I was thinking it might be too much to ask for. However, Ellen was just smiling and told me it was perfectly 
                    doable. Thank God I believed her! I received a 174 on my actual test – a score I couldn’t have even remotely
                    dreamt about. So what I’m trying to say is that the LSAT is hard-won for me, and I’m grateful to have Ellen 
                    all the way by my side.
                  </p>
                </div>
              </section>
               {/* Intro with portrait */}
              <section className="lg:flex lg:items-start lg:gap-10">
                <div className="flex-1">
                  <p>
                    Follow below for a day in the life along my LSAT journey.
                  </p>
                </div>
              </section>

              {/* July – September */}
              <section>
                <h2 className="mb-2 text-2xl font-extrabold text-gray-800">
                  July – September: LR Translation
                </h2>

                <h3 className="mb-2 text-xl font-bold text-gray-800">The Results:</h3>
                <p className="mb-4">
                  That’s right. I spent the entire three months on the LR translation drill and LR translation drill
                  alone. I bet no one had done more translation drills than I did. And it was all worth it. I still
                  remember I spent 1 hour and 45 minutes finishing my first translation section. And I only needed
                  35 minutes to complete one by the end of September.
                </p>

                <h3 className="mb-2 text-xl font-bold text-gray-800">The Breakdown:</h3>
                <p className="mb-4">
                  Honestly, the Translation drill could feel tedious and endless. It was already hard enough for me to
                  read the complex stimulus all the way to the end, let alone talk about it out loud using my own words.
                  But it wasn’t until then that I realized that I actually didn’t understand the meaning of so many
                  stimuli when I thought I did. The process of CLIR also compelled me to actively analyze every stimulus
                  I encountered. As Ellen always said, when she read an LSAT stimulus or passage, she read it as a fun
                  story, not a test material. This was absurd to me at the beginning. However, I gradually learned to
                  appreciate the stimulus during translating and CLIR. And I believe that this appreciation helped me to
                  bring the time down.
                </p>
                <p className="mb-4">
                  Because I’m a non-native English speaker, I spent so much time with Ellen discussing the English
                  words. It was always so fun to learn how Ellen understands a word. She taught me to recognize the root
                  of a word and made me feel that English is so delicate that every word has many underlying, subtle
                  meanings. For example, I didn’t know the huge difference between scholarship and scholarships. And
                  something that is controversial is scandalous and problematic in a bad way. Plus, you don’t use
                  attractive to describe a painting, and you should be very cautious when you say a person is attractive.
                </p>
              </section>

              {/* September – November */}
              <section>
                <h2 className="mb-2 text-2xl font-extrabold text-gray-800">
                  September – November: RC Translation, AC Translation, Extracurricular Reading
                </h2>

                <h3 className="mb-2 text-xl font-bold text-gray-800">The Results:</h3>
                <p className="mb-4">
                  I was excited that I was finally ready to drill something other than LR Translation. However, the RC
                  Translation was even more challenging for me as a non-native English speaker, as it sometimes has
                  English sayings that require an understanding of American culture or history. This is why Ellen asked
                  me to read more extra-curricular articles or books in addition to the LSAT drills. I read articles
                  from The Atlantic and Aeon, and most chapters of the book The New York Times: Guide to Essential
                  Knowledge. By the time I successfully Translated a passage in around 10 minutes, I knew it was time to
                  move forward, and I was excited to see what was coming next.
                </p>

                <h3 className="mb-2 text-xl font-bold text-gray-800">The Breakdown:</h3>
                <p className="mb-4">
                  The RC Translation is challenging because it has too many materials for you to remember. Before
                  meeting Ellen, I was taught by other LSAT books that I didn’t need to understand every bit of the
                  passage. Instead, a basic grasp of the main structure would rather suffice. But it was proven wrong. I
                  wasted so much time going back to re-read the passage when there was a question asking about material
                  I didn’t remember or understand. Translating the RC passage really helped me better understand the
                  flow of the article. I no longer read the passage as separate paragraphs; instead, I read it as a
                  whole story. In order to remember and Translate the entire passage, I actively looked for the logic or
                  the interlocking points between paragraphs. I later found out that this true understanding was
                  paramount to answering the questions.
                </p>
              </section>

              {/* November – December */}
              <section>
                <h2 className="mb-2 text-2xl font-extrabold text-gray-800">
                  November – December: Translation, Party Tricking, Mini-Cycles, Inside Out RC
                </h2>

                <h3 className="mb-2 text-xl font-bold text-gray-800">The Results:</h3>
                <p className="mb-4">
                  My first Mini-Cycle was scored -2 on November 11. It was tremendously exciting for both Ellen and me.
                  I still remember Ellen’s positive reaction to my score for my first section after five months of
                  Translation drills. Her warm response to my every tiny success was always lovely and infectious. I was
                  greatly motivated by Ellen’s feedback to do more drills, just trying not to let her down. I scored
                  consistently -0 to -3 for my Mini-Cycle ever after.
                </p>

                <h3 className="mb-2 text-xl font-bold text-gray-800">The Breakdown:</h3>
                <p className="mb-4">
                  The Party Trick was my favorite part of the LSAT journey. I loved analyzing whether an answer choice
                  was powerful or provable without looking at the stimulus. Party-Tricking made me pay extra attention
                  to the tiny details of every answer choice, as they were everything I had to choose an answer. I even
                  made a spreadsheet to track my Mini-Cycle drills, and I was looking at it fondly. At this point, I was
                  no longer scared of doing questions or making mistakes like I previously was. I believe all the
                  Translation drills gave me the confidence to know that I could really understand a stimulus or passage.
                  And because I started to get the vibe of LSAT, I knew when I chose a correct answer without checking
                  the answer sheet. I remember Ellen told me that I didn’t have to read the explanations when I got a
                  question wrong because I had the ability to figure it out myself later. This realization made me even
                  more confident when doing the questions.
                </p>
              </section>

              {/* January – February */}
              <section>
                <h2 className="mb-2 text-2xl font-extrabold text-gray-800">
                  January – February: Translation, Stopwatch Sections, Thunderdome, Marathons
                </h2>
                <p className="mb-4">
                  I received -1 and -2 for my first Stopwatch LR and Stopwatch RC. However, my score for RC fluctuated a
                  bit from -0 to -7. So I tried several Marathons as a means to make it more stable. I had the privilege
                  of doing Marathons because I had more than 30 fresh PTs left. And it was working. I started to score
                  more consistently in my RC.
                </p>
              </section>

              {/* March */}
              <section>
                <h2 className="mb-2 text-2xl font-extrabold text-gray-800">
                  March: Translation, Logic Games, Masterpiece Sections, PTs
                </h2>

                <h3 className="mb-2 text-xl font-bold text-gray-800">The Results:</h3>
                <p className="mb-4">
                  I started to pick up Logic Games before practicing full PTs. Games were the section that I worried
                  about the least, as I mostly had -0 to -5 in games using other prep methods before studying with
                  Ellen. However, if I was aiming for something above 170, I would have to make sure that I absolutely
                  could have -0 in games. So I decided to forget everything I learned from other prep companies and
                  started all over again with Ellen’s method. I quickly brought my score from around -4 to -0.
                </p>
                <p className="mb-4">
                  So now it was time to do full PTs. I quickly started to score constantly above 170 since I began to do
                  full PTs. Eventually, I received an official 174 after practicing 7 PTs, all in the range of 173 to
                  175. So it wasn’t entirely surprising.
                </p>

                <h3 className="mb-2 text-xl font-bold text-gray-800">The Breakdown:</h3>
                <p className="mb-4">
                  Ellen has a unique way of doing Logic Games. I thought other prep methods were good enough for me to
                  complete the section within the time range. So I was surprised to hear Ellen saying that her method
                  would be even better. However, it was true. Ellen’s method of doing games is straightforward, clever,
                  and requires the least amount of time. More importantly, it was accurate and ensured I wouldn’t make
                  mistakes. When I first saw Ellen doing games, I still remember that she didn’t even really solve some
                  of the questions because the answer to those questions was right there on her scratch paper. It looked
                  like magic. I even tested the answers by re-doing the question using old methods. And it turned out
                  she was right.
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