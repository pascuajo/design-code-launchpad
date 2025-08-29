import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LogoSection } from './components/LogoSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { ImageLibrary } from './components/Images/Servicesv2';
import { TestimonialSection } from './components/TestimonialSection';
import { TubeMapTransition } from './components/TubeMapTransition';
import { AboutSection } from './components/AboutSection';
import { MetricCounter } from './components/MetricCounter';

import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="w-full min-h-screen">
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
