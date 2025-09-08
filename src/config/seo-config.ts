// SEO Configuration for easy iteration and testing
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image?: string;
}

// Homepage variations for A/B testing
export const homepageVariations: SEOConfig[] = [
  {
    title: "Clearmont - Strategic Product Consulting & Digital Transformation",
    description: "Strategic product consulting for purpose-driven organizations. 15+ years of experience in FinTech, PropTech, RegTech, and enterprise SaaS. Building what truly matters, faster.",
    keywords: "product consulting, digital transformation, strategic leadership, FinTech, PropTech, RegTech, enterprise SaaS, product management, innovation, business strategy",
    url: "https://www.clearmontconsulting.com"
  },
  {
    title: "Product Management Consulting | Clearmont Strategic Consulting",
    description: "Expert product management consulting and digital transformation services. Specialized in FinTech, PropTech, and enterprise SaaS. Transform your product strategy with 15+ years experience.",
    keywords: "product management consulting, product strategy, digital transformation consultant, FinTech consulting, PropTech advisor, enterprise SaaS consultant, product leadership",
    url: "https://www.clearmontconsulting.com"
  },
  {
    title: "Fractional CPO & Product Strategy Consulting | Clearmont",
    description: "Fractional CPO and product strategy consulting for startups and enterprises. Expert in FinTech, PropTech, RegTech. Build better products faster with strategic guidance.",
    keywords: "fractional CPO, product strategy consulting, interim product leader, FinTech product consultant, PropTech advisor, product management services",
    url: "https://www.clearmontconsulting.com"
  }
];

// Service-specific SEO configs
export const serviceSEOConfigs: Record<string, SEOConfig> = {
  "fractional-leadership": {
    title: "Fractional CPO & Product Leadership Services | Clearmont",
    description: "Fractional CPO and product leadership services for startups and enterprises. Interim support when you need it, without full-time commitment.",
    keywords: "fractional CPO, interim product leader, product leadership consulting, CPO services, product executive",
    url: "https://www.clearmontconsulting.com"
  },
  "product-design": {
    title: "Product Design & Prototyping Services | Clearmont",
    description: "Rapid product design and prototyping services. Turn concepts into testable solutions without derailing your current roadmap.",
    keywords: "product design consulting, rapid prototyping, product development, UX design, product innovation",
    url: "https://www.clearmontconsulting.com"
  },
  "digital-transformation": {
    title: "Digital Transformation Consulting | Clearmont",
    description: "Digital transformation consulting for enterprises. Modernize workflows, automate processes, and unlock hidden business value.",
    keywords: "digital transformation consulting, business automation, workflow optimization, enterprise modernization, digital strategy",
    url: "https://www.clearmontconsulting.com"
  }
};

// Blog SEO templates
export const blogSEOTemplates = {
  "product-management": {
    title: "Product Management Insights | Clearmont Blog",
    description: "Expert insights on product management, strategy, and leadership from 15+ years of experience in FinTech, PropTech, and enterprise SaaS.",
    keywords: "product management blog, product strategy insights, product leadership, FinTech product management, PropTech consulting"
  },
  "digital-transformation": {
    title: "Digital Transformation Strategies | Clearmont Blog", 
    description: "Digital transformation strategies and insights for modern enterprises. Learn from real-world implementations and best practices.",
    keywords: "digital transformation blog, business transformation, enterprise modernization, digital strategy insights"
  }
};

// Helper function to get current variation (you can change this to test different versions)
export function getCurrentHomepageSEO(): SEOConfig {
  // Change this index to test different variations (0, 1, or 2)
  const currentVariation = 0;
  return homepageVariations[currentVariation];
}

// Helper function to get service-specific SEO
export function getServiceSEO(serviceKey: string): SEOConfig {
  return serviceSEOConfigs[serviceKey] || homepageVariations[0];
}

