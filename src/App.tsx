import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LogoSection } from './components/LogoSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { ImageLibrary } from './components/Images/Servicesv2';
import { ValueStick } from './components/Images/ValueStick';
import { TestimonialSection } from './components/TestimonialSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
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
        <ValueStick data-id="value-stick-1" />
        <TestimonialSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}