import React, { useState, useEffect } from 'react';

export default function GhodelaIntroSplash({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Auto-fade after 2.3 seconds
    const timer = setTimeout(() => {
      handleDismiss();
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 700);
  };

  if (!isVisible) return null;

  return (
    <div 
      onClick={handleDismiss}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0F0F0E] text-white cursor-pointer select-none transition-all duration-700 ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Architectural Photo with Ambient Glow */}
      <img 
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80" 
        alt="Ghodela Architectural Background" 
        className="absolute inset-0 w-full h-full object-cover brightness-[0.25] scale-105 animate-pulse"
        style={{ animationDuration: '4s' }}
      />

      {/* Radial Vignette & Shimmer */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#0F0F0E]/80 to-[#0F0F0E]" />

      {/* Main Luxury Brand Reveal Container (Pure Name Only) */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6 animate-in fade-in zoom-in-95 duration-1000">
        
        {/* Subtle Gold Monogram Emblem */}
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#B08D57]/40 bg-[#181816]/80 backdrop-blur-md shadow-2xl mx-auto relative">
          <span className="text-xl sm:text-2xl font-serif font-bold text-amber-200 tracking-wider">
            G
          </span>
          <span className="absolute -inset-1 rounded-full border border-amber-300/20 animate-ping" style={{ animationDuration: '3s' }} />
        </div>

        {/* The Pure "GHODELA" Brand Name */}
        <div>
          <h1 className="font-display font-black text-6xl sm:text-8xl lg:text-9xl text-white tracking-[0.2em] sm:tracking-[0.3em] uppercase drop-shadow-2xl">
            GHODELA
          </h1>
        </div>

      </div>

    </div>
  );
}
