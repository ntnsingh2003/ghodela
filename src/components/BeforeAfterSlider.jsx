import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2 } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full">
      {/* Interactive Slider Frame */}
      <div 
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full h-80 sm:h-[480px] rounded-3xl overflow-hidden select-none cursor-ew-resize border border-stone-300 shadow-2xl group"
      >
        {/* RIGHT (AFTER): FINISHED LUXURY ROOM */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85" 
            alt="Finished Luxury Living"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
          <div className="absolute top-5 right-5 bg-black/75 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-mono font-bold">
            AFTER
          </div>
        </div>

        {/* LEFT (BEFORE): RAW STRUCTURAL SITE (CLIPPED) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85" 
            alt="Raw Concrete Civil Structure"
            className="w-full h-full object-cover filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
          <div className="absolute top-5 left-5 bg-stone-900/85 backdrop-blur-md border border-amber-500/40 text-amber-300 px-4 py-1.5 rounded-full text-xs font-mono font-bold">
            BEFORE
          </div>
        </div>

        {/* DIVIDER HANDLE */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.8)]"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#181816] border-2 border-white text-white flex items-center justify-center shadow-2xl">
            <MoveHorizontal className="w-5 h-5 text-amber-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
