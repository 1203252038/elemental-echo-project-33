import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const isHomePage = location.pathname === '/';

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage]);

  // Nav pill button styling helper
  const getNavPillStyles = (path: string, isActive?: boolean) => {
    const active = isActive || location.pathname === path;
    
    if (isHomePage && !isScrolled) {
      // Home page at top: white text on transparent, light-teal on hover
      return `font-neutra font-medium text-12px uppercase px-[14px] py-[8px] rounded-[3px] transition-all duration-[180ms] ease-out ${
        active
          ? 'bg-light-teal text-white'
          : 'bg-transparent text-white hover:bg-light-teal hover:text-white focus:bg-light-teal focus:text-white'
      }`;
    } else {
      // Home page scrolled OR inner pages: foreground text, peach text for active (no background)
      return `font-neutra font-medium text-12px uppercase px-[14px] py-[8px] rounded-[3px] transition-all duration-[180ms] ease-out ${
        active
          ? 'bg-transparent text-peach'
          : 'bg-transparent text-foreground hover:text-peach focus:text-peach'
      }`;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[180ms] ease-out ${
      isHomePage && !isScrolled 
        ? 'bg-[#77b8b1]' 
        : 'bg-white shadow-md'
    }`}>
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
                <button className={getNavPillStyles('/about-elemental', location.pathname === '/about-elemental' || location.pathname === '/student-stories' || location.pathname.startsWith('/stories/'))}>
                  ELEMENTAL ACADEMY
                  <span className="ml-1 inline-block w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-current"></span>
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white border border-gray-200 shadow-lg z-50">
                  <div className="py-2">
                    <Link to="/about-elemental" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                      TEAM ELEMENTAL
                    </Link>
                    <div className="relative group/nested">
                      <Link to="/student-stories" className="w-full text-left block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                        STUDENT STORIES
                        <span className="ml-1 inline-block w-0 h-0 border-r-[3px] border-l-[3px] border-t-[4px] border-r-transparent border-l-transparent border-t-current"></span>
                      </Link>
                      <div className="absolute top-0 left-full ml-1 w-52 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 bg-white border border-gray-200 shadow-lg z-50">
                        <div className="py-2">
                          <Link to="/stories/alex" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                            ALEX, 175
                          </Link>
                          <Link to="/stories/sara" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                            SARA, 179
                          </Link>
                          <Link to="/stories/ed" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                            ED, 168
                          </Link>
                          <Link to="/stories/celeste" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                            CELESTE, 174
                          </Link>
                          <Link to="/stories/julia" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                            JULIA, 172
                          </Link>
                          <Link to="/stories/stephen" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                            STEPHEN, 168
                          </Link>
                          <Link to="/stories/stewart" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                            STEWART, 168
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link to="/the-loophole-in-lsat-logical-reasoning" className={getNavPillStyles('/the-loophole-in-lsat-logical-reasoning')}>
                  THE LOOPHOLE
                  <span className="ml-1 inline-block w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-current"></span>
                </Link>
                <div className="absolute top-full left-0 mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white border border-gray-200 shadow-lg z-50">
                  <div className="py-2">
                    <Link to="/the-loophole-in-lsat-logical-reasoning" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                      BUY THE BOOK
                    </Link>
                    <a href="https://elementalprep.com/camo/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                      CAMO
                    </a>
                    <div className="relative group/bonus">
                      <button className="w-full text-left block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                        BONUS
                        <span className="ml-1 inline-block w-0 h-0 border-r-[3px] border-l-[3px] border-t-[4px] border-r-transparent border-l-transparent border-t-current"></span>
                      </button>
                      <div className="absolute top-0 left-full ml-1 w-64 opacity-0 invisible group-hover/bonus:opacity-100 group-hover/bonus:visible transition-all duration-200 bg-white border border-gray-200 shadow-lg z-50">
                         <div className="py-2">
                           {user ? (
                             <>
                               <Link to="/bonus/test-taker" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                                 HOW TO BE A GOOD TEST TAKER
                               </Link>
                               <Link to="/bonus/challenge-questions" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                                 CHALLENGE QUESTION EXPLANATIONS
                               </Link>
                               <Link to="/bonus/answer-keys" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                                 ANSWER KEYS
                               </Link>
                               <Link to="/bonus/deleted-scenes" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                                 DELETED SCENES
                               </Link>
                               <Link to="/bonus/study-gear" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                                 STUDY GEAR RECOMMENDATIONS
                               </Link>
                               <Link to="/bonus/newsletter" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                                 GET MORE LOOPHOLE IN YOUR INBOX
                               </Link>
                             </>
                           ) : (
                             <>
                               <Link to="/auth" className="block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300">
                                 LOGIN TO ACCESS BONUS CONTENT
                               </Link>
                             </>
                           )}
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/tutoring" className={getNavPillStyles('/tutoring')}>
                LSAT TUTORING
              </Link>
              {user ? (
                <div className="relative group">
                  <button className={getNavPillStyles('', true)}>
                    {user.email?.split('@')[0]?.toUpperCase()}
                    <span className="ml-1 inline-block w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-current"></span>
                  </button>
                  <div className="absolute top-full right-0 mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white border border-gray-200 shadow-lg z-50">
                    <div className="py-2">
                      <button 
                        onClick={() => signOut()}
                        className="w-full text-left block px-4 py-2 font-neutra font-medium text-12px uppercase text-foreground hover:bg-gray-100 transition-colors duration-300"
                      >
                        LOGOUT
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link to="/auth" className={getNavPillStyles('/auth')}>
                  LOGIN / REGISTER
                </Link>
              )}
              <button className={getNavPillStyles('/newsletter')}>
                JOIN OUR NEWSLETTER
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-peach focus:outline-none transition-colors duration-300">
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
            <Link to="/" className="font-neutra font-medium text-12px uppercase block px-3 py-2 text-foreground hover:text-peach">HOME</Link>
            <Link to="/about-elemental" className="font-neutra font-medium text-12px uppercase block px-3 py-2 text-foreground hover:text-peach">TEAM ELEMENTAL</Link>
            <Link to="/student-stories" className="font-neutra font-medium text-12px uppercase block px-3 py-2 text-foreground hover:text-peach">STUDENT STORIES</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;