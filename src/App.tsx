import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LogoSection } from './components/LogoSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { ImageLibrary } from './components/Images/Servicesv2';
import { TestimonialSection } from './components/TestimonialSection';
import { TubeMapTransition } from './components/TubeMapTransition';
import { AboutSection } from './components/AboutSection';
import { MetricCounter } from './components/MetricCounter';
import { SEO } from './components/SEO';

import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="w-full min-h-screen">
      <SEO 
        title="Clearmont - Strategic Product Consulting & Digital Transformation"
        description="Strategic product consulting for purpose-driven organizations. 15+ years of experience in FinTech, PropTech, RegTech, and enterprise SaaS. Building what truly matters, faster."
        keywords="product consulting, digital transformation, strategic leadership, FinTech, PropTech, RegTech, enterprise SaaS, product management, innovation, business strategy"
        url="https://clearmont.com"
      />
      <Header />
      <div className="pt-20">
        <HeroSection />
        <LogoSection />
        <ValuePropositionSection />
        <ImageLibrary />
        <TestimonialSection />
        <MetricCounter />
        <TubeMapTransition />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
}
