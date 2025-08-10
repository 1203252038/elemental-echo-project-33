import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SeeHowWithVids = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with teal background */}
      <section className="bg-[#77b8b1] text-white py-20 pt-36 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sybarite text-50px md:text-92px leading-tight text-white mb-8">
              How Elemental Prep Students Improve
            </h1>
          </div>
        </div>
      </section>

      {/* Navy background starts here */}
      <div className="bg-[#2d3c6f]">
        {/* Main Card Container - Navy with overlap and side shadows */}
        <div className="relative -mt-12 mx-4 sm:mx-8 lg:mx-12">
          <div className="bg-[#2d3c6f] rounded-t-lg shadow-2xl">
            {/* Main Content Section */}
            <section className="text-white py-16 px-8 lg:px-16">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none text-white">
                  {/* Let Me Just Show You Section */}
                  <section className="mb-12">
                    <h2 className="font-sybarite text-30px text-white mb-6">Let Me Just Show You</h2>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      For years, I've tried to explain how Elemental Prep students improve their LSAT scores so drastically. Finally, I'd like to just show you.
                    </p>
                  </section>

                  {/* But How? Section */}
                  <section className="mb-12">
                    <h2 className="font-sybarite text-30px text-white mb-6">But How?</h2>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      Every day, I send two-minute videos to each student in Daily Virtual Tutoring. These two-minute LSAT critiques are snapshots of where the student is when the video is sent and my prescription based on what I observed in their VideoAsk submission that day. These videos illustrate what the process of student improvement actually looks like. What I'm actually doing when I give feedback during tutoring.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      Most people think it's impossible to drastically change how well someone reads in a short period of time. It's not. You're about to see the receipts.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      I want to show you one student journey that I'm particularly attached to: Ana's 54 days in Daily Virtual Tutoring. These six videos are a record of how Ana improved her LSAT skills and exactly how long it took her. Ana's Live Weekly Tutoring sessions began immediately following the last video you'll watch here.
                    </p>
                  </section>

                  {/* Who is Ana? Section */}
                  <section className="mb-12">
                    <h2 className="font-sybarite text-30px text-white mb-6">Who is Ana?</h2>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      Ana came to Elemental after studying for the LSAT for about a year and a half. She's a diligent, high-achieving student who could color-code her way to some pretty hi-fi academic achievements. Her first PT after nine months of pre-Elemental studying was a 153 😬.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      For someone like Ana, that 153 feels like a dagger. She could not imagine herself as the person who gets a 153 after devoting her whole life to an academic pursuit for the better part of a year. After studying for six additional months, essentially memorizing 30 PTs to "learn the patterns," Ana's score became a yo-yo. She might get -5 on RC or she might get -15. She might get a 171, but she could get a 156 the next day. Ana contacted me after trying basically everything available in her home country.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      Also, Ana lives in Asia. Taking this exam as a non-native English speaker, especially one who doesn't necessarily speak English on a daily basis, massively increases the challenge. Ana had to learn to think in English, forget the cheap tricks she'd internalized in the most popular LSAT course in her home country, and she had to build the foundation of Elemental methodologies to guide her through the exam. Tall order, right? We did it in 54 days. Here's how.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-8 font-medium">
                      Remember, these are six of the real responses that I sent to Ana during her time in Daily Virtual Tutoring.
                    </p>
                  </section>

                  {/* December 16: Translation Debugging */}
                  <section className="mb-12">
                    <h2 className="font-sybarite text-30px text-white mb-6">December 16: Translation Debugging</h2>
                    <div className="mb-8 bg-gray-100 p-4 rounded-lg">
                      <iframe 
                        src="https://player.vimeo.com/video/688990808"
                        width="100%" 
                        height="400"
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    
                    <h3 className="font-sybarite text-20px text-white mb-4">Improvement Takes Praise Too</h3>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      This is the second VideoAsk response that Ana received. I'm including her second response to signal the start of her journey because I want to emphasize the defining characteristic of her experience: improvement.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      This video starts off emphasizing how much Ana has improved even from the day before. You'll hear me give a ton of praise in these critiques. And it's true, I'm a cheerleader. But it's not fake. It's much more effective to emphasize the positives in a student's performance, in addition to what they need to work on. I make a point of noticing everything, including the good.
                    </p>

                    <h3 className="font-sybarite text-20px text-white mb-4">But I Can't Remember… Or Can You?</h3>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      Ana was getting into the classic problem of wanting to look back at the earlier parts of the stimulus after she'd read further on. I guide Ana away from this habit, but it's interesting to point out what I notice from her question and how it guides my future advice.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      The fact that Ana asked if she can reread earlier parts of the stimulus means the whole Translation process hasn't clicked for her yet; she's not engaging deeply enough with the text when she reads it the first time, likely prioritizing speed over quality (a holdover habit from her previous course). This is totally expected at the beginning of Daily Virtual Tutoring.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      But her question about rereading also indicates a confidence issue that will characterize the rest of her journey. The stimulus associated with this reply is quite short; short enough that Ana could get to the end without being very far from the beginning. If she's asking about rereading earlier parts of a stimulus that short, it's probably not because she actually lost the beginning by the time she gets to the end. She's probably asking because she doesn't feel like she has the beginning by the time she gets to the end.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      There's a big difference between retaining the text and being confident that you have retained the text. Ana was probably lacking more on the latter than the former.
                    </p>
                  </section>

                  {/* January 1: Wordskating */}
                  <section className="mb-12">
                    <h2 className="font-sybarite text-30px text-white mb-6">January 1: Wordskating</h2>
                    <div className="mb-8 bg-gray-100 p-4 rounded-lg">
                      <iframe 
                        src="https://player.vimeo.com/video/688991236"
                        width="100%" 
                        height="400"
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>

                    <h3 className="font-sybarite text-20px text-white mb-4">Gliding Over Those Words Like Ice</h3>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      In the two weeks between 12/16 and 1/1, we isolated Ana's main problem: a habit we termed "wordskating."
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      This isn't a term I've ever used with any of my students before, but it perfectly encapsulated Ana's issue. Since Ana had a few early issues with vocabulary, she would often get bounced out of the stimulus as soon as she didn't understand something. The lack of understanding would almost disorient her and cause the whole rest of the stimulus to take on a "wordskating" feeling. Like she's an ice skater, gliding on top of the words without really diving into them. In order to do well on LR, Ana had to dive into the words. Wordskating would have always capped her score until she dealt with it.
                    </p>

                    <h3 className="font-sybarite text-20px text-white mb-4">And Now We Are Watching a Football Game</h3>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      Whenever Ana started wordskating, she would fall into a tendency to describe the stimulus as an outsider. Instead of translating directly, she would say things like, "The author is presenting evidence that…" This would take her out of the direct content of the stimulus and hurt her Translation.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      The habit was kind of like if a sports announcer were to say, "And in this football game we're all watching, a player…" That commentator would be stalling for time, right? There's no real reason to state that a football game is being played when you're in the middle of 3rd down.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      It's understandable why Ana was giving herself this extra time to think, but I wanted to encourage her to push herself to just say something. It's ok if it's wrong! It's much faster to be wrong and fix it than to constantly couch everything you do in self-doubt. Students tend to fear being wrong way. too. much.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      We needed to break Ana of her wordskating habit, letting her get comfortable going directly to the meaning of the language. This is why I'm encouraging her to directly say what happened right after finishing reading.
                    </p>
                  </section>

                  {/* January 11: The End of Wordskating */}
                  <section className="mb-12">
                    <h2 className="font-sybarite text-30px text-white mb-6">January 11: The End of Wordskating</h2>
                    <div className="mb-8 bg-gray-100 p-4 rounded-lg">
                      <iframe 
                        src="https://player.vimeo.com/video/688991330"
                        width="100%" 
                        height="400"
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>

                    <h3 className="font-sybarite text-20px text-white mb-4">We Won!</h3>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      Ten days later, Ana has stopped wordskating 🎉! This is a major victory.
                    </p>

                    <h3 className="font-sybarite text-20px text-white mb-4">Now For The Real Work</h3>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      Now that we have Ana's Translation more under control, we get the opportunity to tackle some of the problems introduced by her previous prep experience. Ana had the habit of over-reviewing her sections, spending literal hours on individual questions to color-code their every nook and cranny by type. Not only did she have to stop doing this, but we had to tackle all the deleterious ripple effects this habit had created.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      When Ana's review time exceeded her actual section practice time, her prep reality became distorted. She started prioritizing the kind of information she could only know in review, confusing hindsight-based insights with what she could know at the start of a live question. This happened in her reflection video on this question.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      Ana isolated a phrase that was referenced in the correct answer and said her main problem was that she should have focused more on this phrase. Her hyper-review habit tells her this phrase is "the important part of the question," so of course her problem would be solved if she just paid more attention to it. But Ana had no way of knowing what that "important part" would be on the next question she attempted – making this "important part" pretty useless information when there's no way to know what it will be before grading.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      Review-only information created expectations of impossible knowledge for Ana, which is why her score was so unstable after those six months of memorizing 30 PTs. Our next task was breaking this habit.
                    </p>
                  </section>

                  {/* January 12: The Turning Point */}
                  <section className="mb-12">
                    <h2 className="font-sybarite text-30px text-white mb-6">January 12: The Turning Point</h2>
                    <div className="mb-8 bg-gray-100 p-4 rounded-lg">
                      <iframe 
                        src="https://player.vimeo.com/video/688991414"
                        width="100%" 
                        height="400"
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>

                    <h3 className="font-sybarite text-20px text-white mb-4">We Won (Again!)</h3>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      Here, Ana was naturally analyzing everything she read in real time. This was especially prevalent when she read an answer choice and immediately identified it as reading the stimulus' conditional backwards without even diagramming. This was not something wordskating Ana could have done only 11 days prior.
                    </p>

                    <h3 className="font-sybarite text-20px text-white mb-4">The Chance to Get Niche</h3>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      Ana's critiques get more and more specific over time because the bigger problems are already solved. We get the chance to tackle a few more niche topics, like how to logically negate self-sustaining. Now that she's properly translating, quipping, and analyzing the reasoning, we can afford to spend time on the finer points of the process.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      I always hold off on these nitpicky critiques until the student's baseline ability is in place, since it can be overwhelming for the student if I make a laundry list of every single little thing they did wrong. Essentially, I don't try to solve the last 2% of the process (essentially the 170 to 175/180 gap) when I'm trying to solve the first 98% (get them to 170 at all). When Ana is completely renovating her critical thinking process, she doesn't need to stress about the small messiness that's intrinsic to growth.
                    </p>

                    <h3 className="font-sybarite text-20px text-white mb-4">One CLIR is Enough</h3>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      We get to work on Ana's confidence again in the critique about not coming up with a million CLIRs. Ana had a tendency to keep talking ad infinitum at the end of the stimulus, searching for the perfect CLIR because nothing she said felt inherently good enough. I had to encourage her to build internal validative measures, so she can recognize in test conditions that her first CLIR is very likely correct.
                    </p>
                  </section>

                  {/* February 6: She's a Real Natural */}
                  <section className="mb-12">
                    <h2 className="font-sybarite text-30px text-white mb-6">February 6: She's a Real Natural</h2>
                    <div className="mb-8 bg-gray-100 p-4 rounded-lg">
                      <iframe 
                        src="https://player.vimeo.com/video/688991826"
                        width="100%" 
                        height="400"
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>

                    <h3 className="font-sybarite text-20px text-white mb-4">A Little Over Three Weeks Later…</h3>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      Ana is naturally deriving the CLIR without even realizing it. She's become a true natural. Now here's the issue: I might know that Ana's brain has more-or-less arrived at the destination, but Ana doesn't know that. And it's not because I don't tell her. Ana spent a year and a half gradually convincing herself that she had major LSAT problems. Those beliefs don't just disintegrate because I said so. The evidence has to convince her; she'll self-sabotage her brilliance until she accepts that she is good enough.
                    </p>

                    <h3 className="font-sybarite text-20px text-white mb-4">We're Ghost Hunters</h3>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      We're still fighting ghosts of Ana's previous prep experience are leading to a bit of clumsiness in the process, like keywording on the question stem. Habits that used to guard against errors now make Ana overthink her intuition. Holding onto these old habits is another byproduct of her confidence issue. If Ana knew how good she was, she wouldn't feel the need to worry about whether she announced the stimulus type. But that's ok! The emotional side is almost always the last thing to click in the prep experience. I honestly can't tell you how many 175+s I've taught that still didn't believe how good they were on the day they walked into the test.
                    </p>

                    <h3 className="font-sybarite text-20px text-white mb-4">What a Natural Looks Like</h3>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      One of the huge strengths of this reply was Ana's answer choice critiques. I was so excited to see how she was reacting naturally to answers, talking about them before jumping into a binary right/wrong mindset. Ana was fluidly applying the Back-Up Plan without letting the process feel rote; the correct, bulletproof process had become her process. The intonation of her words stayed consistent no matter whether she was reading, critiquing, or deciding. This means there were no breaks in her internal monologue; everything was Ana. She was in the question. Leagues away from the wordskating Ana from January 1.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6 font-medium">
                      This is what it actually means to become a natural.
                    </p>
                  </section>

                  {/* February 8: Now She Has to Realize It */}
                  <section className="mb-12">
                    <h2 className="font-sybarite text-30px text-white mb-6">February 8: Now She Has to Realize It</h2>
                    <div className="mb-8 bg-gray-100 p-4 rounded-lg">
                      <iframe 
                        src="https://player.vimeo.com/video/688991140"
                        width="100%" 
                        height="400"
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                        className="rounded-lg"
                      ></iframe>
                    </div>

                    <h3 className="font-sybarite text-20px text-white mb-4">Perfect Isn't Enough</h3>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      This is Ana's last VideoAsk. At the end of the stimulus, she literally predicted out loud the exact answer choice type that would be the correct answer (it was a Grouped Opposite, btw). If this isn't mastery of the skill, I don't know what is. But of course, Ana thought there was a lot wrong with her effort here.
                    </p>

                    <h3 className="font-sybarite text-20px text-white mb-4">But Perfect Also Isn't Real</h3>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      Not to say everything Ana ever does is perfect. There are still elements to be improved. But the far higher priority was that Ana had no idea she absolutely destroyed this question. She was making a ton of comments about how it was difficult to critique certain answer choices, but in reality her critiques were almost immediate on very long, jargony answer choices.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      The expert knows that heavier weights feel heavier than lighter weights. They don't think that the sensation of heaviness indicates a defect in their process. Ana was not to this point yet. She had interpreted the friction of the harder question as revealing a defect in herself, even though she more than rose to the challenge.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6">
                      My critique focuses on the finer points of Missioning Weaken and Strengthen questions along with the necessity of translating jargon with the exact words, but the undercurrent is much more focused on Ana's actual problem at this stage of her prep: recognizing that she's not the same person as she was 54 days earlier.
                    </p>
                    <p className="font-neutra text-19px leading-relaxed mb-6 text-center font-medium text-white">
                      She's a natural now.
                    </p>
                  </section>

                  {/* Call to Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                    <Link to="/tutoring">
                      <Button className="bg-[#F48487] hover:bg-[#f37579] text-white font-neutra text-20px font-bold py-3 px-8 rounded-full">
                        Learn More About Tutoring
                      </Button>
                    </Link>
                    <Link to="/student-stories">
                      <Button className="bg-[#77b8b1] hover:bg-[#6ba8a1] text-white font-neutra text-20px font-bold py-3 px-8 rounded-full">
                        Read More Case Studies
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SeeHowWithVids;