import { useState, useEffect } from 'react';
import { getFont, currentFonts, updateFonts, resetFonts, type ComponentFonts } from '../config/fonts';

export function useFonts(componentId: string, elementType: string) {
  const [fontFamily, setFontFamily] = useState(() => getFont(componentId, elementType));

  useEffect(() => {
    // Function to update font when configuration changes
    const updateFont = () => {
      const newFont = getFont(componentId, elementType);
      setFontFamily(newFont);
    };

    // Listen for font updates
    const handleFontUpdate = () => {
      updateFont();
    };

    // Add event listener for font updates
    window.addEventListener('fonts-updated', handleFontUpdate);

    // Initial font
    updateFont();

    return () => {
      window.removeEventListener('fonts-updated', handleFontUpdate);
    };
  }, [componentId, elementType]);

  return {
    fontFamily,
    getFontStyle: () => ({
      fontFamily: `'${fontFamily}', ${fontFamily === 'DIN Condensed' ? 'Arial Narrow' : 'system-ui'}, sans-serif`
    })
  };
}

// Hook for admin components to manage fonts
export function useFontManager() {
  const [fonts, setFonts] = useState<ComponentFonts>(currentFonts);

  const updateFont = (componentId: string, elementType: string, newFont: string) => {
    console.log(`Updating font: ${componentId}.${elementType} to ${newFont}`);
    
    const newFonts = { ...fonts };
    if (newFonts[componentId] && newFonts[componentId][elementType]) {
      newFonts[componentId][elementType].fontFamily = newFont;
      setFonts(newFonts);
      
      // Also update the actual font configuration
      updateFonts(newFonts);
      
      console.log('Font updated successfully');
    } else {
      console.log(`Component ${componentId} or font type ${elementType} not found`);
    }
  };

  const publishChanges = () => {
    console.log('Publishing font changes...');
    updateFonts(fonts);
    // Dispatch event to notify components
    window.dispatchEvent(new CustomEvent('fonts-updated'));
    console.log('Font changes published');
  };

  const resetToDefaults = () => {
    console.log('Resetting fonts to defaults...');
    resetFonts();
    setFonts({ ...currentFonts });
    window.dispatchEvent(new CustomEvent('fonts-updated'));
    console.log('Fonts reset to defaults');
  };

  return {
    fonts,
    updateFont,
    publishChanges,
    resetToDefaults
  };
}
