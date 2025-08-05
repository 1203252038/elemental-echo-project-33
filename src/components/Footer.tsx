
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Footer = () => {
  const [currentReview, setCurrentReview] = useState(0);
  
  const amazonReviews = [
    {
      title: "Fantastic Read!",
      content: "This is a fantastic prep book. The ins and outs of the LSAT Logical Reasoning section never clicked until I went...",
      author: "Kindle Customer",
      date: "May 8, 2025",
      rating: 5
    },
    {
      title: "Game Changer",
      content: "Ellen's approach to logical reasoning is revolutionary. I went from struggling with LR to getting almost every question right...",
      author: "Verified Purchase",
      date: "March 15, 2025", 
      rating: 5
    },
    {
      title: "Best LSAT Book",
      content: "I've tried many LSAT prep books, but this one finally made everything click. The loophole method is pure genius...",
      author: "Amazon Customer",
      date: "January 22, 2025",
      rating: 5
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % amazonReviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + amazonReviews.length) % amazonReviews.length);
  };

  return (
    <footer className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left - Text */}
            <div>
              <h3 className="font-sybarite text-2xl mb-6">See what <em>The Loophole</em> readers are saying:</h3>
            </div>
            
            {/* Middle - Testimonial Carousel */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-white text-black rounded-lg p-6 shadow-lg">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{amazonReviews[currentReview].title}</h4>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {amazonReviews[currentReview].content}
                  </p>
                  <div className="text-xs text-gray-500">
                    <p className="font-medium">{amazonReviews[currentReview].author}</p>
                    <p>{amazonReviews[currentReview].date}</p>
                  </div>
                </div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevReview}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextReview}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Right - Amazon Rating Badge */}
            <div className="flex justify-center lg:justify-end">
              <a 
                href="https://www.amazon.com/Loophole-LSAT-Logical-Reasoning/dp/1732749000/ref=asc_df_1732749000/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black rounded-lg px-4 py-3 hover:bg-gray-100 transition-colors"
              >
                <div className="text-center">
                  <p className="text-sm font-medium mb-1">Amazon rating</p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="font-bold">4.6</span>
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : i === 4 ? 'fill-yellow-400/50 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-500 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 sm:mb-0">
              <Link to="/" className="font-neutra text-sm hover:text-gray-300">HOME</Link>
              <Link to="/terms" className="font-neutra text-sm hover:text-gray-300">TERMS AND CONDITIONS</Link>
              <Link to="/privacy-policy" className="font-neutra text-sm hover:text-gray-300">PRIVACY POLICY</Link>
            </div>
            <p className="font-neutra text-xs text-gray-400 text-center sm:text-right">
              Copyright © 2025 Elemental Prep. LSAT® is a trademark registered by LSAC, which is not affiliated with, and does not endorse, this site.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
