import React from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { useFonts } from '../hooks/useFonts';

interface SectionMotifProps {
  text: string;
  className?: string;
  lineLeft?: string;
  lineTop?: string;
  lineHeight?: string;
}

export function SectionMotif({ 
  text, 
  className = "", 
  lineLeft = "left-[39%]", 
  lineTop = "top-[-80px]",
  lineHeight = "h-64"
}: SectionMotifProps) {
  const pFont = useFonts('valueProp', 'p');
  
  return (
    <div className={`mb-16 ${className}`}>
      <AnimateOnScroll>
        <div className="relative">
          {/* Vertical Line - positioned exactly where specified */}
          <div className={`absolute ${lineLeft} ${lineTop} w-px ${lineHeight} bg-gradient-to-b from-transparent via-gray-900 to-transparent`}></div>
          
          {/* Content Container - positioned at the center of the line */}
          <div className={`absolute ${lineLeft} ${lineTop} transform -translate-x-1/2`} style={{ marginTop: '50%' }}>
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
                <p className="text-lg font-semibold text-gray-600 uppercase tracking-wide value-prop" style={pFont.getFontStyle()}>
                  {text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
