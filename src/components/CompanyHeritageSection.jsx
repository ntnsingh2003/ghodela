import React, { useState } from 'react';
import { 
  Building2, 
  Warehouse, 
  Truck, 
  ShieldCheck, 
  Award, 
  Users, 
  Calendar, 
  ArrowRight, 
  CheckCircle2,
  ExternalLink,
  MapPin,
  Clock,
  Phone
} from 'lucide-react';
import { COMPANY_HERITAGE, TRADER_INFO } from '../data/mockData';

export default function CompanyHeritageSection() {
  const [activeMilestoneIdx, setActiveMilestoneIdx] = useState(COMPANY_HERITAGE.milestones.length - 1);

  return (
    <div className="w-full space-y-12">
      
      {/* 1. Header with Heritage Badge */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#C85A32] font-semibold uppercase mb-1">
            <Award className="w-4 h-4" />
            <span>28-Year Legacy of Architectural Trust (1998 – 2026)</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-stone-900 tracking-tight">
            The Shree Vishwakarma Heritage
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
            From our founding cement yard in Vishwakarma Industrial Area (VKI) to Rajasthan's premier direct-depot trading conglomerate for luxury surfaces, modular electricals, and heavy civil infrastructure.
          </p>
        </div>

        <div className="bg-[#FAF7F2] border border-[#E8E2D7] p-3 rounded-2xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#C85A32] text-white flex items-center justify-center font-bold font-display text-lg shadow-sm">
            28
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Years of Authority</span>
            <span className="font-display font-bold text-xs text-stone-900">Direct Factory Partner</span>
          </div>
        </div>
      </div>

      {/* 2. Key Infrastructure Metrics Strip (3D Tilt Cards) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {COMPANY_HERITAGE.infrastructureStats.map((stat, i) => (
          <div 
            key={i} 
            className="luxury-card card-3d-tilt p-4 rounded-2xl flex flex-col justify-between border border-stone-200 shadow-2xs hover:border-[#C85A32] transition-all"
          >
            <span className="text-[10px] font-mono uppercase text-stone-500 font-semibold leading-tight">
              {stat.label}
            </span>
            <div className="my-2">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-stone-900 tracking-tight">
                {stat.value}
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#C85A32] font-semibold leading-tight">
              {stat.unit}
            </span>
          </div>
        ))}
      </div>

      {/* 3. Leadership & Godown Infrastructure Split Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Founder Story & Leadership Voice (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="luxury-card p-6 sm:p-8 rounded-3xl space-y-5 border border-stone-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-300 flex items-center justify-center text-stone-800 font-display font-bold text-lg">
                RS
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-stone-900">
                  {COMPANY_HERITAGE.managingDirector}
                </h4>
                <p className="text-xs font-mono text-[#C85A32] font-semibold">
                  Managing Director • Shree Vishwakarma BuildMart
                </p>
              </div>
            </div>

            <blockquote className="text-xs sm:text-sm text-stone-700 italic leading-relaxed border-l-2 border-[#C85A32] pl-4">
              "When my father, Shri Rameshwar Sharma, laid the foundation stone of our VKI godown in 1998, we promised our clients three uncompromised principles: <strong>100% factory-genuine stock, zero weighbridge cheating, and immediate dispatch to the contractor's site</strong>. Today, with this digital showroom and instant WhatsApp quotation system, we bring that same transparency directly to your smartphone screen."
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-stone-600">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Central VKI Godown: 35,000 Sq.Ft</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tonk Road Experience Centre</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Logistics Fleet & Warehouse Photo (5 Cols) */}
        <div className="lg:col-span-5">
          <div className="luxury-card rounded-3xl overflow-hidden border-2 border-stone-300 shadow-xl group relative">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80" 
                alt="Vishwakarma Central Warehouse & Logistics Racks"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-amber-300 text-[10px] font-mono px-3 py-1 rounded-full border border-amber-500/30 font-bold uppercase">
                Central Logistics Hub VKI
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold mb-1">
                  <Truck className="w-3.5 h-3.5" />
                  <span>14 Hydraulic Delivery Vehicles in Fleet</span>
                </div>
                <p className="text-xs text-stone-200 leading-snug">
                  Equipped with heavy hydra cranes and automatic tippers for precision offloading at narrow Jaipur site entrances.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 4. Interactive Heritage Timeline (1998 - 2026) */}
      <div className="luxury-card p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <span className="text-[10px] font-mono uppercase text-[#C85A32] font-bold tracking-wider">
            Historic Growth Milestones
          </span>
          <span className="text-xs font-mono text-stone-500">
            Click year to explore milestone:
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {COMPANY_HERITAGE.milestones.map((m, idx) => {
            const isSelected = activeMilestoneIdx === idx;
            return (
              <button
                key={m.year}
                onClick={() => setActiveMilestoneIdx(idx)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#181816] text-white border-[#181816] shadow-md scale-102"
                    : "bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-400"
                }`}
              >
                <div className={`font-mono text-xs font-bold ${isSelected ? 'text-amber-400' : 'text-[#C85A32]'}`}>
                  {m.year}
                </div>
                <div className="font-display font-bold text-xs truncate mt-1">
                  {m.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Milestone Detail Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D7] animate-in fade-in duration-200">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded bg-[#C85A32] text-white font-mono text-[10px] font-bold">
              {COMPANY_HERITAGE.milestones[activeMilestoneIdx].year}
            </span>
            <h4 className="font-display font-bold text-sm sm:text-base text-stone-900">
              {COMPANY_HERITAGE.milestones[activeMilestoneIdx].title}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-1">
            {COMPANY_HERITAGE.milestones[activeMilestoneIdx].description}
          </p>
        </div>
      </div>

    </div>
  );
}
