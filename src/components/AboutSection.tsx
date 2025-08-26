import { AnimateOnScroll } from './AnimateOnScroll';
import { Linkedin } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="w-full bg-gray-100 py-28 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">About Me</h2>
        </AnimateOnScroll>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - About Me content */}
          <div className="lg:w-1/2">
            <AnimateOnScroll direction="left" delay={0.2}>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                With over 15 years experience leading strategic product and digital transformation across various industries and platforms  - I’ve seen first-hand what it takes to transform operations, develop innovative products, and build high-performing teams.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.3}>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                My approach combines deep business acumen with a human-centered
                design mindset, allowing me to create solutions that work for
                both the business and the people involved.              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.4}>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                I believe that the most successful organizations are those that
                align their business goals with a meaningful purpose, creating
                value for all stakeholders while making a positive impact on the
                world.              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.5}>
              <p className="text-gray-600 text-lg leading-relaxed">
                Right now, I'm focused on combining my business experience with advanced AI strategies to help businesses move fast, innovate efficiently, and stay ahead of the competition. Together, we'll turn your ideas into real-world, market-ready solutions that drive true business impact.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Right side - Profile and Career Summary */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start bg-white rounded-xl p-8 shadow-lg">
            <AnimateOnScroll direction="right" className="mb-8">
              <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/Profile.png" 
                  alt="Joe Pascual - Strategic Innovation Consultant" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={0.2}>
              <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">Joe Pascual</h3>
            </AnimateOnScroll>

            {/* Career Summary */}
            <AnimateOnScroll direction="right" delay={0.3} className="w-full">
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Founder and CEO of Homepaired (SaaS C2C)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Head of Product, UX and PMO at Amherst (PropTech, SaaS B2C)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Executive Director, Digital Transformation at UBS (FinTech, Platform)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Execitive Director, FinTech Innovation Labs at UBS (FinTech, Platform)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Executive Consultant, AI Product Strategy at Gatekeeper (ProcureTech, SaaS B2B)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">CFO, AMER Equities at UBS</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Chartered Accountant (ACCA)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">15+ years Digital Transformation Leadership</span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* LinkedIn Link */}
            <AnimateOnScroll direction="right" delay={0.4}>
              <a 
                href="https://www.linkedin.com/in/joe-pascual/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <Linkedin size={24} />
                <span className="font-medium">Connect on LinkedIn</span>
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
