import React from 'react';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const icons = {
    success: CheckCircle2,
    info: Info,
    warning: AlertTriangle
  };

  const Icon = icons[toast.type] || CheckCircle2;

  return (
    <div className="fixed bottom-20 lg:bottom-8 right-4 lg:right-8 z-50 max-w-md animate-slide-up shadow-2xl">
      <div className="bg-[#181816] text-white p-4 rounded-xl border border-stone-700 flex items-start gap-3 backdrop-blur-md">
        <div className="mt-0.5">
          {toast.type === "success" && <Icon className="w-5 h-5 text-emerald-400" />}
          {toast.type === "info" && <Icon className="w-5 h-5 text-amber-400" />}
          {toast.type === "warning" && <Icon className="w-5 h-5 text-rose-400" />}
        </div>
        <div className="flex-1">
          <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-stone-300">
            {toast.title || "BuildMart Notification"}
          </h4>
          <p className="text-sm font-medium text-stone-100 mt-0.5">
            {toast.message}
          </p>
        </div>
        <button 
          onClick={onClose}
          className="text-stone-400 hover:text-white p-1 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
