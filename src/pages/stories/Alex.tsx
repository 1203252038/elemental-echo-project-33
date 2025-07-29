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
                  coined “KJD” which is a fancy way to say Kindergarten&nbsp;–
                  Juris Doctor. I didn’t know this at the time, but most people
                  don’t take this path…
                </p>
              </section>

              {/* — Add more <section> blocks for each chapter — */}
              <section>
                <h2 className="mb-4 text-2xl font-extrabold text-gray-800">
                  My Sophomore Year: LR
                </h2>
                <p>
                  Since all of my sections needed improvement, Ellen and I began
                  by tackling LR. …
                </p>
              </section>

              {/* Repeat for each heading: junior year RC/Games, fourth year, etc. */}

              {/* THANK-YOU SECTION */}
              <section>
                <h2 className="mb-4 text-2xl font-extrabold text-gray-800">
                  Thank You:
                </h2>
                <p>
                  All in all, if you relate to anything in this account, I
                  cannot recommend Ellen enough. I would be happy to speak with
                  anybody considering working with Ellen and answer any
                  admissions or LSAT related questions.
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