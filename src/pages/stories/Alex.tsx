import { Link } from "react-router-dom";
export default function AlexStory() {
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
                <h2 className="font-sybarite text-gray-800 mb-6 text-30px">What Improvement Really Looks Like</h2>
                <p className="font-neutra text-18px text-gray-700 leading-relaxed mb-6">
                  There's a story behind every score at Elemental.
                </p>
                <div className="space-y-6 font-neutra text-18px text-gray-700 leading-relaxed mb-12">
                  <p>
                    In fact, the score is usually the least interesting thing about the student's journey. In reality, it's a little number that gets glued onto their lives ex post facto, even if it does make their dreams come true. At Elemental, we care about how our students reach their goals, and every LSAT journey's behind-the-scenes is a little bit different. That's why we've asked some of our students to share the nitty gritty behind what a huge score improvement really takes, without editing out the tears and temptation to give up.
                  </p>
                  <p>Click on each student name below to read their complete LSAT autobiography, down to play-by-play of how long they spent on each drill. We couldn't be more grateful they were willing to be so candid in showing what it takes.</p>
                </div>

                <div className="space-y-8">
                  {stories.map((story, index) => (
                    <Card key={index} className="shadow-lg">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                          <div className="lg:w-1/4 flex justify-center lg:justify-start">
                            <img 
                              src={`https://images.unsplash.com/${story.image}?w=300&h=300&fit=crop&crop=face`} 
                              alt={story.name} 
                              className="w-32 h-32 rounded-lg object-cover shadow-md" 
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
                            <Link to={`/stories/${story.slug}`}>
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
    
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-extrabold text-center">
        Alex’s LSAT Journey
      </h1>

      <p className="mb-4">
        When Alex started with Elemental Prep he was scoring a 158 on timed
        practice tests…
      </p>

      {/* add more narrative sections, images, quotes, etc. */}

      <div className="mt-12 text-center">
        <a
          href="/student-stories"
          className="text-sky-600 hover:text-sky-800 underline"
        >
          ← Back to Student Stories
        </a>
      </div>
    </main>
  );
}