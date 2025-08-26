import React, { useState, useRef } from 'react';

interface ValueStickProps {
  'data-id'?: string;
}

export function ValueStick({ 'data-id': dataId }: ValueStickProps) {
  // Base/original values - equal sections of 80px each
  const baseWtp = 240; // Top of stick
  const baseWts = 0; // Bottom of stick
  const originalStickLength = 240; // Total original stick length for percentage calculations

  // Extension limits - 40% of original stick length
  const maxExtension = originalStickLength * 0.4; // 96px
  const maxWtp = baseWtp + maxExtension; // 336
  const minWts = baseWts - maxExtension; // -96

  // Container center point
  const containerCenter = 240; // Center the stick in a 480px container

  const [wtp, setWtp] = useState(240); // Willingness to Pay height
  const [price, setPrice] = useState(160); // Price position
  const [cost, setCost] = useState(80); // Cost position
  const [wts, setWts] = useState(0); // Willingness to Sell height

  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<string | null>(null);

  const handleMouseDown = (section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = section;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const relativeY = e.clientY - rect.top;
    
    // Convert screen coordinates to value coordinates (inverted Y-axis)
    const value = containerCenter - relativeY + 20; // Add offset for padding

    switch (isDragging.current) {
      case 'wtp':
        setWtp(Math.max(price + 10, Math.min(maxWtp, value)));
        break;
      case 'price':
        setPrice(Math.max(cost + 10, Math.min(wtp - 10, value)));
        break;
      case 'cost':
        setCost(Math.max(wts + 10, Math.min(price - 10, value)));
        break;
      case 'wts':
        setWts(Math.max(minWts, Math.min(cost - 10, value)));
        break;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = null;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  // Calculate display positions (inverted for SVG coordinates)
  const displayWtp = containerCenter - wtp + 20;
  const displayPrice = containerCenter - price + 20;
  const displayCost = containerCenter - cost + 20;
  const displayWts = containerCenter - wts + 20;

  return (
    <div className="flex flex-col items-center space-y-6" data-id={dataId}>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Interactive Value Creation Model
        </h3>
        
        <div className="flex justify-center">
          <div 
            ref={containerRef}
            className="relative w-80 h-96 bg-gray-50 rounded-lg border-2 border-gray-200"
            style={{ height: '480px' }}
          >
            <svg 
              width="100%" 
              height="100%" 
              className="absolute inset-0"
              style={{ overflow: 'visible' }}
            >
              {/* Customer Value Section */}
              <rect
                x="120"
                y={displayWtp}
                width="80"
                height={displayPrice - displayWtp}
                fill="#10B981"
                className="cursor-pointer hover:opacity-80"
                onMouseDown={handleMouseDown('wtp')}
              />
              
              {/* Company Margin Section */}
              <rect
                x="120"
                y={displayPrice}
                width="80"
                height={displayCost - displayPrice}
                fill="#3B82F6"
                className="cursor-pointer hover:opacity-80"
                onMouseDown={handleMouseDown('price')}
              />
              
              {/* Supplier Value Section */}
              <rect
                x="120"
                y={displayCost}
                width="80"
                height={displayWts - displayCost}
                fill="#F59E0B"
                className="cursor-pointer hover:opacity-80"
                onMouseDown={handleMouseDown('cost')}
              />
              
              {/* Labels */}
              <text x="210" y={displayWtp - 5} className="fill-current text-sm font-medium">
                WTP: ${wtp}
              </text>
              <text x="210" y={displayPrice - 5} className="fill-current text-sm font-medium">
                Price: ${price}
              </text>
              <text x="210" y={displayCost - 5} className="fill-current text-sm font-medium">
                Cost: ${cost}
              </text>
              <text x="210" y={displayWts - 5} className="fill-current text-sm font-medium">
                WTS: ${wts}
              </text>
              
              {/* Section Labels */}
              <text x="60" y={(displayWtp + displayPrice) / 2} className="fill-current text-xs text-green-700 font-medium">
                Customer Value
              </text>
              <text x="60" y={(displayPrice + displayCost) / 2} className="fill-current text-xs text-blue-700 font-medium">
                Company Margin
              </text>
              <text x="60" y={(displayCost + displayWts) / 2} className="fill-current text-xs text-yellow-700 font-medium">
                Supplier Value
              </text>
            </svg>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-600">
          <p className="mb-2">Drag the sections to adjust values and see how value is created and distributed.</p>
          <div className="flex justify-center space-x-6">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
              <span>Customer Value: ${wtp - price}</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
              <span>Company Margin: ${price - cost}</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
              <span>Supplier Value: ${cost - wts}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}