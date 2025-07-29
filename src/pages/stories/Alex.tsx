import Navigation from "@/components/Navigation";
import Footer      from "@/components/Footer";
import { Link }    from "react-router-dom";

export default function AlexStory() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ——— HERO (same teal strip) ——— */}
      <section className="bg-[#77b8b1] pt-36 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-neutra font-bold text-7xl">Alex’s LSAT Journey</h1>
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
                  src="https://images.unsplash.com/photo-1558944351-bc48067df7fe?auto=format&fit=crop&w=320&q=80"
                  alt="Alex – placeholder"
                  className="mx-auto mb-6 h-44 w-44 rounded-full object-cover shadow-md lg:mx-0 lg:mb-0 flex-shrink-0"
                />

                {/* Text block */}
                <div className="flex-1">
                  <h2 className="mb-4 text-2xl font-extrabold text-gray-800">
                    Present Day:
                  </h2>
                  <p>
                    Moments ago, I logged off my last Zoom session with Ellen.
                    We spent the last hour reflecting back on our three years
                    working together and after I clicked “leave meeting” I
                    noticed I began to tear up. To me, Ellen is so much more
                    than an LSAT tutor and mentor; Ellen truly is one of my
                    closest friends.
                  </p>
                </div>
              </section>

              {/* SECOND-YEAR SECTION */}
              <section>
                <h2 className="mb-4 text-2xl font-extrabold text-gray-800">
                  My Second Year of Undergrad:
                </h2>

                <p>
                  I realize that this would probably be a good point to
                  introduce myself. First and foremost, I am <em>not</em> a paid
                  actor. Everything in this reflection comes from my own
                  experiences and I am writing this because I remember how
                  daunting the law-school process seemed three years ago when I
                  was in your shoes.
                </p>

                <p>
                  I reached out to Ellen because I had an inkling I wanted to 
                  attend law school straight after graduation. This path is 
                  coined “KJD” which is a fancy way to say Kindergarten – Juris Doctor. 
                  I didn’t know this at the time, but most people don’t take this path. 
                  Instead of discouraging me from my goal, Ellen did exactly what I needed: 
                  she gave it to me straight and told me that I would have to score extremely
                  high on the LSAT and keep my undergrad GPA up. She also recommended I gain 
                  as much legal experience as possible during undergrad so I could be certain
                  of my choice to apply straight through by the time my senior year of college
                  came around. 
                </p>

                <p>
                  Later that week, I took my first LSAT and scored a 152. Ellen 
                  was throwing around numbers 170+ and saying things like “zeroing” logic games; 
                  meanwhile, I was staring at eleven red circles per section. At this point, 
                  I was overwhelmed with imposter syndrome. I was fearful that Ellen would be 
                  disappointed and tell me my goal was out of sight because I truly believed it 
                  would be impossible.
                </p>

                <p>
                  When I hopped on our second meeting, I braced myself for what I assumed 
                  Ellen would say about needing to lower my expectations. However, my 
                  diagnostic score never came up. Looking back, this makes perfect sense. 
                  No matter where you are in life, if you tell Ellen what your goals are, 
                  even if you don’t believe in yourself and you don’t think you can achieve 
                  those goals, Ellen will believe in you.
                </p>
                
              </section>
              {/* ——— READING ELLEN’S BOOK ——— */}
              <section>
                <h2 className="mb-4 text-2xl font-extrabold text-gray-800">
                  Reading Ellen’s Book:
                </h2>
              
                <p className="mb-4">
                  This section is dedicated to the skimmers. If you work with Ellen,
                  the first thing she will do is instruct you to read her book. I consider
                  myself a pretty great skimmer, so obviously I skimmed it. Somehow… she
                  knew and she told me she knew. So, I did what most of you are probably thinking:
                  I skimmed the next couple chapters a bit better.
                </p>
              
                <p className="mb-4">
                  She will know every single time you cut a corner. I think there is a tendency
                  for college students to cut corners during their prep because it truly is a lot
                  on top of a heavy course load. I tried every shortcut possible, so whatever you
                  are thinking of, it won’t work. Looking back, I was only hurting myself. After
                  wasting weeks, I went back to page one and created an 80 page single spaced study
                  guide on Ellen’s book.
                </p>
              </section>
              
              {/* ——— SOPHOMORE YEAR: LR ——— */}
              <section>
                <h2 className="mb-4 text-2xl font-extrabold text-gray-800">
                  My Sophomore Year: LR
                </h2>
              
                <p className="mb-4">
                  Since all of my sections needed improvement, Ellen and I began by tackling Logical
                  Reasoning. The first technique Ellen will likely teach you is how to translate a
                  stimulus and this is where Ellen’s personality comes into play. You will be translating
                  approximately a billion of these stimuli over the course of your LSAT journey and
                  Ellen’s sense of humor makes this incredibly fun.
                </p>
              
                <p className="mb-4">
                  I never thought I would laugh so much when prepping for the LSAT but Ellen can put
                  a funny twist on the most boring of all stimuli whether it’s on Nethanderals or how
                  dryers shrink garments. When searching for an LSAT tutor, I wouldn’t have ever considered
                  finding somebody that had a sense of humor but I think Ellen perceived that humor was
                  something that motivated me and incorporated it into every session.
                </p>
              </section>
              {/* ——— JUNIOR YEAR: ACADEMICS & INTERNSHIPS ——— */}
              <section>
                <h2 className="mb-4 text-2xl font-extrabold text-gray-800">
                  My Junior Year: My Academics and Internships
                </h2>
              
                <p className="mb-4">
                  Ellen and I worked on my LR sections for a number of months; however, I think it’s important
                  to mention the manner in which she advised and supported me in other sectors of my life during
                  this time. One benefit of beginning to work with Ellen on the early side of the law school admissions
                  process was she helped me stay organized to keep up my GPA. I came up with study plans for my courses
                  with Ellen and often would ask her for advice regarding what my schedule should be like during registration.
                  She proofread my cover letters, retailored my resume, and ran mock interviews with me during our session.
                  I ended up keeping my GPA high and getting multiple top choice internships.
                </p>
              </section>
              
              {/* ——— JUNIOR YEAR: RC & GAMES ——— */}
              <section>
                <h2 className="mb-4 text-2xl font-extrabold text-gray-800">
                  My Junior Year: RC and Games
                </h2>
              
                <p className="mb-4">
                  The bulk of my LSAT prep took place during my third year. After studying LR, we moved to RC. Ellen brought
                  the same charisma and humor to our RC studying that she did with LR. From that point, we pivoted to implementing
                  Ellen’s games method which is truly phenomenal. I went from -11 on games to -2 within a couple of weeks.
                  Finally, I was ready to start doing full practice tests and I scored a 170 on my first practice test after
                  working with Ellen.
                </p>
              
                <p className="mb-4">
                  Regardless, I still didn’t feel ready for my upcoming LSAT. I thought my practice scores were a fluke and
                  tried to push the test off multiple times. However, Ellen assured me that I was ready and although I went
                  into the test certain that I would prove her wrong, I ended up scoring in the low 170s on the real exam.
                </p>
              </section>


              {/* BACK LINK */}
              <div className="pt-8 text-center">
                <Link to="/student-stories" className="text-sky-600 underline hover:text-sky-800">
                  ← Back to Student Stories
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