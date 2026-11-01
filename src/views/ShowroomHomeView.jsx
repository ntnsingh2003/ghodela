import React, { useState } from 'react';
import { 
  Layers, 
  Sliders, 
  ArrowRight, 
  Sparkles, 
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { 
  AUTHORIZED_BRANDS, 
  SPACES_DATA, 
  PRODUCTS 
} from '../data/mockData';
import PromotionalAdShowcase from '../components/PromotionalAdShowcase';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import LandmarkProjectsSection from '../components/LandmarkProjectsSection';
import BrandLogosSection from '../components/BrandLogosSection';
import ArchitecturalVideoReel from '../components/ArchitecturalVideoReel';

export default function ShowroomHomeView({ 
  onNavigate, 
  onOpenProductSpecs
}) {
  const [activeSpaceId, setActiveSpaceId] = useState('bathroom');
  const [activeHotspot, setActiveHotspot] = useState(null);

  const currentSpace = SPACES_DATA.find(s => s.id === activeSpaceId) || SPACES_DATA[0];

  // 4 Core Architectural Categories (Photo-first, exact match to vertical)
  const CORE_VERTICALS = [
    {
      id: 'electricals',
      title: 'SWITCHES',
      subtitle: 'Crystal Glass & Smart Rockers',
      imageUrl: 'https://images.unsplash.com/photo-1585412727053-48a19eef546b?auto=format&fit=crop&w=800&q=80',
      category: 'electricals'
    },
    {
      id: 'tiles',
      title: 'SURFACES',
      subtitle: 'Italian Slabs & Glazed Vitrified',
      imageUrl: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80',
      category: 'tiles'
    },
    {
      id: 'sanitary',
      title: 'BATH CONCEPTS',
      subtitle: 'Architectural Fixtures & Vanities',
      imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
      category: 'sanitary'
    },
    {
      id: 'cement',
      title: 'STRUCTURAL',
      subtitle: 'Foundation Supplies & Civil Rake',
      imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
      category: 'cement'
    }
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* 1. CINEMATIC FULL-WIDTH VISUAL HERO (WITH LOOPING ARCHITECTURAL VIDEO) */}
      <section className="content-container pt-4 sm:pt-6">
        <div className="relative w-full h-[460px] sm:h-[560px] lg:h-[620px] rounded-3xl overflow-hidden shadow-2xl flex items-end p-6 sm:p-12 lg:p-16 border border-stone-300 group">
          
          {/* Looping Architectural Video Background with Fallback Photo */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.70] scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-luxurious-living-room-41662-large.mp4" type="video/mp4" />
          </video>

          {/* Luxury Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none" />
          
          {/* Content Overlay - Pure Visual & Minimal */}
          <div className="relative z-10 max-w-3xl space-y-4">
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-none uppercase">
              GHODELA.
            </h1>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('catalogue')}
                className="px-7 py-3.5 rounded-full bg-white hover:bg-stone-100 text-[#181816] text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xl transition-all cursor-pointer"
              >
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 text-[#C85A32]" />
              </button>

              <button
                onClick={() => onNavigate('visualizer')}
                className="px-7 py-3.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-xl"
              >
                <Sliders className="w-4 h-4 text-amber-400" />
                <span>3D Studio</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE 4 CORE VERTICALS (PHOTO-FIRST CARDS - ZERO TEXT CLUTTER) */}
      <section className="content-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CORE_VERTICALS.map((vertical) => (
            <div
              key={vertical.id}
              onClick={() => onNavigate('catalogue', { category: vertical.category })}
              className="relative h-80 sm:h-96 rounded-3xl overflow-hidden cursor-pointer group shadow-lg border border-stone-200 transition-all hover:shadow-2xl hover:border-[#C85A32]/50"
            >
              {/* Photo */}
              <img 
                src={vertical.imageUrl} 
                alt={vertical.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.75]"
              />

              {/* Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* Title Only - Pure Visual Focus */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-between text-white">
                <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight group-hover:text-amber-300 transition-colors uppercase">
                  {vertical.title}
                </h3>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#C85A32] transition-colors">
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LUXURY BRAND PARTNERS OFFICIAL LOGOS STRIP */}
      <BrandLogosSection />

      {/* 4. CINEMATIC VIDEO MOTION REELS (LIVING, SLABS, BATH, KITCHEN) */}
      <section className="content-container">
        <ArchitecturalVideoReel />
      </section>

      {/* 4. CINEMATIC TRADE ADS & FEATURED COLLECTIONS */}
      <section className="content-container">
        <PromotionalAdShowcase 
          onNavigateToCampaign={(view, params) => onNavigate(view, params)}
        />
      </section>

      {/* 5. INTERACTIVE BEFORE & AFTER SLIDER (PURE VISUAL TRANSFORMATION) */}
      <section className="content-container">
        <BeforeAfterSlider />
      </section>

      {/* 6. SPATIAL INSPIRATION CANVAS (INTERACTIVE ROOMS) */}
      <section className="content-container">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#181816] text-white border border-stone-800 shadow-2xl space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-4">
            <h2 className="font-display text-2xl sm:text-3xl font-black tracking-tight uppercase">
              SPACES
            </h2>

            {/* Space Navigation Pills */}
            <div className="flex flex-wrap gap-2">
              {SPACES_DATA.map((space) => (
                <button
                  key={space.id}
                  onClick={() => {
                    setActiveSpaceId(space.id);
                    setActiveHotspot(null);
                  }}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer uppercase tracking-wider ${
                    activeSpaceId === space.id
                      ? "bg-[#C85A32] text-white shadow-md ring-2 ring-white/20"
                      : "bg-stone-800/80 text-stone-300 hover:bg-stone-700"
                  }`}
                >
                  {space.label || space.title}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Room Canvas with Real Photo */}
          <div className="relative w-full h-80 sm:h-[480px] lg:h-[540px] rounded-3xl bg-stone-950 border border-stone-700 overflow-hidden flex items-end p-6 sm:p-10 group shadow-2xl">
            {/* Real High-Resolution Room Photo */}
            <img 
              src={currentSpace.imageUrl} 
              alt={currentSpace.title}
              key={currentSpace.id}
              className="absolute inset-0 w-full h-full object-cover brightness-[0.85] group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

            {/* Hotspot Markers - Pinpoint Accurate to Room Objects */}
            {currentSpace.hotspots.map((hs, index) => {
              const isSelected = activeHotspot && activeHotspot.title === hs.title;
              return (
                <button
                  key={index}
                  onClick={() => setActiveHotspot(isSelected ? null : hs)}
                  className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20 ${
                    isSelected ? 'scale-125 z-30' : 'hover:scale-115'
                  }`}
                  style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                  title={`${index + 1}. ${hs.title} (${hs.role})`}
                >
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      isSelected ? 'bg-amber-400' : 'bg-[#C85A32]'
                    }`} />
                    <span className={`relative inline-flex items-center justify-center rounded-full h-7 w-7 text-xs font-mono font-bold shadow-xl border-2 transition-all ${
                      isSelected
                        ? 'bg-[#C85A32] text-white border-amber-300 ring-4 ring-amber-400/50 scale-110'
                        : 'bg-[#C85A32] text-white border-white'
                    }`}>
                      {index + 1}
                    </span>
                  </span>
                </button>
              );
            })}

            {/* Active Hotspot Popover - Accurate Product Card */}
            {activeHotspot && (() => {
              const prod = PRODUCTS.find(p => p.id === activeHotspot.productId);
              const hotspotIndex = currentSpace.hotspots.findIndex(h => h.title === activeHotspot.title);

              return (
                <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-88 bg-white text-stone-900 rounded-2xl p-4 shadow-2xl border border-stone-200 z-30 animate-in fade-in slide-in-from-bottom-2 duration-200">
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#C85A32] text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                        {hotspotIndex + 1}
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">
                        {activeHotspot.role}
                      </span>
                    </div>

                    <button 
                      onClick={() => setActiveHotspot(null)}
                      className="text-stone-400 hover:text-stone-700 text-xs p-1 cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Product Info & Thumbnail */}
                  <div className="mt-3 flex items-center gap-3">
                    {prod && prod.imageUrl && (
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shrink-0">
                        <img 
                          src={prod.imageUrl} 
                          alt={activeHotspot.title} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-mono text-[#C85A32] font-bold block uppercase">
                        {activeHotspot.brand}
                      </span>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-stone-900 leading-snug line-clamp-2">
                        {activeHotspot.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 font-mono mt-0.5">
                        Finish: {activeHotspot.finish}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-stone-500">
                      {activeHotspot.sku}
                    </span>
                    <button
                      onClick={() => {
                        if (prod && onOpenProductSpecs) {
                          onOpenProductSpecs(prod);
                        }
                      }}
                      className="text-xs font-bold text-[#C85A32] hover:text-[#A44522] flex items-center gap-1 cursor-pointer bg-[#C85A32]/10 hover:bg-[#C85A32]/20 px-3 py-1 rounded-lg transition-colors"
                    >
                      <span>Inspect</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })()}

          </div>

        </div>
      </section>

      {/* 7. LANDMARK REFERENCES (STUNNING REAL ARCHITECTURAL RESIDENCES) */}
      <section className="content-container">
        <LandmarkProjectsSection 
          onExploreMaterials={() => onNavigate('catalogue')}
        />
      </section>

    </div>
  );
}
