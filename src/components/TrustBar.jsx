import React from 'react';
import { TRADER_INFO } from '../data/mockData';
import { ShieldCheck, Warehouse, MessageSquare, Sparkles } from 'lucide-react';

export default function TrustBar({ traderModeActive, setTraderModeActive, onOpenTraderShare }) {
  return (
    <div className="bg-[#181816] text-[#E5E0D8] text-[11px] py-1.5 px-3 sm:px-4 border-b border-stone-800 transition-colors">
      <div className="content-container flex items-center justify-between gap-2">
        {/* Left Trust Badges */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar py-0.5">
          <div className="flex items-center gap-1 font-mono text-[10px] sm:text-[11px] text-amber-300 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold">GSTIN:</span>
            <span className="tracking-wider">{TRADER_INFO.gstin}</span>
          </div>

          {/* Godown Live Status */}
          <div className="flex items-center gap-1.5 bg-stone-900/90 px-2 py-0.5 rounded-full border border-stone-700 shrink-0">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <Warehouse className="w-3 h-3 text-stone-400" />
            <span className="text-[10px] text-stone-200">
              VKI Godown: <span className="text-emerald-400 font-medium">Ready Stock</span>
            </span>
          </div>
        </div>

        {/* Right Actions & Trader Mode Toggle */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Direct WhatsApp Call (Desktop) */}
          <a 
            href={`https://wa.me/${TRADER_INFO.flagshipShowroom.whatsapp.replace('+', '')}?text=${encodeURIComponent("Namaste Shree Vishwakarma BuildMart, I want to inquire about bulk building materials / modular switches.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors text-[11px]"
          >
            <MessageSquare className="w-3 h-3" />
            <span>Counter: {TRADER_INFO.flagshipShowroom.whatsappDisplay}</span>
          </a>

          {/* Trader Quick-Share Mode Switch */}
          <div className="flex items-center gap-1.5 bg-stone-900 px-2 py-0.5 rounded-md border border-amber-900/50">
            <Sparkles className="w-3 h-3 text-amber-400 animate-pulse hidden sm:inline" />
            <span className="text-[10px] font-semibold tracking-wide uppercase text-amber-300">
              Trader Mode
            </span>

            <button
              onClick={() => {
                const nextState = !traderModeActive;
                setTraderModeActive(nextState);
                if (nextState && onOpenTraderShare) {
                  onOpenTraderShare();
                }
              }}
              className={`relative inline-flex h-4 w-7.5 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                traderModeActive ? 'bg-[#C85A32]' : 'bg-stone-700'
              }`}
              title="Toggle Trader Quick-Share Mode for Instant WhatsApp Customer Links"
            >
              <span
                className={`pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${
                  traderModeActive ? 'translate-x-3.5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
