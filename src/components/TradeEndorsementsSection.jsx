import React from 'react';
import { Quote, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TRADE_TESTIMONIALS } from '../data/mockData';

export default function TradeEndorsementsSection() {
  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-stone-200 pb-4">
        <div>
          <span className="text-[10px] font-mono uppercase text-[#C85A32] font-bold tracking-widest block">
            Architect & Contractor Network
          </span>
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-stone-900 mt-0.5">
            Trusted by Rajasthan's Premier Builders
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          <ShieldCheck className="w-4 h-4" />
          <span>Verified Trade Accounts</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TRADE_TESTIMONIALS.map((t, idx) => (
          <div 
            key={idx}
            className="luxury-card card-3d-tilt p-6 rounded-3xl flex flex-col justify-between space-y-4 border border-stone-200 shadow-2xs hover:border-[#B08D57] transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Quote className="w-8 h-8 text-[#B08D57]/40" />
                <div className="flex text-amber-500 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <h5 className="font-display font-bold text-sm text-stone-900">
                {t.name}
              </h5>
              <p className="text-[11px] font-mono text-[#C85A32] font-medium">
                {t.role} • {t.firm}
              </p>
              <span className="text-[10px] font-mono text-stone-400 block mt-1">
                Ref: {t.project}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
