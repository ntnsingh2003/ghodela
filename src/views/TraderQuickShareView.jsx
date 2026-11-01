import React, { useState } from 'react';
import { 
  Share2, 
  Sparkles, 
  MessageSquare, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  User, 
  Phone, 
  HelpCircle,
  ShieldCheck,
  Zap,
  Grid3X3,
  Layers,
  Calculator,
  BookOpen
} from 'lucide-react';
import { TRADER_PRESETS, TRADER_INFO } from '../data/mockData';

export default function TraderQuickShareView({ onShowToast }) {
  const [selectedPreset, setSelectedPreset] = useState(TRADER_PRESETS[0]);
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customNotes, setCustomNotes] = useState('');
  const [copied, setCopied] = useState(false);

  // Compile deep link based on selected preset
  const generateDeepLink = () => {
    let url = `${window.location.origin}/?tab=${selectedPreset.view}`;
    if (selectedPreset.categoryFilter && selectedPreset.categoryFilter !== 'all') {
      url += `&category=${selectedPreset.categoryFilter}`;
    }
    if (selectedPreset.subCategoryFilter) {
      url += `&sub=${encodeURIComponent(selectedPreset.subCategoryFilter)}`;
    }
    return url;
  };

  // Compile full personalized WhatsApp text
  const generateMessage = () => {
    const greeting = customerName ? `Namaste ${customerName} ji!` : `Namaste ji!`;
    const deepLink = generateDeepLink();
    let text = `${greeting}\n\n${selectedPreset.suggestedText}\n\n👉 *Click here to explore live:* ${deepLink}`;
    if (customNotes.trim() !== '') {
      text += `\n\n_Note from BuildMart Counter: ${customNotes}_`;
    }
    text += `\n\n— *${TRADER_INFO.name}*\nCentral Godown Desk, VKI Jaipur\nCall / WhatsApp: ${TRADER_INFO.flagshipShowroom.whatsappDisplay}`;
    return text;
  };

  const handleCopyLink = () => {
    const text = generateMessage();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      if (onShowToast) {
        onShowToast({
          type: 'info',
          title: 'Direct WhatsApp Text Copied',
          message: 'Formatted message with pre-filtered showroom link copied to clipboard.'
        });
      }
    }
  };

  const handleSendToWhatsApp = () => {
    const text = generateMessage();
    const encoded = encodeURIComponent(text);
    let url = `https://wa.me/`;
    if (customerPhone.trim() !== '') {
      const cleanPhone = customerPhone.replace(/[^0-9]/g, '');
      const fullPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
      url += `${fullPhone}?text=${encoded}`;
    } else {
      url += `?text=${encoded}`;
    }
    window.open(url, '_blank');
  };

  return (
    <div className="content-container py-8 space-y-8 pb-24">
      
      {/* Header with Pitch Explainer Badge */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#C85A32] font-semibold uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Counter Salesman & Trader Productivity Tool</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight">
            Trader Quick-Share Mode
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
            Empower your showroom sales team to dispatch deep-filtered product links over WhatsApp in 5 seconds instead of sending 50MB PDFs or 50 individual photos.
          </p>
        </div>

        {/* Live Pitch Badge */}
        <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl max-w-md">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-900">
            <Zap className="w-4 h-4 text-amber-600" />
            <span>PITCH DEMO VALUE PROPOSITION:</span>
          </div>
          <p className="text-xs text-amber-950 mt-1 leading-snug">
            <em>"Bhaiya, ab customer ko 100 photos bhejkar phone hang karne ki zaroorat nahi. Bas 1-click me unke number pe filtered link jayegi!"</em>
          </p>
        </div>
      </div>

      {/* Main Form & Live Preview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Preset Selector & Customer Input (7 Cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
          
          {/* Step 1: Inquiry Preset Selector */}
          <div>
            <span className="text-[10px] font-mono uppercase text-[#C85A32] font-bold block mb-1">
              Step 1: What is the customer asking for?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {TRADER_PRESETS.map((preset) => {
                const isSelected = selectedPreset.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => setSelectedPreset(preset)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#C85A32] bg-[#FDF2EE] shadow-xs ring-1 ring-[#C85A32]'
                        : 'border-stone-200 hover:border-stone-400 bg-stone-50/50'
                    }`}
                  >
                    <span className="text-xs font-bold text-stone-900 block">
                      {preset.title}
                    </span>
                    <span className="text-[10px] font-mono text-stone-500 mt-2 block">
                      Opens: <strong>{preset.view.toUpperCase()}</strong>
                      {preset.subCategoryFilter && ` • ${preset.subCategoryFilter}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Customer Particulars */}
          <div className="pt-4 border-t border-stone-100 space-y-4">
            <span className="text-[10px] font-mono uppercase text-[#C85A32] font-bold block">
              Step 2: Customer Contact Info (Optional)
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-stone-600 mb-1">Customer / Architect Name:</label>
                <div className="relative flex items-center">
                  <User className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="e.g. Rajesh Sharma"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-stone-900 focus:outline-hidden focus:border-[#C85A32]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-600 mb-1">Customer WhatsApp Mobile:</label>
                <div className="relative flex items-center">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
                  <input
                    type="tel"
                    inputMode="numeric"
                    placeholder="e.g. 9829012345"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-stone-900 font-mono focus:outline-hidden focus:border-[#C85A32]"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-600 mb-1">Special Note / Godown Discount Offer (Optional):</label>
              <input
                type="text"
                placeholder="e.g. Ready stock in VKI godown. Additional 5% discount for 50+ boxes."
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-900 focus:outline-hidden focus:border-[#C85A32]"
              />
            </div>
          </div>

        </div>

        {/* Right: Live WhatsApp Message Simulator (5 Cols) */}
        <div className="lg:col-span-5 bg-[#0C1514] text-white p-6 sm:p-7 rounded-3xl border border-stone-800 shadow-2xl space-y-5">
          
          <div className="flex items-center justify-between border-b border-stone-800 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#128C7E] flex items-center justify-center text-white">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-white">
                  Live WhatsApp Message Preview
                </h3>
                <span className="text-[10px] font-mono text-emerald-400">
                  Ready to send via wa.me
                </span>
              </div>
            </div>

            <button
              onClick={handleCopyLink}
              className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono rounded-lg flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* WhatsApp Chat Bubble Simulation */}
          <div className="bg-[#1F2C34] p-4 rounded-2xl rounded-tl-none border border-stone-700 text-xs text-stone-200 font-mono whitespace-pre-wrap leading-relaxed shadow-lg">
            {generateMessage()}
          </div>

          {/* Target Link Verification */}
          <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 text-[11px] font-mono text-stone-400 flex items-center justify-between">
            <span className="truncate mr-2">Link: {generateDeepLink()}</span>
            <a 
              href={generateDeepLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 shrink-0"
              title="Open destination in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* 1-Click WhatsApp Trigger Action */}
          <button
            onClick={handleSendToWhatsApp}
            className="w-full py-4 px-4 bg-[#128C7E] hover:bg-[#0E7569] text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer text-sm group"
          >
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            <span>Send Direct Link on Customer's WhatsApp</span>
          </button>

          <p className="text-[11px] text-center font-mono text-stone-500">
            Opens official WhatsApp Web / Mobile Application directly with pre-filled content
          </p>

        </div>

      </div>

    </div>
  );
}
