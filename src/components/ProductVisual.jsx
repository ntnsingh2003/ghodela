import React, { useState } from 'react';
import { Sparkles, Eye, Sliders, Check } from 'lucide-react';

/**
 * High-Resolution Architectural Product Visual
 * Combines authentic high-definition photography with interactive finish swatches,
 * 3D hover zoom, and tactile mechanical switchboard physics.
 */
export default function ProductVisual({ 
  product, 
  activeFinish, 
  size = "md", 
  interactive = false, 
  onToggleSwitch, 
  isSwitchOn = true 
}) {
  const [imageError, setImageError] = useState(false);
  const [internalSwitchState, setInternalSwitchState] = useState(true);

  const finish = activeFinish || (product.finishes && product.finishes[0]) || { name: 'Standard', colorCode: '#333' };
  const heightClass = size === "sm" ? "h-40" : size === "lg" ? "h-72" : "h-52";
  const currentSwitchOn = onToggleSwitch ? isSwitchOn : internalSwitchState;

  // Mechanical switch click sound generator
  const playClick = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(currentSwitchOn ? 550 : 850, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch (e) {}
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    playClick();
    if (onToggleSwitch) {
      onToggleSwitch();
    } else {
      setInternalSwitchState(!internalSwitchState);
    }
  };

  const isSwitchProduct = product.category === "electricals" && 
    (product.subCategory.includes("Switch") || product.subCategory.includes("Modular"));

  return (
    <div className={`w-full ${heightClass} relative overflow-hidden bg-stone-900 select-none group`}>
      
      {/* 1. REAL HIGH-RESOLUTION PHOTOGRAPHY */}
      {!imageError && product.imageUrl ? (
        <img
          src={product.imageUrl}
          alt={product.name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />
      ) : (
        /* Fallback Architectural Texture Background */
        <div 
          className="w-full h-full flex items-center justify-center p-4 transition-colors duration-500"
          style={{ background: finish.colorCode || '#2C2B29' }}
        >
          <div className="text-center p-3 bg-black/40 backdrop-blur-md rounded-xl text-white">
            <span className="text-[10px] font-mono text-amber-300 block uppercase font-bold">
              {product.brand}
            </span>
            <span className="font-display text-xs font-bold mt-1 block">
              {product.name}
            </span>
          </div>
        </div>
      )}

      {/* 2. ARCHITECTURAL VIGNETTE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

      {/* 3. SHIMMER REFLECTION LAYER */}
      <div className="shimmer-active absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* 4. ACTIVE FINISH / COLOR OVERLAY PILL */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-white shadow-md">
          <span 
            className="w-2.5 h-2.5 rounded-full border border-white/50 shrink-0"
            style={{ backgroundColor: finish.colorCode || '#888' }}
          />
          <span className="text-[10px] font-mono font-medium truncate max-w-[140px]">
            {finish.name}
          </span>
        </div>

        <span className="text-[9px] font-mono font-bold text-amber-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-amber-500/30">
          {product.category.toUpperCase()}
        </span>
      </div>

      {/* 5. INTERACTIVE 3D SWITCH CLICKABLE ROCKER OVERLAY (FOR SWITCH PRODUCTS) */}
      {isSwitchProduct && (
        <div 
          onClick={handleToggle}
          className="absolute top-3 right-3 z-20 cursor-pointer bg-black/80 hover:bg-black backdrop-blur-md border border-white/30 rounded-xl p-1.5 shadow-xl flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
          title="Click to toggle switch ON/OFF with realistic mechanical sound"
        >
          <div className={`w-3 h-3 rounded-full transition-all ${
            currentSwitchOn 
              ? 'bg-emerald-400 shadow-[0_0_10px_#34D399]' 
              : 'bg-stone-500 opacity-60'
          }`} />
          <span className="text-[9px] font-mono font-bold text-white pr-1">
            {currentSwitchOn ? 'ON' : 'OFF'}
          </span>
        </div>
      )}

      {/* 6. WHOLESALE GODOWN READY BADGE */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none">
        <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-[#C85A32] text-white shadow-xs">
          READY STOCK
        </span>
      </div>

    </div>
  );
}
