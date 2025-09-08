import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactModal } from './ContactModal';
import { useFonts } from '../hooks/useFonts';

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pFont = useFonts('footer', 'p');
  const liFont = useFonts('footer', 'li');
  const buttonFont = useFonts('footer', 'button');
  const sourceCodeFont = useFonts('footer', 'span');
  const highlightedFont = useFonts('footer', 'highlighted');
  
  return (
    <footer className="w-full bg-gray-900 text-white py-16 px-4 footer" data-component="footer">
      <div className="max-w-6xl mx-auto">
        {/* Contact Section Content */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row items-start gap-6">
            {/* Left side - Header and Strapline */}
            <div className="lg:w-3/4">
              
              <p className="text-white text-xl font-bold footer text-left" style={pFont.getFontStyle()}>
                Let's explore how we can work together and create <span className="handdrawn-highlight" style={highlightedFont.getFontStyle()}>meaningful change</span>.
              </p>
            </div>

            {/* Right side - Contact Button */}
            <div className="lg:w-1/4 flex justify-start">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-300 hover:bg-yellow-600 text-accent-foreground font-medium py-2 px-5 rounded-full transition duration-300 text-base whitespace-nowrap"
                style={buttonFont.getFontStyle()}
              >
                <span style={sourceCodeFont.getFontStyle()}>Contact</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo with strapline underneath */}
          <div className="flex flex-col justify-end">
            <a href="/">
              <div className="h-24 mb-4 flex flex-col items-start justify-center">
                <img 
                  src="/mountain_white_transparent.png" 
                  alt="Clearmont mountain" 
                  className="h-12 mb-1" 
                />
                <img 
                  src="/Clearmont_word_transparent.png" 
                  alt="Clearmont text" 
                  className="h-3" 
                />
              </div>
            </a>
            <p className="text-white footer" style={pFont.getFontStyle()}>
              Strategic product consulting for purpose-driven organizations and leaders.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col justify-end">
            <ul className="space-y-3 text-white">
              <li className="footer" style={liFont.getFontStyle()}>
                <span className="text-white hover:text-yellow-500 transition-colors" style={{fontFamily: 'Source Code Pro, Courier New, Monaco, Consolas, Menlo, monospace'}}>
                  Strategic Leadership
                </span>
              </li>
              <li className="footer" style={liFont.getFontStyle()}>
                <span className="text-white hover:text-yellow-500 transition-colors" style={{fontFamily: 'Source Code Pro, Courier New, Monaco, Consolas, Menlo, monospace'}}>
                  Design & Innovation
                </span>
              </li>
              <li className="footer" style={liFont.getFontStyle()}>
                <span className="text-white hover:text-yellow-500 transition-colors" style={{fontFamily: 'Source Code Pro, Courier New, Monaco, Consolas, Menlo, monospace'}}>
                  Operational Excellence
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Additional Pages */}
          <div className="flex flex-col justify-end">
            <ul className="space-y-3 text-white">
              <li className="footer" style={liFont.getFontStyle()}>
                <div className="flex items-center gap-3">
                  <a href="/#about" className="hover:text-yellow-500 transition-colors">
                    About Me
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/joe-pascual/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors flex-shrink-0"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a 
                    href="mailto:hello@clearmontconsulting.com" 
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors flex-shrink-0"
                  >
                    <span className="sr-only">Email</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://blinq.me/tmTafHegIU6I?bs=db" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors flex-shrink-0"
                  >
                    <span className="sr-only">Blinq</span>
                    <img 
                      src="/blinklogo_white.png" 
                      alt="Blinq" 
                      className="w-5 h-5" 
                    />
                  </a>
                </div>
              </li>
              <li className="footer" style={liFont.getFontStyle()}>
                <Link to="/blog" className="hover:text-yellow-500 transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Blog
                </Link>
              </li>
              <li className="footer" style={liFont.getFontStyle()}>
                <Link to="/book-club" className="hover:text-yellow-500 transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Book Club
                </Link>
              </li>
            </ul>
          </div>


        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-500 text-sm footer" style={pFont.getFontStyle()}>
          © 2025 Clearmont Consulting LLC. All rights reserved.
        </p>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
}
