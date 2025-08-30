import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { ContactModal } from './ContactModal';
import { useFonts } from '../hooks/useFonts';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const liFont = useFonts('header', 'li');
  const buttonFont = useFonts('header', 'button');

  // Function to handle navigation - if not on homepage, go there first, then scroll
  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate there first
      navigate('/');
      // Wait for navigation, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on homepage, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 header ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'}`} data-component="header">
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

        <div className="flex items-center justify-end space-x-4 sm:space-x-8">
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li className="header" style={liFont.getFontStyle()}>
                <button 
                  onClick={() => handleNavigation('value-proposition')}
                  className="hover:text-yellow-500 transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  How I Can Help
                </button>
              </li>
              <li className="header" style={liFont.getFontStyle()}>
                <button 
                  onClick={() => handleNavigation('about')}
                  className="hover:text-yellow-500 transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  About Me
                </button>
              </li>
            </ul>
          </nav>

          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="hidden md:block bg-yellow-300 hover:bg-yellow-600 text-black font-medium py-2 px-5 rounded-full transition duration-300"
            style={buttonFont.getFontStyle()}
          >
            Contact
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-800 p-2 flex-shrink-0"
          >
            {isMobileMenuOpen ? (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-4">
            <ul className="space-y-4">
              <li className="header" style={liFont.getFontStyle()}>
                <button 
                  onClick={() => {
                    handleNavigation('value-proposition');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block hover:text-yellow-500 transition-colors py-2 bg-transparent border-none p-0 cursor-pointer w-full text-left"
                >
                  How I Can Help
                </button>
              </li>
              <li className="header" style={liFont.getFontStyle()}>
                <button 
                  onClick={() => {
                    handleNavigation('about');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block hover:text-yellow-500 transition-colors py-2 bg-transparent border-none p-0 cursor-pointer w-full text-left"
                >
                  About Me
                </button>
              </li>
              <li className="pt-2">
                <button 
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-yellow-300 hover:bg-yellow-600 text-black font-medium py-3 px-5 rounded-full transition duration-300"
                  style={buttonFont.getFontStyle()}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </header>
  );
}
