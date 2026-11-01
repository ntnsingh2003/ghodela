import React from 'react';
import { Building2, Layers, Sliders, Calculator, ShoppingBag } from 'lucide-react';

export default function MobileBottomNav({ currentView, setCurrentView, cartCount, onOpenCart }) {
  const tabs = [
    { id: "home", label: "Showroom", icon: Building2 },
    { id: "catalogue", label: "Collections", icon: Layers },
    { id: "visualizer", label: "3D Studio", icon: Sliders },
    { id: "calculator", label: "Estimator", icon: Calculator },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-stone-300 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-2 py-1 pb-safe">
      <div className="flex items-center justify-around h-14">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentView === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setCurrentView(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center py-1 rounded-xl transition-all relative cursor-pointer active:scale-95 ${
                isActive ? "text-[#C85A32]" : "text-stone-500 hover:text-stone-800"
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                {tab.badge && (
                  <span className="absolute -top-1 -right-2 px-1 py-0.2 rounded-full bg-amber-500 text-stone-950 font-mono font-bold text-[7px] leading-tight animate-pulse">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] mt-1 tracking-tight ${isActive ? "font-bold text-[#C85A32]" : "font-medium"}`}>
                {tab.label}
              </span>
            </button>
          );
        })}

        {/* Estimate Cart Button in Bottom Bar */}
        <button
          onClick={onOpenCart}
          className="flex-1 flex flex-col items-center justify-center py-1 rounded-xl relative text-stone-700 hover:text-[#C85A32] cursor-pointer active:scale-95"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-[#C85A32]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2.5 px-1.5 py-0.2 bg-[#C85A32] text-white text-[9px] font-mono font-bold rounded-full shadow-xs">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold text-[#C85A32] mt-1 tracking-tight">
            Quote Cart
          </span>
        </button>
      </div>
    </nav>
  );
}
