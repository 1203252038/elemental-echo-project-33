
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navigation appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white text-[#555555] shadow-md' : 'bg-[#77b8b1] text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo section - 50px tall with extra padding */}
          <div className="flex items-center py-6">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/17e924db-fb63-4a6c-80ea-e6905313f378.png" alt="Elemental Prep" className="h-[50px]" />
            </Link>
          </div>
          
          {/* Desktop navigation - with more padding and proper color transitions */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline flex-wrap gap-x-4 gap-y-1 py-6 my-0">
              <Link to="/" className={`font-neutra text-12px px-1 py-1 transition-colors duration-300 ${isScrolled ? 'hover:text-peach' : 'hover:text-peach'}`}>
                HOME
              </Link>
              <div className="relative group">
                <button className={`font-neutra text-12px px-1 py-1 transition-colors duration-300 flex items-center ${isScrolled ? 'hover:text-peach' : 'hover:text-peach'}`}>
                  ELEMENTAL ACADEMY
                  <span className="ml-1 inline-block w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-current"></span>
                </button>
                <div className={`absolute top-full left-0 mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${isScrolled ? 'bg-white border border-gray-200 shadow-lg' : 'bg-[#77b8b1] border border-white/20'}`}>
                  <div className="py-2">
                    <Link to="/about-elemental" className={`block px-4 py-2 font-neutra text-12px transition-colors duration-300 ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}>
                      TEAM ELEMENTAL
                    </Link>
                    <Link to="/student-stories" className={`block px-4 py-2 font-neutra text-12px transition-colors duration-300 ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}>
                      STUDENT STORIES
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link to="/the-loophole-in-lsat-logical-reasoning" className={`font-neutra text-12px px-1 py-1 transition-colors duration-300 flex items-center ${isScrolled ? 'hover:text-peach' : 'hover:text-peach'}`}>
                  THE LOOPHOLE
                  <span className="ml-1 inline-block w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-current"></span>
                </Link>
              </div>
              <Link to="/tutoring" className={`font-neutra text-12px px-1 py-1 transition-colors duration-300 ${isScrolled ? 'hover:text-peach' : 'hover:text-peach'}`}>
                LSAT TUTORING
              </Link>
              <button className={`font-neutra text-12px px-1 py-1 transition-colors duration-300 ${isScrolled ? 'hover:text-peach' : 'hover:text-peach'}`}>
                LOGIN
              </button>
              <button className={`font-neutra text-12px px-1 py-1 transition-colors duration-300 ${isScrolled ? 'hover:text-peach' : 'hover:text-peach'}`}>
                REGISTER
              </button>
              <button className={`font-neutra text-12px px-1 py-1 transition-colors duration-300 ${isScrolled ? 'hover:text-peach' : 'hover:text-peach'}`}>
                JOIN OUR NEWSLETTER
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-300 ${isScrolled ? 'hover:text-peach' : 'hover:text-peach'}`}>
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-[#77b8b1]'}`}>
            <Link to="/" className="font-neutra text-12px block px-3 py-2">HOME</Link>
            <Link to="/about-elemental" className="font-neutra text-12px block px-3 py-2">TEAM ELEMENTAL</Link>
            <Link to="/student-stories" className="font-neutra text-12px block px-3 py-2">STUDENT STORIES</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
