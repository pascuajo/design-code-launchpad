import React, { useState } from 'react';
import { useFontManager } from '../../hooks/useFonts';
import { 
  Type, 
  Globe, 
  Award, 
  BarChart3, 
  Monitor, 
  MessageSquare, 
  Users, 
  MapPin, 
  BookOpen, 
  FileText,
  Check,
  X
} from 'lucide-react';

export function FontManager() {
  const { fonts, updateFont, publishChanges, resetToDefaults } = useFontManager();
  
  // Multi-selection state
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
  const [selectedFontTypes, setSelectedFontTypes] = useState<string[]>([]);
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Popular fonts for selection
  const popularFonts = [
    'Inter',
    'DIN Condensed',
    'Source Code Pro',
    'Roboto',
    'Open Sans',
    'Lato',
    'Poppins',
    'Montserrat',
    'Nunito',
    'Raleway',
    'Ubuntu',
    'Noto Sans',
    'Work Sans',
    'IBM Plex Sans',
    'Fira Sans',
    'PT Sans',
    'Source Sans Pro',
    'Merriweather',
    'Playfair Display',
    'Georgia',
    'Times New Roman',
    'Arial',
    'Helvetica',
    'Verdana',
    'Tahoma',
    'Trebuchet MS',
    'Courier New',
    'Monaco',
    'Consolas',
    'Menlo'
  ];

  // Get all available components and font types
  const components = Object.keys(fonts);
  const fontTypes = ['h1', 'h2', 'h3', 'h4', 'p', 'span', 'li', 'label', 'button', 'pill', 'formField', 'highlighted'];

  // Handle component selection
  const handleComponentChange = (componentId: string) => {
    setSelectedComponents(prev => 
      prev.includes(componentId) 
        ? prev.filter(id => id !== componentId)
        : [...prev, componentId]
    );
  };

  // Handle font type selection
  const handleFontTypeChange = (fontType: string) => {
    setSelectedFontTypes(prev => 
      prev.includes(fontType) 
        ? prev.filter(type => type !== fontType)
        : [...prev, fontType]
    );
  };

  // Handle font change
  const handleFontChange = () => {
    if (selectedComponents.length === 0 || selectedFontTypes.length === 0) {
      alert('Please select at least one component and one font type.');
      return;
    }

    console.log('Applying font changes:', { selectedComponents, selectedFontTypes, selectedFont });

    // Apply font changes to all selected combinations
    selectedComponents.forEach(componentId => {
      selectedFontTypes.forEach(fontType => {
        // Check if this component/font type combination exists
        if (fonts[componentId] && fonts[componentId][fontType]) {
          console.log(`Updating ${componentId}.${fontType} to ${selectedFont}`);
          updateFont(componentId, fontType, selectedFont);
        }
      });
    });

    // Show success message
    alert(`Font changes applied! ${selectedComponents.length} component(s) × ${selectedFontTypes.length} font type(s) updated to ${selectedFont}. Click "Publish Changes" to make them live on the website.`);

    // Clear selections after applying
    setSelectedComponents([]);
    setSelectedFontTypes([]);
    setSelectedFont('Inter');
  };

  // Handle publish changes
  const handlePublish = () => {
    setShowConfirmation(true);
  };

  // Confirm and publish
  const confirmPublish = () => {
    console.log('Publishing font changes...');
    publishChanges();
    setShowConfirmation(false);
    alert('Font changes have been published to your website!');
  };

  // Handle reset
  const handleReset = () => {
    if (confirm('Are you sure you want to reset all fonts to defaults? This cannot be undone.')) {
      resetToDefaults();
    }
  };

  // Select all components
  const selectAllComponents = () => {
    setSelectedComponents(components);
  };

  // Deselect all components
  const deselectAllComponents = () => {
    setSelectedComponents([]);
  };

  // Select all font types
  const selectAllFontTypes = () => {
    setSelectedFontTypes(fontTypes);
  };

  // Deselect all font types
  const deselectAllFontTypes = () => {
    setSelectedFontTypes([]);
  };

  // Get component icon
  function getComponentIcon(componentId: string) {
    const icons = {
      header: <FileText size={16} />,
      hero: <Globe size={16} />,
      logo: <Award size={16} />,
      valueProp: <BarChart3 size={16} />,
      valueStick: <BarChart3 size={16} />,
      imageLibrary: <Monitor size={16} />,
      testimonials: <MessageSquare size={16} />,
      metrics: <BarChart3 size={16} />,
      tubeMap: <MapPin size={16} />,
      about: <Users size={16} />,
      contact: <MessageSquare size={16} />,
      contactModal: <MessageSquare size={16} />,
      footer: <FileText size={16} />,
      blog: <BookOpen size={16} />,
      bookClub: <BookOpen size={16} />
    };
    
    return icons[componentId as keyof typeof icons] || <Type size={16} />;
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Font Management System</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Control typography across your entire website. Select multiple components and font types to apply changes efficiently.
        </p>
      </div>

      {/* Font Change Workflow */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Font Change Workflow</h3>
        
        {/* Step 1: Select Components */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-700">
              Step 1: Select Components ({selectedComponents.length} selected)
            </label>
            <div className="flex gap-2">
              <button
                onClick={selectAllComponents}
                className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
              >
                Select All
              </button>
              <button
                onClick={deselectAllComponents}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
              >
                Deselect All
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {components.map(componentId => (
              <label key={componentId} className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedComponents.includes(componentId)}
                  onChange={() => handleComponentChange(componentId)}
                  className="text-primary"
                />
                <span className="text-sm">{getComponentIcon(componentId)} {componentId}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Step 2: Select Font Types */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-700">
              Step 2: Select Font Types ({selectedFontTypes.length} selected)
            </label>
            <div className="flex gap-2">
              <button
                onClick={selectAllFontTypes}
                className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
              >
                Select All
              </button>
              <button
                onClick={deselectAllFontTypes}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
              >
                Deselect All
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {fontTypes.map(type => (
              <label key={type} className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFontTypes.includes(type)}
                  onChange={() => handleFontTypeChange(type)}
                  className="text-primary"
                />
                <span className="text-sm">{type.toUpperCase()} {
                  type === 'h1' ? 'Main Headings' : 
                  type === 'h2' ? 'Section Headings' : 
                  type === 'h3' ? 'Sub Headings' : 
                  type === 'h4' ? 'Small Headings' : 
                  type === 'p' ? 'Paragraphs' : 
                  type === 'span' ? 'Inline Text' : 
                  type === 'li' ? 'List Items' : 
                  type === 'label' ? 'Form Labels' : 
                  type === 'button' ? 'Buttons' : 
                  type === 'pill' ? 'Pills/Tags' : 
                  type === 'formField' ? 'Form Fields' : 
                  type === 'highlighted' ? 'Highlighted Text' : 
                  'Headings'
                }</span>
              </label>
            ))}
          </div>
        </div>

        {/* Step 3: Choose Font */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Step 3: Choose New Font
          </label>
          <select
            value={selectedFont}
            onChange={(e) => setSelectedFont(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            {popularFonts.map(font => (
              <option key={font} value={font}>{font}</option>
            ))}
          </select>
        </div>

        {/* Apply Changes Button */}
        <div className="flex justify-center">
          <button
            onClick={handleFontChange}
            disabled={selectedComponents.length === 0 || selectedFontTypes.length === 0}
            className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-black font-medium py-3 px-8 rounded-full transition-colors flex items-center gap-2"
          >
            <Check size={20} />
            Apply Changes to {selectedComponents.length > 0 && selectedFontTypes.length > 0 
              ? `${selectedComponents.length} component(s) × ${selectedFontTypes.length} font type(s)` 
              : 'Selected Items'
            }
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={handlePublish}
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full transition-colors flex items-center gap-2"
        >
          <Check size={20} />
          Publish Changes
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-full transition-colors flex items-center gap-2"
        >
          <X size={20} />
          Reset to Defaults
        </button>
      </div>

      {/* Current Font Configuration */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Current Font Configuration</h3>
        
        {/* Debug Info */}
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
          <h4 className="font-medium text-blue-800 mb-2">Debug Info</h4>
          <p className="text-sm text-blue-700">
            Selected Components: {selectedComponents.join(', ') || 'None'}<br/>
            Selected Font Types: {selectedFontTypes.join(', ') || 'None'}<br/>
            Selected Font: {selectedFont}<br/>
            Total Components: {components.length}<br/>
            Total Font Types: {fontTypes.length}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.map(componentId => (
            <div key={componentId} className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                {getComponentIcon(componentId)}
                <h4 className="font-medium capitalize">{componentId}</h4>
              </div>
              <div className="space-y-2">
                {Object.entries(fonts[componentId] || {}).map(([elementType, fontSetting]) => (
                  <div key={elementType} className="flex justify-between text-sm">
                    <span className="text-gray-600">{elementType.toUpperCase()}:</span>
                    <span className="font-medium">{fontSetting.fontFamily}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Confirm Font Changes</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to publish these font changes? This will update the live website.
            </p>
            <div className="flex gap-3">
              <button
                onClick={confirmPublish}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Publish
              </button>
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
