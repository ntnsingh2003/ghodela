import React from 'react';
import { X, Printer, ShieldCheck, Download, CheckCircle2 } from 'lucide-react';
import { TRADER_INFO } from '../data/mockData';

export default function PrintableEstimateSlip({ cartItems, customerInfo, onClose }) {
  const estimateNumber = `SVB/2026/EST-${Math.floor(1000 + Math.random() * 9000)}`;
  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full border border-stone-300 shadow-2xl overflow-hidden my-6">
        
        {/* Top Control Bar (Hidden in Print) */}
        <div className="flex items-center justify-between p-4 bg-stone-100 border-b border-stone-200 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase text-stone-700">
              Official Quotation Estimation Slip Preview
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#C85A32] text-white rounded-lg text-xs font-semibold flex items-center gap-2 hover:bg-[#A44522] transition-colors shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-800 rounded-lg hover:bg-stone-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Printable Letterhead Paper */}
        <div id="printable-estimate-slip" className="p-8 sm:p-12 text-[#181816] bg-white">
          
          {/* Header & Watermark */}
          <div className="border-b-2 border-stone-800 pb-6 mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-[#181816]">
                  {TRADER_INFO.name}
                </h1>
                <p className="text-xs font-medium text-stone-600 mt-1 max-w-lg">
                  {TRADER_INFO.legalEntity}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono text-stone-600 mt-2">
                  <span><strong>GSTIN:</strong> {TRADER_INFO.gstin}</span>
                  <span><strong>PAN:</strong> {TRADER_INFO.pan}</span>
                  <span><strong>Tel:</strong> {TRADER_INFO.flagshipShowroom.phone}</span>
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  <strong>Central Godown:</strong> {TRADER_INFO.centralGodown.address}
                </p>
              </div>

              <div className="text-right">
                <div className="inline-block border-2 border-stone-800 px-3 py-1 rounded text-right mb-2">
                  <span className="text-[10px] font-mono uppercase block font-bold text-stone-500">Document Type</span>
                  <span className="text-sm font-display font-bold">ESTIMATE / RATE SLIP</span>
                </div>
                <div className="text-xs font-mono text-stone-600 space-y-0.5">
                  <p><strong>Ref No:</strong> {estimateNumber}</p>
                  <p><strong>Date:</strong> {currentDate}</p>
                  <p><strong>Status:</strong> Wholesale Inward Review</p>
                </div>
              </div>
            </div>
          </div>

          {/* Client & Delivery Particulars */}
          <div className="grid grid-cols-2 gap-6 p-4 rounded-xl bg-stone-50 border border-stone-200 mb-6 text-xs">
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-stone-500 block mb-1">
                Recipient Details:
              </span>
              <p className="text-sm font-bold text-stone-900">{customerInfo.name || "Valued Patron / Contractor"}</p>
              <p className="text-stone-600 font-mono mt-0.5">WhatsApp / Phone: {customerInfo.phone || "Pending"}</p>
              <p className="text-stone-600 mt-0.5">Category: <span className="font-semibold text-[#C85A32]">{customerInfo.customerType || "Homeowner"}</span></p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-stone-500 block mb-1">
                Site & Logistics Preference:
              </span>
              <p className="text-stone-800 font-medium">
                <strong>Site Delivery Address:</strong> {customerInfo.siteAddress || "Site Location Shared via WhatsApp"}
              </p>
              <p className="text-stone-600 mt-0.5">
                <strong>Dispatch Mode:</strong> {customerInfo.deliveryPreference === 'godown' ? 'Self-Arranged Godown Pickup (VKI Depot)' : 'Direct Site Hydraulic Truck Delivery'}
              </p>
            </div>
          </div>

          {/* Itemized Table */}
          <div className="mb-6 overflow-hidden rounded-lg border border-stone-300">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-200/80 border-b border-stone-300 font-mono text-[11px] text-stone-800">
                  <th className="p-3 w-10 text-center">#</th>
                  <th className="p-3">Item Description & Brand</th>
                  <th className="p-3">SKU Code</th>
                  <th className="p-3">Selected Finish / Grade</th>
                  <th className="p-3 text-right">Qty</th>
                  <th className="p-3 text-right">Unit</th>
                  <th className="p-3 text-right">Guidance Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {cartItems.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}>
                    <td className="p-3 text-center font-mono text-stone-500">{idx + 1}</td>
                    <td className="p-3">
                      <div className="font-bold text-stone-900">{item.name}</div>
                      <div className="text-[11px] text-stone-500">{item.brand} • {item.dimensionsUnit}</div>
                    </td>
                    <td className="p-3 font-mono text-stone-600">{item.sku}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-stone-100 font-medium text-stone-800 border border-stone-200">
                        {item.finish}
                      </span>
                    </td>
                    <td className="p-3 text-right font-mono font-bold text-stone-900">{item.quantity}</td>
                    <td className="p-3 text-right font-mono text-stone-600">{item.unit}</td>
                    <td className="p-3 text-right font-mono text-[#C85A32] font-semibold">{item.rateEstimateRange || "Daily Rake Rate"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Wholesale Rate Notice & Commercial Terms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-stone-300 pt-4 text-[11px] text-stone-600">
            <div>
              <h5 className="font-mono uppercase font-bold text-stone-800 mb-1">
                Godown Supply & Dispatch Terms:
              </h5>
              <ul className="list-disc pl-4 space-y-1">
                <li>Material dispatched strictly with verified GST E-Way Bill and Test Certificate.</li>
                <li>Cement & Bajri dispatches are subject to live daily manufacturer rake prices.</li>
                <li>Full batch matching guaranteed for Tiles & Vitrified Slabs from same kiln lot.</li>
                <li>Breakage in transit insured when booked via authorized BuildMart transport.</li>
              </ul>
            </div>

            <div className="text-right flex flex-col justify-between">
              <div>
                <p className="font-bold text-stone-800 text-xs">For Ghodela BuildMart & Infra</p>
                <p className="text-[10px] text-stone-500 font-mono mt-0.5">Authorised Central Depot Dispatch Desk</p>
              </div>

              {/* Digital Stamp Seal */}
              <div className="inline-block mt-4 self-end border-2 border-dashed border-[#B08D57] rounded-lg p-2 text-center w-48">
                <ShieldCheck className="w-4 h-4 text-[#B08D57] mx-auto mb-1" />
                <span className="text-[9px] font-mono font-bold text-[#8F6A33] block">ORIGINAL ESTIMATE RECORD</span>
                <span className="text-[8px] font-mono text-stone-500 block">GST COMPLIANT TRADE HOUSE</span>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="mt-8 pt-4 border-t border-stone-200 text-center text-[10px] font-mono text-stone-400">
            Generated via Ghodela Digital Experience Portal • Direct Inquiries: {TRADER_INFO.flagshipShowroom.whatsappDisplay}
          </div>

        </div>
      </div>
    </div>
  );
}
