import React from 'react';
import { LIVE_GODOWN_TICKER, TRADER_INFO } from '../data/mockData';
import { Radio, Phone, Sparkles } from 'lucide-react';

export default function LiveGodownMarquee() {
  return (
    <div className="bg-[#121210] text-[#E0DBD1] border-b border-stone-800 text-xs py-2 px-3 sm:px-6 overflow-hidden flex items-center justify-between gap-4 select-none">
      
      {/* Left Badge */}
      <div className="flex items-center gap-2 shrink-0 z-10 bg-[#121210] pr-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 hidden sm:inline">
          Live Godown Dispatch
        </span>
      </div>

      {/* Center Running Ticker */}
      <div className="flex-1 overflow-hidden relative">
        <div className="animate-marquee inline-flex items-center gap-12 font-mono text-[11px] text-stone-300">
          {/* Double array for seamless loop */}
          {[...LIVE_GODOWN_TICKER, ...LIVE_GODOWN_TICKER].map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-2 whitespace-nowrap">
              <span>{item}</span>
              <span className="text-stone-600 font-bold">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Right Quick Contact */}
      <div className="hidden lg:flex items-center gap-2 shrink-0 z-10 bg-[#121210] pl-2 text-[11px] font-mono text-stone-400">
        <span>VKI Godown Desk:</span>
        <a 
          href={`tel:${TRADER_INFO.flagshipShowroom.whatsapp}`}
          className="text-amber-300 hover:text-white font-bold transition-colors"
        >
          {TRADER_INFO.flagshipShowroom.whatsappDisplay}
        </a>
      </div>

    </div>
  );
}
