import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({
  children
}: LayoutProps) {
  return <div className="w-full min-h-screen">
      <Header />
      <div className="pt-20">{children}</div>
      <Footer />
    </div>;
}