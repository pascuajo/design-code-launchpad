import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SEO } from './SEO';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
}

export function Layout({ 
  children, 
  title = "Clearmont - Strategic Product Consulting & Digital Transformation",
  description = "Strategic product consulting for purpose-driven organizations. 15+ years of experience in FinTech, PropTech, RegTech, and enterprise SaaS. Building what truly matters, faster.",
  keywords = "product consulting, digital transformation, strategic leadership, FinTech, PropTech, RegTech, enterprise SaaS, product management, innovation, business strategy",
  url = "https://clearmont.com"
}: LayoutProps) {
  return (
    <div className="w-full min-h-screen">
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
        url={url}
      />
      <Header />
      <div className="pt-20">{children}</div>
      <Footer />
    </div>
  );
}