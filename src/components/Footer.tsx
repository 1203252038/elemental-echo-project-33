
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left - Text */}
            <div>
              <h3 className="font-sybarite text-2xl mb-6">See what <em>The Loophole</em> readers are saying:</h3>
            </div>
            
            {/* Middle - First TrustIndex Widget Container */}
            <div className="flex justify-center">
              <div 
                id="trustindex-widget"
                style={{ minHeight: '100px', minWidth: '250px', backgroundColor: 'transparent' }}
                className="border border-white"
              >
                {/* First TrustIndex widget will be injected here */}
              </div>
            </div>
            
            {/* Right - 4.6 Star TrustIndex Widget Container */}
            <div className="flex justify-center lg:justify-end">
              <div 
                id="trustindex-widget-stars"
                style={{ minHeight: '100px', minWidth: '250px', backgroundColor: 'transparent' }}
                className="border border-white"
              >
                {/* 4.6 star TrustIndex widget will be injected here */}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-500 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 sm:mb-0">
              <Link to="/" className="font-neutra text-sm hover:text-gray-300">HOME</Link>
              <Link to="/terms" className="font-neutra text-sm hover:text-gray-300">TERMS AND CONDITIONS</Link>
              <Link to="/privacy" className="font-neutra text-sm hover:text-gray-300">PRIVACY POLICY</Link>
            </div>
            <p className="font-neutra text-xs text-gray-400 text-center sm:text-right">
              Copyright © 2022 Elemental Prep. LSAT® is a trademark registered by LSAC, which is not affiliated with, and does not endorse, this site.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
