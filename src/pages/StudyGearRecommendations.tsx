import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const StudyGearRecommendations = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with teal background */}
      <section className="bg-[#77b8b1] text-white py-20 pt-36 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sybarite text-50px md:text-92px leading-tight text-white mb-8">
              Study Gear Recommendations
            </h1>
          </div>
        </div>
      </section>

      {/* Navy background starts here */}
      <div className="bg-[#2d3c6f]">
        {/* Main Card Container - White with overlap and side shadows */}
        <div className="relative -mt-12 mx-4 sm:mx-8 lg:mx-12">
          <div className="bg-white rounded-t-lg shadow-2xl">
            {/* Main Content Section */}
            <section className="py-16 px-8 lg:px-16">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none text-gray-700">
                  
                  <p className="font-neutra text-19px leading-relaxed mb-6">
                    That's about 10% of my pencil collection. I am an unabashed pencil nerd.
                  </p>
                  
                  <p className="font-neutra text-19px leading-relaxed mb-6">
                    My tutoring students are always intrigued by my fancy pencils, erasers, and notebooks. They've been trying to convince me to make a guide showcasing my favs for years. Now, I've finally gotten enough online requests that I'm ready to share the fruits of my many, many pencil/eraser/notebook tests. The pencils, erasers, and sharpeners that I'm recommending all conform to LSAC guidelines and have been used successfully by many tutoring students on the day of the test.
                  </p>
                  
                  <p className="font-neutra text-19px leading-relaxed mb-6">
                    Obviously, you can buy whatever LSAT gear you want at Office Max, but I think of cute LSAT gear as akin to cute workout gear. If enrobing myself in special soft Lycra will make me workout more, I think it's worth it. Especially with how the LSAT often makes you feel gross. Really nice pencils will make your experience just that much less suck.
                  </p>
                  
                  <p className="font-neutra text-19px leading-relaxed mb-8">
                    All the pencils I'm recommending are Palomino Blackwings. For us pencil nerds, Palomino Blackwings are our Chanel. When you hold them in your hand, they just feel better. When you write with them, what you're writing feels better too.
                  </p>

                  {/* Study Gear Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-4 pr-6 align-top font-neutra text-19px font-medium w-1/4 min-w-[200px]">
                            <a href="https://amzn.to/2CD4HKS" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">
                              Grey Blackwing
                            </a>
                          </td>
                          <td className="py-4 align-top font-neutra text-19px leading-relaxed text-gray-700">
                            The grey Blackwings are a great starter pencil. They have the hardest lead of any of the Blackwings I recommend, which means you can go longer without sharpening them, but they are not as inky and expressive to write with. I like using the grey Blackwings for games since they stay sharper longer, but then switching to another Blackwing for LR and RC where sharpness isn't as much of an issue.
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-4 pr-6 align-top font-neutra text-19px font-medium w-1/4 min-w-[200px]">
                            <a href="https://amzn.to/2VbMl1L" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">
                              White Blackwing
                            </a>
                          </td>
                          <td className="py-4 align-top font-neutra text-19px leading-relaxed text-gray-700">
                            The white Blackwings are a little softer lead than the grey, which makes them a great compromise for people like me who loooooove their smudgy leads. Since the white Blackwings both stay sharp and have fun lead, you can definitely use them for the full test.
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-4 pr-6 align-top font-neutra text-19px font-medium w-1/4 min-w-[200px]">
                            <a href="https://amzn.to/2So6Cs7" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">
                              Black Blackwing
                            </a>
                          </td>
                          <td className="py-4 align-top font-neutra text-19px leading-relaxed text-gray-700">
                            The black Blackwings have soft, luscious lead. When you put pencil to paper, it makes a really soft mark, almost like a cross between a paint brush and a pencil. I love writing with black Blackwings personally, especially on LR where I really like to push my feelings onto the page.
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-4 pr-6 align-top font-neutra text-19px font-medium w-1/4 min-w-[200px]">
                            <a href="https://amzn.to/2LE2IIO" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">
                              Blackwing Sharpener
                            </a>
                          </td>
                          <td className="py-4 align-top font-neutra text-19px leading-relaxed text-gray-700">
                            This is a long-point pencil sharpener, meaning it creates a longer lasting point than a typical sharpener. You sharpen the wood first and then sharpen the lead separately. In exchange for this, you get a point that is frankly just better.
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-4 pr-6 align-top font-neutra text-19px font-medium w-1/4 min-w-[200px]">
                            <a href="https://amzn.to/2tVydWJ" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">
                              BOXY Eraser
                            </a>
                          </td>
                          <td className="py-4 align-top font-neutra text-19px leading-relaxed text-gray-700">
                            Every Blackwing pencil has this bomb extendable eraser, but the eraser itself isn't great even if it extends with this awesome metal clamp thing, so it makes sense to seek out a separate eraser. I am someone that literally does eraser wars and can <a href="https://x.com/ellencassidy/status/1078503379557437440" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">blind identify</a> my favorite erasers. I am pleased to announce that my favorite eraser of all time has finally made its way to Amazon. The BOXY eraser will forever hold my heart. Did I know that I was capable of such steadfast devotion to an eraser? No. But BOXY earns its spot with smooth, easy, effective erasing. Also, its motto on the sleeve: "The basic concept of BOXY always aims at a simple life style." So true, BOXY. So true.
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-4 pr-6 align-top font-neutra text-19px font-medium w-1/4 min-w-[200px]">
                            <a href="https://amzn.to/2SpfIon" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">
                              Perfect Score Watch 5
                            </a>
                          </td>
                          <td className="py-4 align-top font-neutra text-19px leading-relaxed text-gray-700">
                            This is the best LSAT watch available on Amazon. I used to like another company that doesn't sell on Amazon, but they've proven to be too unreliable about order fulfillment so I no longer recommend them. The Perfect Score Watch is a fine option.
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-4 pr-6 align-top font-neutra text-19px font-medium w-1/4 min-w-[200px]">
                            <a href="https://amzn.to/2Ritzja" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">
                              LSAT Prep Notebook
                            </a>
                          </td>
                          <td className="py-4 align-top font-neutra text-19px leading-relaxed text-gray-700">
                            This notebook is just so cute. Whenever my students use it, we both smile.
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-4 pr-6 align-top font-neutra text-19px font-medium w-1/4 min-w-[200px]">
                            <a href="https://amzn.to/2VawKIG" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">
                              Dot Grid Notepad
                            </a>
                          </td>
                          <td className="py-4 align-top font-neutra text-19px leading-relaxed text-gray-700">
                            I prefer dot grid notebooks for LSAT practice. With a dot grid, you get the semblance of lines, which helps with organizing pages you may use for notes, but you also get the open page feel which is much more useful for games.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-4 pr-6 align-top font-neutra text-19px font-medium w-1/4 min-w-[200px]">
                            <a href="https://amzn.to/2SvOnRi" target="_blank" rel="noopener noreferrer" className="text-[#F48487] hover:underline">
                              Flash cards
                            </a>
                          </td>
                          <td className="py-4 align-top font-neutra text-19px leading-relaxed text-gray-700">
                            These are some nice, inexpensive flashcards that come with their own little organizational ring and rustic kraft paper covers. These are really useful for drilling questions stems, the flaws, conditional indicators, or premise/conclusion indicators.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Grey Footer Section */}
       <div className="bg-[#323437]">
              <Footer />
       </div>
      </div>
    </div>
  );
};

export default StudyGearRecommendations;