import { AnimateOnScroll } from './AnimateOnScroll';
import { Building2, Home, Shield, Globe, Brain, Database, Check } from 'lucide-react';

interface DomainInfo {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export function AboutSection() {
  const domains: DomainInfo[] = [
    {
      title: "FinTech",
      description: "Core Banking Platforms • Payment Processing Systems • Treasury Management Systems • Financial Reporting Platforms",
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
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
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      color: "indigo"
    },
    {
      title: "ProcureTech",
      description: "Strategic Sourcing Platforms • Procurement Management Systems • Vendor Relationship Systems • Spend Analytics Platforms",
      icon: <Building2 className="w-8 h-8 text-red-600" />,
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
      description: "Agentic AI Platforms • Machine Learning Systems • Process Automation Platforms • Intelligent Workflow Systems",
      icon: <Brain className="w-8 h-8 text-yellow-600" />,
      color: "yellow"
    },
    {
      title: "Enterprise SaaS",
      description: "B2B SaaS Platforms • Multi-Tenant Systems • Mobile Application Platforms • Digital Experience Systems",
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      color: "blue"
    },
    {
      title: "Enterprise Platform",
      description: "ERP Integration Systems • CRM Management Platforms • HRIS Workflow Systems • Business Process Platforms",
      icon: <Building2 className="w-8 h-8 text-red-600" />,
      color: "red"
    },
    {
      title: "Industries",
      description: "Global Financial Services • Commercial Real Estate • Enterprise SaaS • Startups & Pre-Seed",
      icon: <Building2 className="w-8 h-8 text-gray-600" />,
      color: "gray"
    },
    {
      title: "Career",
      description: "Founder & CEO • Head of Product & Design • Executive Director, Product Management • Executive Director, Digital Transformation",
      icon: <Globe className="w-8 h-8 text-red-600" />,
      color: "red"
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; hover: string; text: string }> = {
      blue: { bg: "bg-blue-50", hover: "hover:bg-blue-100", text: "text-blue-800" },
      green: { bg: "bg-green-50", hover: "hover:bg-green-100", text: "text-green-800" },
      purple: { bg: "bg-purple-50", hover: "hover:bg-purple-100", text: "text-purple-800" },
      indigo: { bg: "bg-indigo-50", hover: "hover:bg-indigo-100", text: "text-indigo-800" },
      red: { bg: "bg-red-50", hover: "hover:bg-red-100", text: "text-red-800" },
      teal: { bg: "bg-teal-50", hover: "hover:bg-teal-100", text: "text-teal-800" },
      pink: { bg: "bg-pink-50", hover: "hover:bg-pink-100", text: "text-pink-800" },
      yellow: { bg: "bg-yellow-50", hover: "hover:bg-yellow-100", text: "text-yellow-800" },
      gray: { bg: "bg-gray-50", hover: "hover:bg-gray-100", text: "text-gray-800" }
    };
    return colorMap[color] || colorMap.gray;
  };

  return (
    <section className="w-full bg-gray-100 py-28 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Left side - Large Profile Picture with About Me header overlay */}
          <div className="lg:w-1/2 relative">
            <AnimateOnScroll direction="left">
              <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src="/Profile.png" 
                  alt="Joe Pascual - Strategic Innovation Consultant" 
                  className="w-full h-full object-cover object-top scale-110" 
                />
                
                {/* About Me header overlay on image */}
                <div className="absolute top-6 left-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="bg-yellow-300 px-1">About Me</span>
                  </h2>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right side - Full About Me summary */}
          <div className="lg:w-1/2">
            <AnimateOnScroll direction="right">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    With over 15 years experience leading strategic product and digital transformation across various industries and platforms - I've seen first-hand what it takes to transform operations, develop innovative products, and build high-performing teams.
                  </p>
                  
                  <p className="text-gray-700 text-lg leading-relaxed">
                    My approach combines deep business acumen with a human-centered
                    design mindset, allowing me to create solutions that work for
                    both the business and the people involved.
                  </p>
                  
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I believe that the most successful organizations are those that
                    align their business goals with a meaningful purpose, creating
                    value for all stakeholders while making a positive impact on the
                    world.
                  </p>
                  
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Right now, I'm focused on combining my business experience with advanced AI strategies to help businesses move fast, innovate efficiently, and stay ahead of the competition. Together, we'll turn your ideas into real-world, market-ready solutions that drive true business impact.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Domain Section */}
        <div className="w-full mb-16">
          <AnimateOnScroll>
            <h3 className="text-2xl font-bold mb-8 text-center">Tech & Product Domains</h3>
            <div className="flex gap-8">
              {/* Main Tech & Product Domains */}
              <div className="flex-1">
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                  {domains.filter(domain => !['Industries', 'Career'].includes(domain.title)).map((domain) => {
                    const colors = getColorClasses(domain.color);
                    return (
                      <div 
                        key={domain.title}
                        className={`relative group flex flex-col items-center p-4 rounded-xl ${colors.bg} ${colors.hover} transition-all duration-200 cursor-pointer transform hover:scale-105 hover:shadow-lg`}
                      >
                        {domain.icon}
                        <span className={`text-xs font-medium ${colors.text} text-center mt-2`}>
                          {domain.title}
                        </span>
                        
                        {/* Hover Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                          <div className="bg-white rounded-xl p-4 shadow-2xl border border-gray-200 w-80">
                            <h4 className="font-bold text-gray-800 mb-3">{domain.title}</h4>
                            <div className="text-sm text-gray-700 leading-relaxed">
                              {domain.description.split(' • ').map((point, i) => (
                                <div key={i} className="mb-1 flex items-start">
                                  <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>{point.trim()}</span>
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
                <div className="space-y-4">
                  {domains.filter(domain => ['Industries', 'Career'].includes(domain.title)).map((domain) => {
                    const colors = getColorClasses(domain.color);
                    return (
                      <div 
                        key={domain.title}
                        className={`relative group flex flex-col items-center p-4 rounded-xl ${colors.bg} ${colors.hover} transition-all duration-200 cursor-pointer transform hover:scale-105 hover:shadow-lg`}
                      >
                        {domain.icon}
                        <span className={`text-xs font-medium ${colors.text} text-center mt-2`}>
                          {domain.title}
                        </span>
                        
                        {/* Hover Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                          <div className="bg-white rounded-xl p-4 shadow-2xl border border-gray-200 w-80">
                            <h4 className="font-bold text-gray-800 mb-3">{domain.title}</h4>
                            <div className="text-sm text-gray-700 leading-relaxed">
                              {domain.description.split(' • ').map((point, i) => (
                                <div key={i} className="mb-1 flex items-start">
                                  <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>{point.trim()}</span>
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
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
