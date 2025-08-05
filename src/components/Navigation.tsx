import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  // Nav pill button styling helper
  const getNavPillStyles = (path: string, isActive?: boolean) => {
    const active = isActive || location.pathname === path;
    
    if (isHomePage) {
      // Home page styling: white text on transparent, light-teal on hover
      return `font-neutra font-medium text-12px uppercase px-[14px] py-[8px] rounded-[3px] transition-all duration-300 ${
        active
          ? 'bg-light-teal text-white'
          : 'bg-transparent text-white hover:bg-light-teal hover:text-white focus:bg-light-teal focus:text-white'
      }`;
    } else {
      // Inner pages styling: sage text, peach-light on hover/active
      return `font-neutra font-medium text-12px uppercase px-[14px] py-[8px] rounded-[3px] transition-all duration-300 ${
        active
          ? 'bg-peach-light text-white'
          : 'bg-transparent text-sage hover:bg-peach-light hover:text-white focus:bg-peach-light focus:text-white'
      }`;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isHomePage ? 'bg-[#77b8b1]' : 'bg-white shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">{/* 64px = h-16 */}
          {/* Logo section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/17e924db-fb63-4a6c-80ea-e6905313f378.png" alt="Elemental Prep" className="h-[40px]" />
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              <Link to="/" className={getNavPillStyles('/')}>
                HOME
              </Link>
              <div className="relative group">
                <button className={getNavPillStyles('/about-elemental', location.pathname === '/about-elemental' || location.pathname === '/student-stories')}>
                  ELEMENTAL ACADEMY
                  <span className="ml-1 inline-block w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-current"></span>
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white border border-gray-200 shadow-lg">
                  <div className="py-2">
                    <Link to="/about-elemental" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-navy hover:bg-gray-100 transition-colors duration-300">
                      TEAM ELEMENTAL
                    </Link>
                    <Link to="/student-stories" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-navy hover:bg-gray-100 transition-colors duration-300">
                      STUDENT STORIES
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/the-loophole-in-lsat-logical-reasoning" className={getNavPillStyles('/the-loophole-in-lsat-logical-reasoning')}>
                THE LOOPHOLE
              </Link>
              <Link to="/tutoring" className={getNavPillStyles('/tutoring')}>
                LSAT TUTORING
              </Link>
              <button className={getNavPillStyles('/login')}>
                LOGIN
              </button>
              <button className={getNavPillStyles('/register')}>
                REGISTER
              </button>
              <button className={getNavPillStyles('/newsletter')}>
                JOIN OUR NEWSLETTER
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-navy hover:text-peach focus:outline-none transition-colors duration-300">
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link to="/" className="font-neutra font-medium text-12px uppercase block px-3 py-2 text-navy hover:text-peach">HOME</Link>
            <Link to="/about-elemental" className="font-neutra font-medium text-12px uppercase block px-3 py-2 text-navy hover:text-peach">TEAM ELEMENTAL</Link>
            <Link to="/student-stories" className="font-neutra font-medium text-12px uppercase block px-3 py-2 text-navy hover:text-peach">STUDENT STORIES</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;