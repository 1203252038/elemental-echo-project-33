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
                  I'm a non-native English speaker who believed that the LSAT was undefeatable for someone like me. 
                  I have vocabularies that I don't know the meaning of when reading a passage. I would need extra time 
                  to parse out the sentence when it's long enough for me to lose track. Worst of all, I had way too few
                  experiences of reading convoluted English passages compared to native English speakers.
                </p>
                
                <p className="mb-4">
                  All of the above made me a super slow English reader, and the LSAT asked for something opposite. 
                  I studied for the LSAT myself for five months before I found Ellen. I scored 147 for my first timed 
                  PT after finishing the 7sage curriculums. Honestly, Ellen was my last hope before I gave up the dream
                  of attending a US law school.
                </p>
                
                <p className="mb-4">
                  So, when I first met Ellen, I told her that my goal was 165, and deep down, 
                  I was thinking it might be too much to ask for. However, Ellen was just smiling and told me it was perfectly 
                  doable. Thank God I believed her! I received a 174 on my actual test – a score I couldn't have even remotely
                  dreamt about. So what I'm trying to say is that the LSAT is hard-won for me, and I'm grateful to have Ellen 
                  all the way by my side.
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