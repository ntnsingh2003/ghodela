import React, { useState } from 'react';
import { 
  Building2, 
  Sparkles, 
  ArrowRight, 
  Sliders, 
  Calculator, 
  MessageSquare, 
  Share2, 
  CheckCircle2, 
  ShieldCheck, 
  Warehouse, 
  Truck, 
  Lock, 
  Zap, 
  ChevronRight,
  Eye,
  Check,
  Grid3X3,
  Layers,
  Phone,
  Award,
  Clock,
  MapPin,
  Flame,
  Briefcase
} from 'lucide-react';
import { TRADER_INFO, AUTHORIZED_BRANDS } from '../data/mockData';
import LiveGodownMarquee from '../components/LiveGodownMarquee';
import PromotionalAdShowcase from '../components/PromotionalAdShowcase';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import CompanyHeritageSection from '../components/CompanyHeritageSection';
import LandmarkProjectsSection from '../components/LandmarkProjectsSection';
import TradeEndorsementsSection from '../components/TradeEndorsementsSection';

export default function LandingPageView({ onOpenLogin, onQuickDemoLogin }) {
  // Mini interactive switch state on the hero
  const [miniSwitch1, setMiniSwitch1] = useState(true);
  const [miniSwitch2, setMiniSwitch2] = useState(false);
  const [activeWallBg, setActiveWallBg] = useState('#F5EFEB');

  const wallOptions = [
    { id: 'cream', name: 'Warm Cream', color: '#F5EFEB' },
    { id: 'terracotta', name: 'Terracotta', color: '#B8583B' },
    { id: 'charcoal', name: 'Obsidian Charcoal', color: '#272624' },
    { id: 'marble', name: 'White Marble', color: '#EFEFEF' }
  ];

  // Realistic mechanical audio feedback
  const playClickSound = (pitch = 800) => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(pitch, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch (e) {}
  };

  const handleToggleSwitch1 = () => {
    playClickSound(miniSwitch1 ? 550 : 850);
    setMiniSwitch1(!miniSwitch1);
  };

  const handleToggleSwitch2 = () => {
    playClickSound(miniSwitch2 ? 550 : 850);
    setMiniSwitch2(!miniSwitch2);
  };

  return (
    <div className="min-h-screen w-full bg-[#F6F4F0] text-[#181816] flex flex-col justify-between selection:bg-[#C85A32] selection:text-white">
      
      {/* 1. REAL-TIME GODOWN DISPATCH MARQUEE TICKER (TOP RUNNING AD & STATUS) */}
      <LiveGodownMarquee />

      {/* 2. TOP ARCHITECTURAL HEADER (FULL WIDTH) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2DDD5] shadow-2xs w-full">
        <div className="content-container h-18 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Brand Monogram & Prestige Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#C85A32] text-white flex items-center justify-center font-bold shadow-md shrink-0 font-display text-lg">
              SV
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-base sm:text-lg xl:text-xl tracking-tight text-stone-900">
                  SHREE VISHWAKARMA
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#B08D57]/20 text-[#8F6A33] rounded-full font-bold">
                  EST. 1998
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-medium text-stone-500">
                BuildMart & Infra <span className="text-stone-300">|</span> <span className="text-[#C85A32]">Architectural Experience Depot</span>
              </p>
            </div>
          </div>

          {/* Quick Access Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onQuickDemoLogin('Trader / Counter Salesman')}
              className="px-3.5 sm:px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 cursor-pointer border border-stone-200"
            >
              <Zap className="w-4 h-4 text-[#C85A32]" />
              <span className="hidden sm:inline">1-Click</span> Demo Access
            </button>

            <button
              onClick={onOpenLogin}
              className="px-4 sm:px-6 py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#A44522] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              <span>Login / Portal</span>
            </button>
          </div>

        </div>
      </header>

      {/* 3. HERO SECTION (EDITORIAL ARCHITECTURAL AUTHORITY + 3D LIVE SWITCHBOARD) */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-20 w-full border-b border-stone-200">
        <div className="content-container space-y-12 sm:space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
            
            {/* Left Column: Architectural Luxury Brand Pitch (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Prestige Depot Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/25 text-[#A44522] text-xs font-mono font-semibold">
                <Award className="w-4 h-4 text-[#C85A32]" />
                <span>Rajasthan's Premier Direct Factory Depot & Architectural Trading House</span>
              </div>

              {/* Authority Headline */}
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl xl:text-6xl text-[#181816] tracking-tight leading-[1.12]">
                From Foundation Cement <br />
                <span className="text-[#C85A32] italic font-editorial">to Designer Switches</span> — <br />
                Explore Our Complete Digital Depot.
              </h1>

              <p className="text-stone-600 text-sm sm:text-lg leading-relaxed max-w-3xl">
                Serving Rajasthan's leading architects, building contractors, and luxury villa developers since 1998. Explore live 3D switchboards against realistic wall paints, calculate exact tile boxes and cement loads, and receive instant wholesale quotation slips straight to WhatsApp.
              </p>

              {/* Main Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => onQuickDemoLogin('Trader / Counter Salesman')}
                  className="px-8 py-4 rounded-2xl bg-[#C85A32] hover:bg-[#A44522] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl transition-all cursor-pointer group"
                >
                  <Zap className="w-5 h-5 text-amber-300" />
                  <span>Enter Digital Showroom (1-Click Instant Demo)</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={onOpenLogin}
                  className="px-6 py-4 rounded-2xl bg-white hover:bg-stone-100 text-stone-800 border-2 border-stone-300 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <Lock className="w-4 h-4 text-stone-500" />
                  <span>Trade Account Login</span>
                </button>
              </div>

              {/* Trust & Dispatch Indicators */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-stone-500 pt-3 border-t border-stone-200">
                <span className="flex items-center gap-1.5 text-stone-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  GSTIN: {TRADER_INFO.gstin}
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5 text-stone-700">
                  <Warehouse className="w-4 h-4 text-[#B08D57]" />
                  35,000+ Sq.Ft VKI Ready Godown
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5 text-stone-700">
                  <Truck className="w-4 h-4 text-blue-600" />
                  Same-Day Hydra & Tipper Fleet
                </span>
              </div>

            </div>

            {/* Right Column: 3D Interactive Switchboard & Wall Visualizer Teaser (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="luxury-card card-3d-tilt rounded-3xl p-5 sm:p-7 space-y-5 border-2 border-stone-300 shadow-xl relative">
                
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#C85A32] font-bold block">
                      3D Tactile Visualizer Studio
                    </span>
                    <h3 className="font-display font-bold text-sm sm:text-base text-stone-900 mt-0.5">
                      Modular Switchboard on Live Wall
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Interactive 3D
                  </span>
                </div>

                {/* Wall Texture Switcher */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-stone-500">Wall Paint:</span>
                  <div className="flex items-center gap-2">
                    {wallOptions.map((w) => (
                      <button
                        key={w.id}
                        onClick={() => setActiveWallBg(w.color)}
                        className={`w-6 h-6 rounded-full border transition-all cursor-pointer ${
                          activeWallBg === w.color ? 'ring-2 ring-[#C85A32] scale-110' : 'border-stone-300'
                        }`}
                        style={{ backgroundColor: w.color }}
                        title={w.name}
                      />
                    ))}
                  </div>
                </div>

                {/* 3D Switchboard Plate */}
                <div 
                  className="w-full h-48 sm:h-56 rounded-2xl border-2 border-stone-300 flex items-center justify-center p-4 relative shadow-inner transition-colors duration-300"
                  style={{ backgroundColor: activeWallBg }}
                >
                  <div className="w-full max-w-xs sm:max-w-sm h-30 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-925 to-stone-950 p-3 flex items-center justify-between shadow-2xl border border-white/20">
                    
                    {/* Switch Rocker 1 (Clickable) */}
                    <div
                      onClick={handleToggleSwitch1}
                      className={`flex-1 h-22 rounded-xl cursor-pointer transition-all duration-150 flex flex-col justify-between p-2 select-none mx-1 ${
                        miniSwitch1 ? 'bg-stone-800 shadow-inner translate-y-0.5' : 'bg-stone-700 shadow-lg -translate-y-0.5 hover:bg-stone-650'
                      }`}
                      style={{ borderTop: miniSwitch1 ? '1px solid #111' : '1px solid rgba(255,255,255,0.3)' }}
                    >
                      <div className={`w-2.5 h-2.5 rounded-full mx-auto transition-all ${miniSwitch1 ? 'bg-emerald-400 shadow-[0_0_12px_#34D399]' : 'bg-stone-500 opacity-40'}`} />
                      <span className="text-[8px] font-mono text-center text-stone-300 font-bold">
                        {miniSwitch1 ? 'LIGHT ON' : 'OFF'}
                      </span>
                    </div>

                    {/* Switch Rocker 2 (Clickable) */}
                    <div
                      onClick={handleToggleSwitch2}
                      className={`flex-1 h-22 rounded-xl cursor-pointer transition-all duration-150 flex flex-col justify-between p-2 select-none mx-1 ${
                        miniSwitch2 ? 'bg-stone-800 shadow-inner translate-y-0.5' : 'bg-stone-700 shadow-lg -translate-y-0.5 hover:bg-stone-650'
                      }`}
                      style={{ borderTop: miniSwitch2 ? '1px solid #111' : '1px solid rgba(255,255,255,0.3)' }}
                    >
                      <div className={`w-2.5 h-2.5 rounded-full mx-auto transition-all ${miniSwitch2 ? 'bg-emerald-400 shadow-[0_0_12px_#34D399]' : 'bg-stone-500 opacity-40'}`} />
                      <span className="text-[8px] font-mono text-center text-stone-300 font-bold">
                        {miniSwitch2 ? 'FAN ON' : 'OFF'}
                      </span>
                    </div>

                    {/* 5-Pin Safety Socket */}
                    <div className="w-20 sm:w-24 h-22 bg-stone-800 rounded-xl border border-stone-700 flex flex-col items-center justify-center p-1.5 shadow-inner mx-1">
                      <div className="w-3.5 h-3.5 rounded-full bg-stone-950 border border-stone-600 mb-1" />
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-stone-950 border border-stone-600" />
                        <div className="w-2 h-2 rounded-full bg-stone-950 border border-stone-600" />
                      </div>
                      <span className="text-[6px] font-mono text-stone-400 mt-1 font-bold">LEGRAND 16A</span>
                    </div>

                  </div>

                  <div className="absolute bottom-2 left-4 text-[10px] font-mono text-stone-700 bg-white/90 px-2.5 py-0.5 rounded shadow-xs">
                    ⚡ Click rockers: Physical sound & LED feedback active
                  </div>
                </div>

                {/* Direct Launch to Studio Button */}
                <button
                  onClick={() => onQuickDemoLogin('Trader / Counter Salesman', 'visualizer')}
                  className="w-full py-3.5 rounded-xl bg-[#181816] hover:bg-stone-800 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md"
                >
                  <Sliders className="w-4 h-4 text-amber-400" />
                  <span>Launch Full 3D Switchboard & Tile Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. PROMOTIONAL TRADE CAMPAIGNS & CINEMATIC PHOTO/VIDEO REEL */}
      <section className="py-12 sm:py-16 w-full bg-[#EFECE6] border-b border-stone-300">
        <div className="content-container">
          <PromotionalAdShowcase 
            onNavigateToCampaign={(view, params) => onQuickDemoLogin('Trader / Counter Salesman', view)}
          />
        </div>
      </section>

      {/* 5. INTERACTIVE BEFORE / AFTER ARCHITECTURAL TRANSFORMATION SLIDER */}
      <section className="py-12 sm:py-16 w-full border-b border-stone-200">
        <div className="content-container">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* 6. THE 4 PILLARS (CORE VERTICALS - CLICKABLE 3D CARDS) */}
      <section className="py-12 sm:py-16 w-full border-b border-stone-200">
        <div className="content-container space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#C85A32] font-bold block tracking-wider">
                Full-Stack Digital Showroom
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-stone-900 mt-1">
                Explore The 4 Architectural Pillars
              </h2>
            </div>
            <span className="text-xs font-mono text-stone-500">
              1-Click test any pillar in live demo mode:
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            
            {/* Pillar 1 */}
            <div 
              onClick={() => onQuickDemoLogin('Trader / Counter Salesman', 'visualizer')}
              className="luxury-card card-3d-tilt p-6 rounded-3xl space-y-3 cursor-pointer group hover:border-[#C85A32] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#C85A32]/10 text-[#C85A32] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <Sliders className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-base text-stone-900 group-hover:text-[#C85A32] transition-colors">
                  Switchboard & Tile Studio
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Interactive wall canvas with beveled glass plates, metallic rockers, fan regulators, and GVT herringbone layouts.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center text-xs font-bold text-[#C85A32] gap-1 group-hover:translate-x-1 transition-transform">
                <span>Open 3D Visualizer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Pillar 2 */}
            <div 
              onClick={() => onQuickDemoLogin('Trader / Counter Salesman', 'calculator')}
              className="luxury-card card-3d-tilt p-6 rounded-3xl space-y-3 cursor-pointer group hover:border-[#B08D57] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#B08D57]/15 text-[#8F6A33] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <Calculator className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-base text-stone-900 group-hover:text-[#B08D57] transition-colors">
                  Site BOQ Calculator
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Input room length & width to compute exact tile boxes, adhesive bags, BHK electrical fixtures, and Banas sand truckloads.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center text-xs font-bold text-[#8F6A33] gap-1 group-hover:translate-x-1 transition-transform">
                <span>Calculate Quantities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Pillar 3 */}
            <div 
              onClick={() => onQuickDemoLogin('Trader / Counter Salesman', 'home')}
              className="luxury-card card-3d-tilt p-6 rounded-3xl space-y-3 cursor-pointer group hover:border-[#128C7E] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#128C7E]/10 text-[#128C7E] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-base text-stone-900 group-hover:text-[#128C7E] transition-colors">
                  1-Click WhatsApp Quote
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Generates clean itemized estimate lines with customer profile, delivery address, and official printable letterhead quotation.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center text-xs font-bold text-[#128C7E] gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore Estimate Cart</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Pillar 4 */}
            <div 
              onClick={() => onQuickDemoLogin('Trader / Counter Salesman', 'tradershare')}
              className="luxury-card card-3d-tilt p-6 rounded-3xl space-y-3 cursor-pointer group hover:border-stone-900 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <Share2 className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-base text-stone-900 group-hover:text-stone-950 transition-colors">
                  Trader Quick-Share
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Empower showroom salesmen to send pre-filtered catalogue links to customer numbers in 5 seconds instead of 50MB PDFs.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 flex items-center text-xs font-bold text-stone-900 gap-1 group-hover:translate-x-1 transition-transform">
                <span>Open Quick-Share Mode</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. THE VISHWAKARMA HERITAGE & INFRASTRUCTURE STORY */}
      <section className="py-14 sm:py-20 w-full border-b border-stone-200">
        <div className="content-container">
          <CompanyHeritageSection />
        </div>
      </section>

      {/* 8. ARCHITECTURAL LANDMARK PROJECTS (PROOF OF WORK) */}
      <section className="py-14 sm:py-20 w-full bg-[#FAF7F2] border-b border-stone-200">
        <div className="content-container">
          <LandmarkProjectsSection 
            onExploreMaterials={() => onQuickDemoLogin('Trader / Counter Salesman', 'catalogue')}
          />
        </div>
      </section>

      {/* 9. AUTHORIZED BRAND PARTNERS STRIP */}
      <section className="py-12 w-full bg-white border-b border-stone-200">
        <div className="content-container space-y-4 text-center">
          <span className="text-[10px] font-mono uppercase text-stone-400 font-bold tracking-widest block">
            Authorized Wholesale Direct-Depo Partner For India's Premier Brands
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-display font-bold text-stone-700">
            {AUTHORIZED_BRANDS.map((b, i) => (
              <div key={i} className="flex items-center gap-2 group cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]/40 group-hover:bg-[#C85A32] transition-colors" />
                <span className="hover:text-[#C85A32] transition-colors">{b.name}</span>
                <span className="text-[10px] font-mono text-stone-400">({b.origin})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ARCHITECT & BUILDER NETWORK TESTIMONIALS */}
      <section className="py-14 sm:py-20 w-full border-b border-stone-200">
        <div className="content-container">
          <TradeEndorsementsSection />
        </div>
      </section>

      {/* 11. BOTTOM PITCH CONVERSION BANNER */}
      <section className="py-12 sm:py-16 w-full">
        <div className="content-container">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#181816] text-white text-center space-y-6 shadow-2xl relative overflow-hidden w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C85A32]/30 via-transparent to-[#B08D57]/30 pointer-events-none" />
            <span className="px-3 py-1 rounded-full bg-white/10 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider inline-block">
              Experience Centre & Logistics Depot
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-5xl text-white">
              Step Inside Rajasthan's Most Advanced Building Material Depot
            </h2>
            <p className="text-xs sm:text-base text-stone-300 max-w-2xl mx-auto">
              Ready to explore live godown stock, configure tactile modular switches, and send structured quotation requests?
            </p>
            <div className="pt-2">
              <button
                onClick={() => onQuickDemoLogin('Trader / Counter Salesman')}
                className="px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-[#C85A32] hover:bg-[#A44522] text-white font-bold text-sm sm:text-base inline-flex items-center gap-3 shadow-2xl transition-all cursor-pointer group"
              >
                <Zap className="w-5 h-5 text-amber-300" />
                <span>Launch Complete Prototype Demo Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 12. ARCHITECTURAL FOOTER */}
      <footer className="bg-white border-t border-stone-200 py-10 px-4 text-xs font-mono text-stone-600 w-full">
        <div className="content-container grid grid-cols-1 md:grid-cols-3 gap-6 text-left pb-6 border-b border-stone-200">
          <div>
            <span className="font-display font-bold text-stone-900 text-sm block mb-1">
              {TRADER_INFO.name}
            </span>
            <p className="text-[11px] text-stone-500 leading-relaxed">
              {TRADER_INFO.legalEntity} • GSTIN: {TRADER_INFO.gstin}
            </p>
          </div>
          <div>
            <span className="font-mono font-bold text-stone-900 uppercase text-[11px] block mb-1">
              Central Logistics Depot:
            </span>
            <p className="text-[11px] text-stone-500 leading-relaxed">
              {TRADER_INFO.centralGodown.address}
            </p>
          </div>
          <div>
            <span className="font-mono font-bold text-stone-900 uppercase text-[11px] block mb-1">
              Flagship Studio:
            </span>
            <p className="text-[11px] text-stone-500 leading-relaxed">
              {TRADER_INFO.flagshipShowroom.address} • Phone: {TRADER_INFO.flagshipShowroom.whatsappDisplay}
            </p>
          </div>
        </div>
        <div className="content-container pt-4 text-center text-[11px] text-stone-400">
          © 2026 {TRADER_INFO.legalEntity}. All architectural brand trademarks (Havells, Legrand, Kajaria, Jaquar, UltraTech) belong to their respective corporations.
        </div>
      </footer>

    </div>
  );
}
