import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'}`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/Clearmont_logo_black_on_white_header.png" 
              alt="Clearmont logo" 
              className="h-20 mr-2" 
            />
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="/#value-proposition" className="hover:text-yellow-500 transition-colors">
                  How I Can Help
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-yellow-500 transition-colors">
                  About Me
                </a>
              </li>
               <li className="relative">
                 <button 
                   className={`flex items-center hover:text-yellow-500 transition-colors ${location.pathname.includes('/blog') || location.pathname.includes('/book-club') || location.pathname.includes('/value-creation') ? 'text-yellow-500' : ''}`}
                   onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                 >
                  Resources
                  <ChevronDown size={16} className="ml-1" />
                </button>
                 {isResourcesOpen && (
                   <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                     <Link 
                       to="/blog" 
                       className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                       onClick={() => setIsResourcesOpen(false)}
                     >
                       Blog
                     </Link>
                     <Link 
                       to="/book-club" 
                       className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                       onClick={() => setIsResourcesOpen(false)}
                     >
                       Book Club
                     </Link>
                     <Link 
                       to="/value-creation" 
                       className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                       onClick={() => setIsResourcesOpen(false)}
                     >
                       Value Creation
                     </Link>
                   </div>
                 )}
               </li>
            </ul>
          </nav>

          <Link to="/contact">
            <button className="hidden md:block bg-yellow-300 hover:bg-yellow-600 text-black font-medium py-2 px-5 rounded-full transition duration-300">
              Contact
            </button>
          </Link>
          
          <button className="md:hidden text-gray-800">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
