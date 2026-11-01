import React, { useState } from 'react';
import { 
  BookOpen, 
  Share2, 
  Eye, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Sparkles, 
  Check, 
  ShoppingBag, 
  FileDown, 
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { DIGITAL_LOOKBOOKS, PRODUCTS, TRADER_INFO } from '../data/mockData';
import ProductVisual from '../components/ProductVisual';

export default function LookbooksView({ onAddToCart, onShowToast, onNavigate }) {
  const [activeLookbook, setActiveLookbook] = useState(null); // Active modal lookbook
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleOpenLookbook = (lb) => {
    setActiveLookbook(lb);
    setCurrentSlideIndex(0);
  };

  const handleCopyWhatsAppLink = (lb) => {
    const deepLink = `${window.location.origin}/?tab=lookbooks&id=${lb.id}`;
    const fullText = `${lb.directShareMessage}\n\n👉 *View Online Catalog:* ${deepLink}\n\nGhodela BuildMart • Direct Godown Dispatch`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullText);
      if (onShowToast) {
        onShowToast({
          type: "info",
          title: "WhatsApp Share Link Ready",
          message: `Direct link and message for '${lb.title}' copied to clipboard!`
        });
      }
    }
  };

  const handleOpenDirectWhatsApp = (lb) => {
    const deepLink = `${window.location.origin}/?tab=lookbooks&id=${lb.id}`;
    const fullText = `${lb.directShareMessage}\n\n👉 *View Online Catalog:* ${deepLink}\n\nGhodela BuildMart`;
    const url = `https://wa.me/?text=${encodeURIComponent(fullText)}`;
    window.open(url, '_blank');
  };

  const handleAddSlideProductToCart = (productId) => {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    onAddToCart({
      product: prod,
      quantity: 1,
      finish: prod.finishes && prod.finishes[0] ? prod.finishes[0].name : "Standard",
      unit: prod.unit
    });

    if (onShowToast) {
      onShowToast({
        type: "success",
        title: "Added to Estimate",
        message: `${prod.name} from Lookbook added to your quotation cart.`
      });
    }
  };

  return (
    <div className="content-container py-8 space-y-8 pb-24">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-4">
        <div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight">
            INSPIRATIONS.
          </h1>
        </div>
      </div>

      {/* Lookbooks Grid (Pure Visual Magazine Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {DIGITAL_LOOKBOOKS.map((lb) => {
          const coverImg = {
            'lookbook-switches': 'https://images.unsplash.com/photo-1585412727053-48a19eef546b?auto=format&fit=crop&w=1200&q=80',
            'lookbook-tiles': 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
            'lookbook-sanitary': 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
            'lookbook-civil': 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80'
          }[lb.id] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';

          return (
            <div
              key={lb.id}
              onClick={() => handleOpenLookbook(lb)}
              className="luxury-card rounded-3xl overflow-hidden relative h-96 sm:h-[420px] cursor-pointer group shadow-xl border border-stone-200 hover:border-[#C85A32] transition-all"
            >
              {/* Full-Bleed High-Res Cover Photo */}
              <img 
                src={coverImg} 
                alt={lb.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.70]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Tag */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/90 text-stone-900 font-bold uppercase backdrop-blur-xs">
                  {lb.coverTag}
                </span>
                <span className="text-xs font-mono text-white/90 bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                  {lb.pagesCount} Pages
                </span>
              </div>

              {/* Bottom Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-10 text-white space-y-4">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white group-hover:text-amber-200 transition-colors uppercase leading-tight">
                  {lb.title}
                </h3>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenLookbook(lb);
                    }}
                    className="px-6 py-2.5 rounded-full bg-white text-[#181816] text-xs font-bold flex items-center gap-2 hover:bg-stone-200 transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-[#C85A32]" />
                    <span>View</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenDirectWhatsApp(lb);
                    }}
                    className="px-5 py-2.5 rounded-full bg-[#128C7E] text-white text-xs font-bold flex items-center gap-2 hover:bg-[#0E6D62] transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- INTERACTIVE DIGITAL LOOKBOOK MODAL (SLIDE-FLIP DRAWER) --- */}
      {activeLookbook && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/85 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full border border-stone-300 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col justify-between max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-stone-100 border-b border-stone-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-200 text-stone-700 font-bold uppercase">
                  {activeLookbook.coverTag} • Page {currentSlideIndex + 1} of {activeLookbook.slides.length}
                </span>
                <h3 className="font-display font-bold text-base text-stone-900 mt-0.5">
                  {activeLookbook.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyWhatsAppLink(activeLookbook)}
                  className="px-3 py-1.5 border border-stone-300 hover:border-stone-400 bg-white text-stone-700 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Share This Page</span>
                </button>
                <button
                  onClick={() => setActiveLookbook(null)}
                  className="p-1.5 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Slide Body */}
            {(() => {
              const currentSlide = activeLookbook.slides[currentSlideIndex];
              const associatedProduct = PRODUCTS.find(p => p.id === currentSlide.associatedItem);

              return (
                <div className="p-6 sm:p-8 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  
                  {/* Left: Product Visual Highlight */}
                  <div className="space-y-4">
                    {associatedProduct && (
                      <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-lg">
                        <ProductVisual 
                          product={associatedProduct} 
                          size="lg"
                          interactive={associatedProduct.category === "electricals"}
                        />
                      </div>
                    )}
                    <div className="text-center">
                      <span className="text-xs font-mono text-stone-500">
                        High-Definition Live Godown Specimen • Guaranteed In-Stock
                      </span>
                    </div>
                  </div>

                  {/* Right: Slide Editorial Text & Quote Actions */}
                  <div className="space-y-5">
                    <div>
                      <span className="text-xs font-mono text-[#C85A32] font-bold uppercase tracking-wider">
                        {currentSlide.title}
                      </span>
                      <h4 className="font-display font-bold text-2xl text-stone-900 mt-1">
                        {currentSlide.highlight}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                        {currentSlide.notes}
                      </p>
                    </div>

                    {/* Associated Product Card Details */}
                    {associatedProduct && (
                      <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-xs font-bold text-stone-900 block">{associatedProduct.name}</span>
                            <span className="text-[11px] font-mono text-stone-500">{associatedProduct.brand} • SKU: {associatedProduct.sku}</span>
                          </div>
                          <span className="text-xs font-mono font-bold text-[#C85A32]">
                            {associatedProduct.rateEstimateRange}
                          </span>
                        </div>

                        <button
                          onClick={() => handleAddSlideProductToCart(associatedProduct.id)}
                          className="w-full py-2.5 px-4 bg-[#C85A32] hover:bg-[#A44522] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add This Item to Estimate Cart</span>
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              );
            })()}

            {/* Modal Navigation Footer */}
            <div className="p-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between">
              <button
                disabled={currentSlideIndex === 0}
                onClick={() => setCurrentSlideIndex(Math.max(0, currentSlideIndex - 1))}
                className="px-4 py-2 border border-stone-300 rounded-xl text-xs font-mono font-semibold flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-200 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Page</span>
              </button>

              <div className="flex gap-1.5">
                {activeLookbook.slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlideIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentSlideIndex === i ? 'bg-[#C85A32] w-6' : 'bg-stone-300 hover:bg-stone-400'
                    }`}
                  />
                ))}
              </div>

              <button
                disabled={currentSlideIndex === activeLookbook.slides.length - 1}
                onClick={() => setCurrentSlideIndex(Math.min(activeLookbook.slides.length - 1, currentSlideIndex + 1))}
                className="px-4 py-2 border border-stone-300 rounded-xl text-xs font-mono font-semibold flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-200 transition-colors"
              >
                <span>Next Page</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
