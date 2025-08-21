import React, { useState, useRef } from 'react';
interface ValueStickProps {
  'data-id'?: string;
}
export function ValueStick({
  'data-id': dataId
}: ValueStickProps) {
  // Base/original values - equal sections of 80px each
  const baseWtp = 240; // Top of stick
  const basePrice = 160; // Price line
  const baseCost = 80; // Cost line
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
  const customerDelight = wtp - price;
  const firmMargin = price - cost;
  const supplierSurplus = cost - wts;
  // Calculate percentages based on original stick length (240px)
  const customerDelightPercent = Math.round(customerDelight / originalStickLength * 100);
  const firmMarginPercent = Math.round(firmMargin / originalStickLength * 100);
  const supplierSurplusPercent = Math.round(supplierSurplus / originalStickLength * 100);
  const totalValuePercent = customerDelightPercent + firmMarginPercent + supplierSurplusPercent;
  return <div data-id={dataId} className="w-full min-h-screen flex items-center justify-center p-8">
      <div className="flex items-center justify-center gap-12" style={{
      marginLeft: '200px'
    }}>
        {/* Interactive Value Stick Section */}
        <div className="relative flex items-center gap-8">
          {/* Value Stick */}
          <div className="flex items-center justify-center relative z-0">
            <div ref={containerRef} className="relative w-32 bg-transparent rounded-lg overflow-visible" style={{
            height: '480px'
          }}>
              {/* Original/Reference Stick (always visible, semi-transparent) */}
              <div className="absolute w-full bg-gray-300/40 border-2 border-gray-400/40 rounded-lg" style={{
              height: `${baseWtp - baseWts}px`,
              top: `${containerCenter - baseWtp}px`
            }}>
                {/* Original equal sections */}
                <div className="absolute w-full bg-green-200/30" style={{
                height: `80px`,
                top: '0px'
              }}></div>
                <div className="absolute w-full bg-red-200/30" style={{
                height: `80px`,
                top: `80px`
              }}></div>
                <div className="absolute w-full bg-blue-200/30" style={{
                height: `80px`,
                top: `160px`
              }}></div>
              </div>
              {/* Current Active Sections (full width) - muted colors */}
              <div className="absolute w-full transition-all duration-200 border-2 border-white rounded-t-lg" style={{
              height: `${customerDelight}px`,
              top: `${containerCenter - wtp}px`,
              backgroundColor: '#86EFAC' // muted green
            }}></div>
              <div className="absolute w-full transition-all duration-200 border-2 border-white" style={{
              height: `${firmMargin}px`,
              top: `${containerCenter - price}px`,
              backgroundColor: '#F87171' // muted red
            }}></div>
              <div className="absolute w-full transition-all duration-200 border-2 border-white rounded-b-lg" style={{
              height: `${supplierSurplus}px`,
              top: `${containerCenter - cost}px`,
              backgroundColor: '#7DD3FC' // muted blue
            }}></div>
              {/* White drag handles - visual only */}
              <div className="absolute left-0 right-0 h-0.5 bg-white transition-colors" style={{
              top: `${containerCenter - wtp}px`
            }}></div>
              <div className="absolute left-0 right-0 h-0.5 bg-white transition-colors" style={{
              top: `${containerCenter - price}px`
            }}></div>
              <div className="absolute left-0 right-0 h-0.5 bg-white transition-colors" style={{
              top: `${containerCenter - cost}px`
            }}></div>
              <div className="absolute left-0 right-0 h-0.5 bg-white transition-colors" style={{
              top: `${containerCenter - wts}px`
            }}></div>
            </div>
          </div>
          {/* Labels - positioned to match stick with higher z-index */}
          <div className="absolute left-0 top-0 h-[480px] text-right font-bold text-gray-700 z-10" style={{
          marginLeft: '-200px'
        }}>
            <div style={{
            top: `${containerCenter - wtp - 10}px`
          }} className="absolute flex items-center gap-2 whitespace-nowrap cursor-ns-resize hover:text-gray-900 transition-colors select-none" onMouseDown={handleMouseDown('wtp')}>
              <span className="text-sm">WILLINGNESS TO PAY</span>
              <div className="w-12 border-t-2 border-dotted border-gray-400"></div>
            </div>
            <div style={{
            top: `${containerCenter - price - 10}px`
          }} className="absolute flex items-center gap-2 whitespace-nowrap cursor-ns-resize hover:text-gray-900 transition-colors select-none" onMouseDown={handleMouseDown('price')}>
              <span className="text-sm">PRICE</span>
              <div className="w-20 border-t-2 border-dotted border-gray-400"></div>
            </div>
            <div style={{
            top: `${containerCenter - cost - 10}px`
          }} className="absolute flex items-center gap-2 whitespace-nowrap cursor-ns-resize hover:text-gray-900 transition-colors select-none" onMouseDown={handleMouseDown('cost')}>
              <span className="text-sm">COST</span>
              <div className="w-20 border-t-2 border-dotted border-gray-400"></div>
            </div>
            <div style={{
            top: `${containerCenter - wts - 10}px`
          }} className="absolute flex items-center gap-2 whitespace-nowrap cursor-ns-resize hover:text-gray-900 transition-colors select-none" onMouseDown={handleMouseDown('wts')}>
              <span className="text-sm">WILLINGNESS TO SELL</span>
              <div className="w-12 border-t-2 border-dotted border-gray-400"></div>
            </div>
          </div>
        </div>
        {/* Percentage Metrics - Perfectly aligned */}
        <div className="flex flex-col justify-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded" style={{
                  backgroundColor: '#86EFAC'
                }}></div>
                  <span className="font-semibold text-gray-700">
                    Customer Delight
                  </span>
                </div>
                <span className="text-2xl font-bold text-gray-800">
                  {customerDelightPercent}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded" style={{
                  backgroundColor: '#F87171'
                }}></div>
                  <span className="font-semibold text-gray-700">
                    Firm Margin
                  </span>
                </div>
                <span className="text-2xl font-bold text-gray-800">
                  {firmMarginPercent}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded" style={{
                  backgroundColor: '#7DD3FC'
                }}></div>
                  <span className="font-semibold text-gray-700">
                    Supplier Surplus
                  </span>
                </div>
                <span className="text-2xl font-bold text-gray-800">
                  {supplierSurplusPercent}%
                </span>
              </div>
              {/* Divider line */}
              <div className="border-t border-gray-300 my-4"></div>
              {/* Total Value */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded bg-gray-600"></div>
                  <span className="font-bold text-gray-800">Total Value</span>
                </div>
                <span className="text-2xl font-bold text-purple-600">
                  {totalValuePercent}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}