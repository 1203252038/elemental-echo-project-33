import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const stories = [{
  slug: "alex",
  name: "Alex, 175",
  description: "For students pursuing the KJD path who are dedicated to the long-haul journey of making their LSAT dreams come true:",
  quote: "No matter where you are in life, if you tell Ellen what your goals are, even if you don't believe in yourself and you don't think you can achieve those goals, Ellen will believe in you.",
  image: "/lovable-uploads/Images/alex_headshot.jpg",
  buttonText: "Read Alex's Story"
}, {
  slug: "celeste",
  name: "Celeste, 174",
  description: "For English language learners from outside of North America, especially those who are daunted by the language barrier:",
  quote: "I'm a non-native English speaker who believed the LSAT was undefeatable for someone like me. I came to Elemental worried my goal score of 165 was too much to ask, but I finished with a 174, a completely changed mindset, and gratitude for the warm, welcoming, and inclusive Elemental Prep community.",
  image: "/lovable-uploads/Images/celeste_headshot.jpg",
  buttonText: "Read Celeste's Story"
}, {
  slug: "ed",
  name: "Ed, 168",
  description: "For procrastinators and self-doubters who are ready to realize their LSAT dreams:",
  quote: "Before I began studying for the LSAT things came very easily to me, and I thought the test would be similar. I could not have been more wrong. With the help of Ellen, Team Elemental, and my own dedication, I achieved the score of my dreams, something I never thought possible.",
  image: "/lovable-uploads/Images/ed_square_headshot.jpeg",
  buttonText: "Read Ed's Story"
}, {
  slug: "julia",
  name: "Julia, 172",
  description: "For those who lack the self confidence to turn their dreams into reality:",
  quote: "My main issue throughout my LSAT journey was…me. I would constantly get in my own way and delay my progress because I simply lacked self confidence. Elemental Prep changed everything. If you are ready to dedicate yourself to this test and put your trust in the Elemental process, then you can and will succeed. If I can go from the 15th percentile to the 98th, then you can get the score you want.",
  image: "/lovable-uploads/Images/julia_headshot.png",
  buttonText: "Read Julia's Story"
}, {
  slug: "sara",
  name: "Sara, 179",
  description: "For all the skimmers out there who think surely they don't have to <b>Text</b> do Translation Drills:",
  quote: "As I painted fences for my Mr. Miyagi, I started to build up a real nose for different answer choices. I felt like I could sniff out a necessary assumption answer from a sufficient, blindfolded. It was a weird time. It was a glorious time. I started to reach a point where, through Party Tricking alone, I could correctly answer 20 out of 25 questions on my first pass, and all on my second. Never once reading the stimulus. Applied to Reading Comprehension questions, the same progress occurred, never once reading the passage.",
  image: "/lovable-uploads/Images/sara_square_headshot.jpg",
  buttonText: "Read Sara's Story"
}, {
  slug: "stephen",
  name: "Stephen, 168",
  description: "For the non-traditional law school applicants who graduated college many years ago and are looking for a well-organized and structured path to mastering the LSAT:",
  quote: "Ellen is not only one of the best instructors I've ever had, but she is also an amazing mentor who will help you shatter your own self-doubt and exceed whatever goal you've set for yourself.",
  image: "/lovable-uploads/Images/stephen_headshot.png",
  buttonText: "Read Stephen's Story"
}, {
  slug: "stewart",
  name: "Stewart, 168",
  description: "For those who have tried absolutely everything and are on the brink of giving up:",
  quote: "My diagnostic score was a 142. Over three years and four different test prep companies later I could only achieve a practice test score ranging from 148-153. Elemental Prep helped me achieve my dream score after I effectively gave up hope, and I am certain that anyone who comes here with an open and positive attitude, dedication, and willingness to persevere and improve will go far.",
  image: "/lovable-uploads/Images/stewart_square_headshot.jpg",
  buttonText: "Read Stewart's Story"
}];

const StudentStories = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with teal background and proper typography and top padding for fixed nav */}
      <section className="bg-[#77b8b1] text-white py-20 pt-36 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-neutra font-bold text-7xl">
            Student Stories
          </h1>
        </div>
      </section>

      {/* Navy background starts here */}
      <div className="bg-[#2d3c6f]">
        {/* Main Card Container - White with overlap and side shadows */}
        <div className="relative -mt-12 mx-4 sm:mx-8 lg:mx-12">
          <div className="bg-white rounded-t-lg shadow-2xl">
            {/* Main Content Section */}
            <section className="py-16 px-8 lg:px-16">
              <div className="max-w-6xl mx-auto">
                <h2 className="font-sybarite text-gray-800 mb-6 text-30px"> What Improvement <em>Really</em> Looks Like</h2>
                <p className="font-neutra text-18px text-gray-700 leading-relaxed mb-6">
                  There's a story behind every score at Elemental.
                </p>
                <div className="space-y-6 font-neutra text-18px text-gray-700 leading-relaxed mb-12">
                  <p>
                    In fact, the score is usually the least interesting thing about the student's journey. In reality, it's a little number that gets glued onto their lives ex post facto, even if it does make their dreams come true. At Elemental, we care about how our students reach their goals, and every LSAT journey's behind-the-scenes is a little bit different. That's why we've asked some of our students to share the nitty gritty behind what a huge score improvement really takes, without editing out the tears and temptation to give up.
                  </p>
                  <p> <strong>Click on each student name below</strong> to read their complete LSAT autobiography, down to play-by-play of how long they spent on each drill. We couldn't be more grateful they were willing to be so candid in showing what it takes.</p>
                </div>

                <div className="space-y-8">
                  {stories.map((story, index) => (
                    <Card key={index} className="shadow-lg">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                          <div className="lg:w-1/4 flex justify-center lg:justify-start">
                            <img 
                              src={story.image} 
                              alt={story.name} 
                              className="w-60 h-60 rounded-lg object-cover shadow-md" 
                            />
                          </div>
                          <div className="lg:w-3/4">
                            <h3 className="font-sybarite text-2xl font-bold text-[#F48487] mb-3">
                              {story.name}
                            </h3>
                            <p className="font-neutra text-18px text-gray-700 mb-4">
                              {story.description}
                            </p>
                            <blockquote className="font-neutra text-gray-600 italic mb-6 pl-4 border-l-4 border-[#77b8b1]">
                              "{story.quote}"
                            </blockquote>
                            <Link to={`/stories/${story.slug}`} onClick={() => window.scrollTo(0, 0)}>
                              <Button className="bg-[#F48487] hover:bg-[#f37579] text-white font-neutra font-bold py-2 px-6 rounded-full">
                                {story.buttonText}
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer Section - Grey background within the same card */}
            <div className="bg-[#323437]">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentStories;