import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ContactModal } from './ContactModal';
import { useFonts } from '../hooks/useFonts';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();
  const pFont = useFonts('header', 'p');
  const liFont = useFonts('header', 'li');
  const buttonFont = useFonts('header', 'button');

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

        <div className="flex items-center space-x-8">
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li className="header" style={liFont.getFontStyle()}>
                <a href="/#value-proposition" className="hover:text-yellow-500 transition-colors">
                  How I Can Help
                </a>
              </li>
              <li className="header" style={liFont.getFontStyle()}>
                <a href="/#about" className="hover:text-yellow-500 transition-colors">
                  About Me
                </a>
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

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </header>
  );
}
