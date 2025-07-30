import Navigation from "@/components/Navigation";
import Footer      from "@/components/Footer";
import { Link }    from "react-router-dom";
import { Button } from "@/components/ui/button";

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
                  src="/lovable-uploads/Images/alex_headshot.jpg"
                  alt="Alex"
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


              {/* BACK LINK */}
              <div className="pt-8 text-center">
                <Link to="/student-stories">
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