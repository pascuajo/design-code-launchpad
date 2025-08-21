import React from 'react';
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
                Hi, I'm Joe Pascual, and I don't just consult - I help to get things done. With a blend of entrepreneurial experience and corporate innovation, I've founded and led two startups, build up a corporate incubator, and supported innovation initiatives for everyone from SMEs to Fortune 500 companies.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.3}>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                I bring a startup mindset to every project, cutting through the bullshit and focusing 100% on execution. I'm not here to talk in circles; I'm here to make ideas happen, together. I often step in as an interim project leader, driving teams to deliver real, measurable outcomes.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.4}>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                My mission? To build lasting capabilities within your team so you can innovate without depending on me. While I'm committed to long-term partnerships, my goal is to empower your teams to take charge of innovation independently.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.5}>
              <p className="text-gray-600 text-lg leading-relaxed">
                Right now, I'm focused on combining my business experience with advanced AI strategies to help businesses move fast, innovate efficiently, and stay ahead of the competition. Together, we'll turn your ideas into real-world, market-ready solutions that drive true business impact.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Right side - Profile and Career Summary */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <AnimateOnScroll direction="right" className="mb-8">
              <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/newphoto.jpg" 
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
                  <span className="text-gray-700">Master Strategic & Innovation Management</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Certified Design Sprint Facilitator</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Certified Mastering Business Model Innovation</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Certified Mastering Value Propositions</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Design Thinking for Innovation Expert</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Agile Leadership Expert</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Certified ScrumMaster® (CSM®)</span>
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