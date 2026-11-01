import React, { useState } from 'react';
import { X, Check, ShieldCheck, Share2, Plus, Minus, ShoppingBag, MessageSquare, ExternalLink } from 'lucide-react';
import ProductVisual from './ProductVisual';
import { TRADER_INFO } from '../data/mockData';

export default function ProductSpecsModal({ product, onClose, onAddToCart, onShowToast }) {
  if (!product) return null;

  const [selectedFinish, setSelectedFinish] = useState(
    product.finishes && product.finishes.length > 0 ? product.finishes[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const handleAddToCart = () => {
    onAddToCart({
      product,
      quantity,
      finish: selectedFinish ? selectedFinish.name : "Standard",
      unit: product.unit
    });
    if (onShowToast) {
      onShowToast({
        type: "success",
        title: "Added to Estimate",
        message: `${quantity} ${product.unit} of ${product.name} (${selectedFinish ? selectedFinish.name : 'Standard'}) added to your quote.`
      });
    }
    onClose();
  };

  const handleShareWhatsApp = () => {
    const text = `Namaste! Check out this item from Ghodela:\n\n*${product.name}*\nBrand: ${product.brand}\nSKU: ${product.sku}\nSelected Finish: ${selectedFinish ? selectedFinish.name : 'Standard'}\nSpecs: ${product.dimensionsUnit}\n\nView live interactive preview on our digital showroom: ${window.location.origin}/?tab=catalogue&product=${product.id}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleCopyLink = () => {
    const link = `${window.location.origin}/?tab=catalogue&product=${product.id}`;
    navigator.clipboard.writeText(link);
    if (onShowToast) {
      onShowToast({
        type: "info",
        title: "Link Copied",
        message: `Direct link to ${product.sku} copied to clipboard.`
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/80 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4">
      <div className="bg-white rounded-3xl max-w-3xl w-full border border-stone-300 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-3.5 sm:p-6 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono px-2 py-0.5 bg-stone-200 text-stone-800 rounded font-semibold">
              SKU: {product.sku}
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-[#C85A32] font-semibold uppercase">
              {product.brand}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-3.5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-h-[82vh] overflow-y-auto">
          
          {/* Left: Product Visual + Finish Dots */}
          <div>
            <div className="rounded-xl overflow-hidden border border-stone-300 shadow-sm">
              <ProductVisual 
                product={product} 
                activeFinish={selectedFinish} 
                size="lg"
                interactive={product.category === "electricals"}
                isSwitchOn={isSwitchOn}
                onToggleSwitch={() => setIsSwitchOn(!isSwitchOn)}
              />
            </div>

            {/* Finish / Color Dot Selector */}
            {product.finishes && product.finishes.length > 0 && (
              <div className="mt-4 p-3 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-xs font-mono text-stone-600 uppercase block mb-2 font-medium">
                  Available Architectural Finishes:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.finishes.map((f, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedFinish(f)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs transition-all ${
                        selectedFinish && selectedFinish.name === f.name
                          ? 'border-[#C85A32] bg-white text-[#C85A32] font-semibold shadow-xs ring-1 ring-[#C85A32]'
                          : 'border-stone-200 bg-white/70 text-stone-700 hover:border-stone-400'
                      }`}
                    >
                      <span 
                        className="w-3.5 h-3.5 rounded-full border border-stone-400 shrink-0" 
                        style={{ backgroundColor: f.colorCode || '#888' }} 
                      />
                      <span>{f.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Wholesale Guidance Rate */}
            <div className="mt-4 p-3 bg-[#FDF2EE] border border-[#F2C9BC] rounded-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#A44522] block font-bold">
                  Wholesale Guidance Rate
                </span>
                <span className="text-base font-bold text-[#181816]">
                  {product.rateEstimateRange}
                </span>
              </div>
              <span className="text-[10px] font-mono text-stone-500 bg-white/80 px-2 py-1 rounded border border-stone-200">
                Direct Godown Dispatch
              </span>
            </div>
          </div>

          {/* Right: Detailed Technical Specifications */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-stone-900 leading-snug">
                {product.name}
              </h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                {product.shortDesc}
              </p>

              {/* Technical Specifications Table */}
              <div className="mt-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold mb-2">
                  Technical Specifications
                </h4>
                <div className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden divide-y divide-stone-200 text-xs">
                  {product.fullSpecs && Object.entries(product.fullSpecs).map(([key, value], idx) => (
                    <div key={idx} className="flex px-3 py-2">
                      <span className="w-1/3 font-medium text-stone-500 shrink-0">{key}</span>
                      <span className="w-2/3 text-stone-800 font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Badges */}
              {product.applications && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {product.applications.map((app, i) => (
                    <span key={i} className="text-[11px] font-mono px-2 py-0.5 bg-stone-100 text-stone-600 rounded">
                      ✓ {app}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Add to Cart & Share Actions */}
            <div className="mt-6 pt-4 border-t border-stone-200 space-y-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-stone-500">Quantity ({product.unit}):</span>
                  <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1.5 hover:bg-stone-100 text-stone-600 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 font-mono text-xs font-bold text-stone-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1.5 hover:bg-stone-100 text-stone-600 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleShareWhatsApp}
                    className="p-2 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors flex items-center gap-1 text-xs font-semibold"
                    title="Share item on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className="p-2 border border-stone-300 text-stone-700 hover:bg-stone-100 rounded-lg transition-colors"
                    title="Copy direct share link"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full py-3 px-4 bg-[#C85A32] hover:bg-[#A44522] text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add {quantity} {product.unit} to Estimate Cart</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
