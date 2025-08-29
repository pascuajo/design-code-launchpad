/**
 * COMPONENT TEMPLATE - Copy this file and modify for new components
 * 
 * IMPORTANT: Always use the font system - never hardcode fonts!
 * 
 * This template shows the correct way to implement components with the font system.
 */

import React from 'react';
import { useFonts } from '../hooks/useFonts';

interface TemplateComponentProps {
  title: string;
  description: string;
}

export function TemplateComponent({ title, description }: TemplateComponentProps) {
  // 🔑 ALWAYS import and use the useFonts hook
  const h1Font = useFonts('templateComponent', 'h1');
  const h2Font = useFonts('templateComponent', 'h2');
  const pFont = useFonts('templateComponent', 'p');
  const spanFont = useFonts('templateComponent', 'span');

  return (
    // 🔑 ALWAYS add data-component attribute to root element
    <div className="template-component" data-component="templateComponent">
      
      {/* 🔑 ALWAYS add CSS class for font targeting */}
      <h1 className="template-component" style={h1Font.getFontStyle()}>
        {title}
      </h1>
      
      <h2 className="template-component" style={h2Font.getFontStyle()}>
        Subheading
      </h2>
      
      {/* 🔑 ALWAYS use style={fontHook.getFontStyle()} for text elements */}
      <p className="template-component" style={pFont.getFontStyle()}>
        {description}
      </p>
      
      <span className="template-component" style={spanFont.getFontStyle()}>
        Inline text
      </span>
      
      {/* ✅ CORRECT: Using the font system */}
      <div className="example">
        <p className="template-component" style={pFont.getFontStyle()}>
          This text will use the font system
        </p>
      </div>
      
      {/* ❌ WRONG: Don't do this */}
      {/* <p style={{ fontFamily: 'Arial' }}>Hardcoded font</p> */}
      {/* <p className="font-sans">Tailwind font class</p> */}
      
    </div>
  );
}

/**
 * STEPS TO ADD NEW COMPONENT TO FONT SYSTEM:
 * 
 * 1. Copy this template file
 * 2. Rename component and file
 * 3. Update data-component attribute
 * 4. Update useFonts calls with your component name
 * 5. Add component to src/config/fonts.ts
 * 6. Add component to FontManager.tsx
 * 7. Test in admin panel
 * 
 * REMEMBER: The font system is the single source of truth for all typography!
 */
