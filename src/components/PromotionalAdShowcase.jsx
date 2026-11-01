import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Pause, 
  ChevronRight, 
  ChevronLeft, 
  Tag, 
  ShieldCheck, 
  MessageSquare,
  Warehouse
} from 'lucide-react';
import { PROMO_CAMPAIGNS, TRADER_INFO } from '../data/mockData';

export default function PromotionalAdShowcase({ onNavigateToCampaign }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const activeAd = PROMO_CAMPAIGNS[currentIdx];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % PROMO_CAMPAIGNS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % PROMO_CAMPAIGNS.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + PROMO_CAMPAIGNS.length) % PROMO_CAMPAIGNS.length);
  };

  const handleWhatsAppInquiry = (e) => {
    e.stopPropagation();
    const text = `Namaste Ghodela, I saw your campaign for *${activeAd.title}* (${activeAd.subtitle}) on your digital showroom. Please share current wholesale rate and stock availability.`;
    const url = `https://wa.me/${TRADER_INFO.flagshipShowroom.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="w-full space-y-3">
      {/* Carousel Controls Only */}
      <div className="flex items-center justify-end gap-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-xl bg-white border border-stone-200 hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-600" />}
        </button>
        <button
          onClick={handlePrev}
          className="p-2 rounded-xl bg-white border border-stone-200 hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-xl bg-white border border-stone-200 hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Main Cinematic Banner Card */}
      <div 
        onClick={() => {
          if (onNavigateToCampaign) {
            onNavigateToCampaign(activeAd.targetView, { category: activeAd.targetCategory });
          }
        }}
        className="luxury-card rounded-3xl overflow-hidden relative cursor-pointer group border-2 border-stone-300 shadow-xl"
      >
        <div className="relative w-full h-[380px] sm:h-[480px] overflow-hidden bg-stone-950">
          
          {/* Ambient High-Resolution Background Photo */}
          <img 
            src={activeAd.imageUrl} 
            alt={activeAd.title}
            className="w-full h-full object-cover opacity-85 scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Dark Architectural Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-transparent to-transparent" />

          {/* Content Overlay - Title & Quick Actions */}
          <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end z-10 text-white">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight group-hover:text-amber-200 transition-colors uppercase">
                {activeAd.title}
              </h2>
              <p className="text-base sm:text-xl text-stone-200 font-editorial italic">
                {activeAd.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  type="button"
                  className="px-7 py-3 rounded-full bg-white hover:bg-stone-100 text-[#181816] text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xl transition-all cursor-pointer"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 text-[#C85A32]" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="px-6 py-3 rounded-full bg-[#128C7E] hover:bg-[#0E6D62] text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xl transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Slide Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
            <div 
              className="h-full bg-[#C85A32] transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / PROMO_CAMPAIGNS.length) * 100}%` }}
            />
          </div>

        </div>

        {/* 4 Bottom Campaign Thumbnails Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 bg-stone-900 border-t border-stone-800 divide-x divide-stone-800">
          {PROMO_CAMPAIGNS.map((camp, idx) => {
            const isActive = currentIdx === idx;
            return (
              <button
                key={camp.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIdx(idx);
                }}
                className={`p-3 text-left transition-all cursor-pointer ${
                  isActive ? "bg-stone-800 text-white border-b-2 border-[#C85A32]" : "text-stone-400 hover:text-stone-200 hover:bg-stone-850"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono uppercase text-[#B08D57] font-bold">
                    0{idx + 1} • {camp.tag}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />}
                </div>
                <div className="text-xs font-bold text-white truncate mt-1">
                  {camp.title}
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
