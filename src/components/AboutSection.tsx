import React from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { useFonts } from '../hooks/useFonts';
import { DollarSign, Home, Shield, Scale, Handshake, Database, Brain, Monitor, Building2, Globe, Check } from 'lucide-react';

interface DomainInfo {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export function AboutSection() {
  const h2Font = useFonts('about', 'h2');
  const h3Font = useFonts('about', 'h3');
  const pFont = useFonts('about', 'p');
  const highlightedFont = useFonts('about', 'highlighted');
  
  const domains: DomainInfo[] = [
    {
      title: "FinTech",
      description: "Core Banking Platforms • Payment Processing Systems • Treasury Management Systems • Financial Reporting Platforms",
      icon: <DollarSign className="w-8 h-8 text-gray-600" />,
      color: "blue"
    },
    {
      title: "PropTech",
      description: "Property Valuation Engines • Real Estate Marketplace Platforms • Asset Management Systems • Investment Analytics Platforms",
      icon: <Home className="w-8 h-8 text-green-600" />,
      color: "green"
    },
    {
      title: "RegTech",
      description: "Risk Management Platforms • Compliance Monitoring Systems • AML/KYC Workflow Engines • Regulatory Reporting Systems",
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      color: "purple"
    },
    {
      title: "LegalTech",
      description: "Contract Management Platforms • Document Intelligence Systems • Legal Workflow Engines • Compliance Management Systems",
      icon: <Scale className="w-8 h-8 text-gray-600" />,
      color: "indigo"
    },
    {
      title: "ProcureTech",
      description: "Strategic Sourcing Platforms • Inventory Management Systems • Vendor & CRM Platforms • Spend Analytics Platforms",
      icon: <Handshake className="w-8 h-8 text-gray-600" />,
      color: "red"
    },
    {
      title: "Data & Business Intelligence",
      description: "Business Intelligence Platforms • Data Integration Systems • Analytics Dashboard Systems • Real-time Reporting Platforms",
      icon: <Database className="w-8 h-8 text-gray-600" />,
      color: "gray"
    },
    {
      title: "AI & Automation",
      description: "Agentic AI Platforms • Machine Learning Solutions • Orchestration Platforms • Intelligent Workflow Systems",
      icon: <Brain className="w-8 h-8 text-gray-600" />,
      color: "yellow"
    },
    {
      title: "Enterprise SaaS",
      description: "B2B SaaS Platforms • Multi-Tenant Systems • Mobile Application Platforms • Digital Experience Systems",
      icon: <Monitor className="w-8 h-8 text-gray-600" />,
      color: "blue"
    },
    {
      title: "Industries",
      description: "Global Financial Services • Commercial Real Estate • Enterprise SaaS • Startups & Pre-Seed",
      icon: <Building2 className="w-8 h-8 text-gray-600" />,
      color: "red"
    },
    {
      title: "Career",
      description: "Founder & CEO • Head of Product & Design • Executive Director, Product Management • Executive Director, Digital Transformation",
      icon: <Globe className="w-8 h-8 text-red-600" />,
      color: "red"
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-28 px-4 about-section relative overflow-hidden" id="about" data-component="about">
      {/* Mountain Background Image */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url(/Clearmont_mountain_only.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          transform: 'scale(1.2) translateX(0%) translateY(0%)'
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Motif - Vertical line with logo and intro */}
        <div className="mb-32 pt-8">
          <div className="relative">
            {/* Desktop Vertical Line - positioned to perfectly intersect the gap with fade effects on both ends */}
            <div className="hidden md:block absolute left-[31.5%] top-[-80px] w-px h-64 bg-gradient-to-b from-transparent via-gray-900 to-transparent"></div>
            
            {/* Mobile Vertical Line - positioned independently for mobile */}
            <div className="md:hidden absolute left-[34%] top-[-100px] w-px h-80 bg-gradient-to-b from-transparent via-gray-900 to-transparent"></div>
            
            {/* Content Container - elements positioned with line dissecting the gap */}
            <div className="flex items-center justify-center">
              {/* Mountain Logo - positioned very close to left of center line */}
              <div className="w-16 h-16 flex-shrink-0 mr-2">
                <img 
                  src="/Clearmont_mountain_only.png" 
                  alt="Clearmont" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Section Intro - positioned very close to right of center line */}
              <div className="flex-shrink-0 ml-2">
                {/* Desktop version - single line */}
                <p className="hidden md:block text-lg font-semibold text-gray-600 uppercase tracking-wide about" style={pFont.getFontStyle()}>
                  <span className="handdrawn-highlight">15 YEARS OF UNRIVALLED PRODUCT INNOVATION...</span>
                </p>
                
                {/* Mobile version - wrapped text for iPhone width */}
                <p className="md:hidden text-base font-semibold text-gray-600 uppercase tracking-wide about leading-tight" style={pFont.getFontStyle()}>
                  <span className="handdrawn-highlight">15 YEARS OF<br />UNRIVALLED PRODUCT<br />INNOVATION...</span>
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Left side - Large Profile Picture with About Me header overlay */}
          <div className="lg:w-2/5 relative">
            <AnimateOnScroll direction="left">
              {/* Desktop Profile Image */}
              <div className="hidden md:block w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src="/Profile.png" 
                  alt="Joe Pascual - Strategic Innovation Consultant with 15+ years experience in product management and digital transformation" 
                  className="w-full h-full object-cover scale-90" 
                  style={{ objectPosition: 'center 30%' }}
                  loading="lazy"
                />
                
                {/* About Me header overlay on image */}
                <div className="absolute top-2 left-2">
                  <div className="bg-gradient-to-br from-white/90 via-white/80 to-transparent px-4 py-2 rounded-lg shadow-lg transform -rotate-12">
                    <h2 className="text-4xl font-bold about" style={h2Font.getFontStyle()}>
                      <span className="handdrawn-highlight" style={highlightedFont.getFontStyle()}>About me..</span>
                    </h2>
                  </div>
                </div>
              </div>
              
              {/* Mobile Profile Image */}
              <div className="md:hidden w-full h-[300px] rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src="/ProfileRoto.png" 
                  alt="Joe Pascual - Strategic Innovation Consultant with 15+ years experience in product management and digital transformation" 
                  className="w-full h-full object-cover scale-90" 
                  style={{ objectPosition: 'center 30%' }}
                  loading="lazy"
                />
                
                {/* About Me header overlay on image */}
                <div className="absolute top-2 left-3">
                  <div className="bg-gradient-to-br from-white/90 via-white/80 to-transparent px-3 py-2 rounded-lg shadow-lg transform -rotate-12">
                    <h2 className="text-3xl font-bold about" style={h2Font.getFontStyle()}>
                      <span className="handdrawn-highlight" style={highlightedFont.getFontStyle()}>About me..</span>
                    </h2>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right side - Full About Me summary */}
          <div className="lg:w-3/5">
            <AnimateOnScroll direction="right">
              <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg h-auto md:h-[600px] flex flex-col justify-center">
                <div className="space-y-4 md:space-y-6">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={pFont.getFontStyle()}>
                    Hi, I'm Joe. With over 15 years' experience leading strategic product and digital transformation across various industries and platforms - I've seen first-hand what it takes to transform operations, develop innovative products, and build high-performing teams.
                  </p>
                  
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={pFont.getFontStyle()}>
                    My approach combines deep business acumen with a human-centered
                    design mindset, launching solutions that have generated significant value for
                    both the bottom line and customers.
                  </p>
                  
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={pFont.getFontStyle()}>
                    I believe that the most successful organizations are those that
                    align their business goals with a meaningful purpose, creating
                    value for all stakeholders while making a positive impact on the
                    world.
                  </p>
                  
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed" style={pFont.getFontStyle()}>
                    Right now, I'm all in on Generative AI to transform operations, build new customer experiences, and stay ahead of the competition.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Third Section Motif - leading into domain tiles */}
        <div className="mb-40 pt-16">
          <div className="relative">
            {/* Desktop Vertical Line - positioned to perfectly intersect the gap with fade effects on both ends */}
            <div className="hidden md:block absolute left-[26%] top-[-80px] w-px h-64 bg-gradient-to-b from-transparent via-gray-900 to-transparent"></div>
            
            {/* Mobile Vertical Line - positioned independently for mobile */}
            <div className="md:hidden absolute left-[33%] top-[-100px] w-px h-80 bg-gradient-to-b from-transparent via-gray-900 to-transparent"></div>
            
            {/* Content Container - elements positioned with line dissecting the gap */}
            <div className="flex items-center justify-center">
              {/* Mountain Logo - positioned very close to left of center line */}
              <div className="w-16 h-16 flex-shrink-0 mr-2">
                <img 
                  src="/Clearmont_mountain_only.png" 
                  alt="Clearmont" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Section Intro - positioned very close to right of center line */}
              <div className="flex-shrink-0 ml-2">
                {/* Desktop version - single line */}
                <p className="hidden md:block text-lg font-semibold text-gray-600 uppercase tracking-wide about" style={pFont.getFontStyle()}>
                  <span className="handdrawn-highlight">UNIQUE SUCCESS CROSS-PLATFORM, INDUSTRY AND DOMAIN...</span>
                </p>
                
                {/* Mobile version - wrapped text for iPhone width */}
                <p className="md:hidden text-base font-semibold text-gray-600 uppercase tracking-wide about leading-tight" style={pFont.getFontStyle()}>
                  <span className="handdrawn-highlight">UNIQUE SUCCESS<br />CROSS-PLATFORM,<br />INDUSTRY AND DOMAIN...</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Domain Section */}
        <div className="w-full mb-2">
          <AnimateOnScroll>
            {/* Desktop Layout - Original 4x2 + 1x2 structure */}
            <div className="hidden md:flex gap-8">
              {/* Main Tech & Product Domains */}
              <div className="flex-1">
                <div className="grid grid-cols-4 grid-rows-2 gap-4">
                  {domains.filter(domain => !['Industries', 'Career'].includes(domain.title)).map((domain) => {
                    return (
                      <div 
                        key={domain.title}
                        className="relative group flex flex-col items-center p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-all duration-200 cursor-pointer transform hover:scale-105 hover:shadow-lg"
                      >
                        <div className="w-8 h-8 text-gray-600">
                          {React.cloneElement(domain.icon as React.ReactElement, { className: "w-8 h-8 text-gray-600" })}
                        </div>
                        <span className="text-xs font-bold text-gray-600 text-center mt-2">
                          {domain.title}
                        </span>
                        
                        {/* Hover Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[99999]">
                          <div className="bg-white rounded-xl p-3 shadow-2xl border border-gray-200 w-72 relative z-[99999]">
                            <h4 className="text-gray-800 mb-2 about text-sm font-semibold" style={h3Font.getFontStyle()}>{domain.title}</h4>
                            <div className="text-gray-700 leading-tight about text-xs" style={pFont.getFontStyle()}>
                              {domain.description.split(' • ').map((point, i) => (
                                <div key={i} className="mb-1 flex items-start">
                                  <Check className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="about break-words" style={pFont.getFontStyle()}>{point.trim()}</span>
                                </div>
                              ))}
                            </div>
                            {/* Arrow pointing down */}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Divider */}
              <div className="w-px bg-gray-300"></div>

              {/* Industries & Career */}
              <div className="w-48">
                <div className="grid grid-cols-1 gap-4">
                  {domains.filter(domain => ['Industries', 'Career'].includes(domain.title)).map((domain) => {
                    return (
                      <div 
                        key={domain.title}
                        className="relative group flex flex-col items-center p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-200 cursor-pointer transform hover:scale-105 hover:shadow-lg"
                      >
                        <div className="w-8 h-8 text-gray-600">
                          {React.cloneElement(domain.icon as React.ReactElement, { className: "w-8 h-8 text-gray-600" })}
                        </div>
                        <span className="text-xs font-bold text-gray-600 text-center mt-2">
                          {domain.title}
                        </span>
                        
                        {/* Hover Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[99999]">
                          <div className="bg-white rounded-xl p-3 shadow-2xl border border-gray-200 w-72 relative z-[99999]">
                            <h4 className="text-gray-800 mb-2 about text-sm font-semibold" style={h3Font.getFontStyle()}>{domain.title}</h4>
                            <div className="text-gray-700 leading-tight about text-xs" style={pFont.getFontStyle()}>
                              {domain.description.split(' • ').map((point, i) => (
                                <div key={i} className="mb-1 flex items-start">
                                  <Check className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="about break-words" style={pFont.getFontStyle()}>{point.trim()}</span>
                                </div>
                              ))}
                            </div>
                            {/* Arrow pointing down */}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile Layout - 2x5 grid with all domains */}
            <div className="md:hidden">
              <div className="grid grid-cols-2 gap-3">
                {domains.map((domain) => {
                  const isIndustryOrCareer = ['Industries', 'Career'].includes(domain.title);
                  return (
                    <div 
                      key={domain.title}
                      className={`relative group flex flex-col items-center p-3 rounded-xl transition-all duration-200 cursor-pointer transform hover:scale-105 hover:shadow-lg ${
                        isIndustryOrCareer ? 'bg-blue-50 hover:bg-blue-100' : 'bg-green-50 hover:bg-green-100'
                      }`}
                    >
                      <div className="w-6 h-6 text-gray-600">
                        {React.cloneElement(domain.icon as React.ReactElement, { className: "w-6 h-6 text-gray-600" })}
                      </div>
                      <span className="text-xs font-bold text-gray-600 text-center mt-2 leading-tight">
                        {domain.title}
                      </span>
                      
                      {/* Hover Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[99999]">
                        <div className="bg-white rounded-xl p-3 shadow-2xl border border-gray-200 w-72 relative z-[99999]">
                          <h4 className="text-gray-800 mb-2 about text-sm font-semibold" style={h3Font.getFontStyle()}>{domain.title}</h4>
                          <div className="text-gray-700 leading-tight about text-xs" style={pFont.getFontStyle()}>
                            {domain.description.split(' • ').map((point, i) => (
                              <div key={i} className="mb-1 flex items-start">
                                <Check className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="about break-words" style={pFont.getFontStyle()}>{point.trim()}</span>
                              </div>
                            ))}
                          </div>
                          {/* Arrow pointing down */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
