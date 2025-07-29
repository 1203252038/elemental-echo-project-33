import Navigation from "@/components/Navigation";
import Footer      from "@/components/Footer";
import { Link }    from "react-router-dom";

export default function AlexStory() {
  return (
    <div className="min-h-screen">
      {/* 1️⃣ Fixed-nav spacer + teal hero */}
      <Navigation />

      <section className="bg-[#77b8b1] text-white py-20 pt-36 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-neutra font-bold text-7xl">
            Alex’s LSAT Journey
          </h1>
        </div>
      </section>

      {/* 2️⃣ Navy background */}
      <div className="bg-[#2d3c6f]">
        {/* 3️⃣ White card that overlaps the hero */}
        <div className="relative -mt-12 mx-4 sm:mx-8 lg:mx-12">
          <div className="rounded-t-lg bg-white shadow-2xl">
            {/* 4️⃣ Main content */}
            <section className="py-16 px-8 lg:px-16">
              <div className="mx-auto max-w-3xl space-y-6 font-neutra text-[18px] leading-relaxed text-gray-700">
                <p>
                  When Alex started with Elemental Prep he was scoring a 158 on
                  timed practice tests. Two months later he walked into the real
                  LSAT and scored a&nbsp;<strong>175</strong>.
                </p>

                <p>
                  His biggest hurdle wasn’t logic games or reading speed—it was
                  believing that dramatic improvement was possible. Here’s the
                  drill-by-drill breakdown of how he did it …
                </p>

                {/* 👉  Add more <p>, <h2>, images, blockquotes, etc. */}

                <blockquote className="border-l-4 border-[#77b8b1] pl-4 italic text-gray-600">
                  “No matter where you are in life, if you tell Ellen what your
                  goals are—even if you don’t believe in yourself—Ellen will
                  believe in you.” <br /> <span className="font-bold">— Alex</span>
                </blockquote>

                {/* back-link */}
                <div className="pt-8 text-center">
                  <Link
                    to="/student-stories"
                    className="text-sky-600 hover:text-sky-800 underline"
                  >
                    ← Back to Student Stories
                  </Link>
                </div>
              </div>
            </section>

            {/* 5️⃣ Grey footer stripe inside the card */}
            <div className="bg-[#323437]">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}