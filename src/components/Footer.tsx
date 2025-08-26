import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Column 1: Logo */}
          <div>
            <Link to="/">
              <img 
                src="/Clearmont_white_on_black.png" 
                alt="Clearmont logo" 
                className="h-24" 
              />
            </Link>
          </div>

          {/* Column 2: Strapline */}
          <div className="md:-ml-4">
            <p className="text-gray-400">
              Strategic product consulting for purpose-driven organizations and leaders.
            </p>
          </div>

          {/* Column 3: Services */}
          <div>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#value-proposition" className="hover:text-yellow-500 transition-colors">
                  Product Strategy
                </a>
              </li>
              <li>
                <a href="#value-proposition" className="hover:text-yellow-500 transition-colors">
                  New Product Development
                </a>
              </li>
              <li>
                <a href="#value-proposition" className="hover:text-yellow-500 transition-colors">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#value-proposition" className="hover:text-yellow-500 transition-colors">
                  Leadership and Coaching
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <Link 
              to="/contact" 
              className="inline-block bg-yellow-300 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition-colors mb-4"
            >
              Contact
            </Link>
            <div className="flex">
              <a 
                href="https://www.linkedin.com/in/joe-pascual/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} clearmont consulting llc. all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
