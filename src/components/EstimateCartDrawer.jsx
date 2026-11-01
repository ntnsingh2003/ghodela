import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Send, 
  FileText, 
  MessageSquare, 
  ShieldAlert, 
  Truck, 
  User, 
  Phone, 
  MapPin, 
  Briefcase,
  ChevronRight,
  Eye,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TRADER_INFO } from '../data/mockData';

export default function EstimateCartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart,
  onOpenPrintSlip,
  onShowToast
}) {
  if (!isOpen) return null;

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    siteAddress: '',
    customerType: 'Homeowner',
    deliveryPreference: 'site'
  });

  const [previewOpen, setPreviewOpen] = useState(false);

  // Compile formatted WhatsApp text
  const generateWhatsAppMessage = () => {
    let msg = `*QUOTATION REQUEST — GHODELA BUILDMART & INFRA*\n`;
    msg += `Ref: Web Digital Showroom Estimate\n`;
    msg += `------------------------------------------\n`;
    msg += `*CUSTOMER DETAILS:*\n`;
    msg += `• Name: ${customerInfo.name || 'Valued Client'}\n`;
    msg += `• Contact: ${customerInfo.phone || 'Provided via WhatsApp'}\n`;
    msg += `• Customer Profile: ${customerInfo.customerType}\n`;
    msg += `• Site / Delivery Location: ${customerInfo.siteAddress || 'To be shared'}\n`;
    msg += `• Dispatch Preference: ${customerInfo.deliveryPreference === 'godown' ? 'Self-Pickup from VKI Godown' : 'Direct Site Transport Truck Delivery'}\n`;
    msg += `------------------------------------------\n`;
    msg += `*SHORTLISTED MATERIAL REQUIREMENTS (${cartItems.length} Items):*\n\n`;

    cartItems.forEach((item, index) => {
      msg += `${index + 1}. *${item.name}*\n`;
      msg += `   • Brand: ${item.brand}\n`;
      msg += `   • SKU: ${item.sku}\n`;
      msg += `   • Selected Finish/Grade: ${item.finish}\n`;
      msg += `   • Required Quantity: *${item.quantity} ${item.unit}*\n`;
      msg += `   • Guidance Range: ${item.rateEstimateRange || 'Market Rate'}\n\n`;
    });

    msg += `------------------------------------------\n`;
    msg += `Please provide your best wholesale project discount and dispatch availability for this list. Thank you!`;
    return msg;
  };

  const handleSendWhatsApp = () => {
    if (cartItems.length === 0) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }

    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const traderPhone = TRADER_INFO.flagshipShowroom.whatsapp.replace('+', '');
    const url = `https://wa.me/${traderPhone}?text=${encoded}`;

    window.open(url, '_blank');

    if (onShowToast) {
      onShowToast({
        type: "success",
        title: "WhatsApp Estimate Dispatched",
        message: "Your itemized estimate list has been opened in WhatsApp for instant wholesale quotation!"
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-900/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#C85A32] text-white flex items-center justify-center font-bold">
              {cartItems.length}
            </div>
            <div>
              <h2 className="font-display font-bold text-base text-stone-900">
                Estimate / Quotation Cart
              </h2>
              <span className="text-[11px] font-mono text-stone-500">
                Wholesale & Contractor Direct Dispatch
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cartItems.length > 0 && (
              <button
                onClick={onClearCart}
                className="text-xs text-rose-600 hover:text-rose-800 font-mono px-2 py-1 rounded hover:bg-rose-50 transition-colors"
                title="Clear all shortlisted items"
              >
                Clear All
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Wholesale Rates Notice Banner */}
        <div className="bg-[#FAF7F2] border-b border-[#E8E2D7] px-4 py-2.5 flex items-center gap-2 text-xs text-stone-700">
          <ShieldAlert className="w-4 h-4 text-[#B08D57] shrink-0" />
          <p className="leading-tight">
            <strong>No inflated retail MRPs:</strong> Rates are finalized per live daily manufacturer rake & godown dispatch volume with maximum slab discount.
          </p>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 bg-stone-100 rounded-full mx-auto flex items-center justify-center text-stone-400">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-lg text-stone-800">
                Your Estimate Cart is Empty
              </h3>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Explore our 4 product verticals, try the Switch Visualizer, or calculate site materials to add items here.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-[#C85A32] text-white text-xs font-semibold rounded-lg hover:bg-[#A44522] transition-colors"
              >
                Browse Product Catalogue
              </button>
            </div>
          ) : (
            <>
              {/* Shortlisted Items List */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-stone-500 uppercase">
                  <span>Shortlisted Items ({cartItems.length})</span>
                  <span>Quantity & Unit</span>
                </div>

                <div className="divide-y divide-stone-200 border border-stone-200 rounded-xl bg-stone-50/50 overflow-hidden">
                  {cartItems.map((item, idx) => (
                    <div key={`${item.id}-${item.finish}-${idx}`} className="p-3.5 bg-white flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 font-semibold">
                            {item.sku}
                          </span>
                          <span className="text-xs font-bold text-stone-900 truncate">
                            {item.name}
                          </span>
                        </div>
                        <div className="text-[11px] text-stone-500 mt-1 flex flex-wrap items-center gap-x-2">
                          <span>Brand: <strong>{item.brand}</strong></span>
                          <span>•</span>
                          <span>Finish: <strong className="text-[#C85A32]">{item.finish}</strong></span>
                        </div>
                        <div className="text-[11px] font-mono text-stone-600 mt-0.5">
                          Guidance: {item.rateEstimateRange || "Daily Rake Rate"}
                        </div>
                      </div>

                      {/* Quantity Selector in Trading Units */}
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden bg-white shadow-xs">
                          <button
                            onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                            className="p-1 hover:bg-stone-100 text-stone-600 transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 font-mono text-xs font-bold text-stone-900 min-w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                            className="p-1 hover:bg-stone-100 text-stone-600 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-xs font-mono font-medium text-stone-600 w-12 text-right">
                          {item.unit}
                        </span>
                        <button
                          onClick={() => onRemoveItem(idx)}
                          className="p-1 text-stone-400 hover:text-rose-600 rounded hover:bg-stone-100 transition-colors ml-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Details Form */}
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>Your Site & Delivery Details (For Quote)</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-[11px] font-mono text-stone-600 mb-1">Your Name / Firm Name:</label>
                    <input
                      type="text"
                      placeholder="e.g., Rajesh Sharma / Apex Infra"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-stone-800 placeholder-stone-400 focus:outline-hidden focus:border-[#C85A32]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-stone-600 mb-1">WhatsApp / Mobile Number:</label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      placeholder="e.g., 98290XXXXX"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-stone-800 placeholder-stone-400 focus:outline-hidden focus:border-[#C85A32]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-stone-600 mb-1">Customer Profile:</label>
                    <select
                      value={customerInfo.customerType}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, customerType: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-stone-800 focus:outline-hidden focus:border-[#C85A32]"
                    >
                      <option value="Homeowner">Homeowner / Villa Owner</option>
                      <option value="Building Contractor">Civil / Building Contractor</option>
                      <option value="Interior Architect">Interior Architect / Designer</option>
                      <option value="Licensed Electrician">Electrical Contractor / Mistri</option>
                      <option value="Master Plumber">Plumbing Specialist</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-stone-600 mb-1">Dispatch Mode:</label>
                    <select
                      value={customerInfo.deliveryPreference}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, deliveryPreference: e.target.value })}
                      className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-stone-800 focus:outline-hidden focus:border-[#C85A32]"
                    >
                      <option value="site">Site Delivery via Hydraulic Truck</option>
                      <option value="godown">Self-Arranged Godown Pickup (VKI)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-stone-600 mb-1">Site Delivery Area / Landmark:</label>
                  <input
                    type="text"
                    placeholder="e.g., Mansarovar Extension, Tonk Road, Jaipur"
                    value={customerInfo.siteAddress}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, siteAddress: e.target.value })}
                    className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden focus:border-[#C85A32]"
                  />
                </div>
              </div>

              {/* WhatsApp Message Live Preview Toggle */}
              <div>
                <button
                  type="button"
                  onClick={() => setPreviewOpen(!previewOpen)}
                  className="text-xs font-mono text-stone-600 hover:text-stone-900 flex items-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{previewOpen ? "Hide WhatsApp Text Preview" : "Preview Exact WhatsApp Quotation Format"}</span>
                </button>

                {previewOpen && (
                  <div className="mt-2 p-3 bg-stone-900 text-stone-200 rounded-xl font-mono text-[11px] whitespace-pre-wrap border border-stone-700 max-h-48 overflow-y-auto">
                    {generateWhatsAppMessage()}
                  </div>
                )}
              </div>
            </>
          )}

        </div>

        {/* Drawer Footer Actions */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-3">
            <div className="flex items-center justify-between text-xs text-stone-600">
              <span className="font-mono">Total Distinct Products:</span>
              <span className="font-mono font-bold text-stone-900">{cartItems.length} Lines</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Printable Estimate Slip Modal Trigger */}
              <button
                onClick={() => onOpenPrintSlip(customerInfo)}
                className="py-3 px-4 border border-stone-300 hover:border-stone-400 bg-white text-stone-800 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <FileText className="w-4 h-4 text-stone-600" />
                <span>Printable Estimate Slip</span>
              </button>

              {/* 1-Click WhatsApp Quote Button */}
              <button
                onClick={handleSendWhatsApp}
                className="py-3 px-4 bg-[#128C7E] hover:bg-[#0E7569] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer group"
              >
                <MessageSquare className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Send List on WhatsApp</span>
              </button>
            </div>

            <p className="text-[10px] text-center font-mono text-stone-500">
              Direct connection to Ghodela Wholesale Desk
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
