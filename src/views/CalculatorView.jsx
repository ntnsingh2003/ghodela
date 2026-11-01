import React, { useState } from 'react';
import { 
  Calculator, 
  Grid3X3, 
  Zap, 
  Layers, 
  ShoppingBag, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Plus
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  TILE_SIZES, 
  calculateTiles, 
  BHK_PRESETS, 
  CIVIL_WORKS, 
  calculateCivilMaterials 
} from '../data/calculatorLogic';
import { PRODUCTS } from '../data/mockData';

export default function CalculatorView({ onAddToCart, onShowToast }) {
  const [activeTab, setActiveTab] = useState('tiles'); // 'tiles' | 'switches' | 'civil'

  // 1. Tile Calculator State
  const [tileInputs, setTileInputs] = useState({
    lengthFt: 18,
    widthFt: 14,
    tileTypeId: '600x1200',
    includeSkirting: true,
    wastagePercent: 10
  });

  const tileResults = calculateTiles(tileInputs);

  // 2. Electrical BHK Calculator State
  const [selectedBhkKey, setSelectedBhkKey] = useState('3bhk');
  const bhkData = BHK_PRESETS[selectedBhkKey];

  // 3. Civil Calculator State
  const [civilInputs, setCivilInputs] = useState({
    areaSqft: 1200,
    workTypeId: 'roof_rcc'
  });

  const civilResults = calculateCivilMaterials(civilInputs);

  // Push Tile Calculation to Cart
  const handlePushTilesToCart = () => {
    try { confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } }); } catch (e) {}

    const tileProduct = PRODUCTS.find(p => p.id === 'tile-1') || PRODUCTS[7];
    const adhesiveProduct = PRODUCTS.find(p => p.id === 'cem-5') || PRODUCTS[18];
    const groutProduct = PRODUCTS.find(p => p.id === 'cem-7') || PRODUCTS[20];

    // Add Tile Boxes
    onAddToCart({
      product: tileProduct,
      quantity: tileResults.boxesRequired,
      finish: "Carving Satin Silk",
      unit: "Boxes"
    });

    // Add Adhesive Bags
    if (tileResults.adhesiveBags > 0) {
      onAddToCart({
        product: adhesiveProduct,
        quantity: tileResults.adhesiveBags,
        finish: "White Premium Polymer",
        unit: "Bags"
      });
    }

    // Add Epoxy Grout
    if (tileResults.epoxyGroutBuckets > 0) {
      onAddToCart({
        product: groutProduct,
        quantity: tileResults.epoxyGroutBuckets,
        finish: "Sparkling Metallic Gold",
        unit: "Buckets"
      });
    }

    if (onShowToast) {
      onShowToast({
        type: 'success',
        title: 'Tile Estimation Added',
        message: `${tileResults.boxesRequired} Boxes of Tiles, ${tileResults.adhesiveBags} Bags of Adhesive & ${tileResults.epoxyGroutBuckets} Buckets of Grout pushed to Estimate Cart.`
      });
    }
  };

  // Push Electrical BHK Calculation to Cart
  const handlePushElectricalToCart = () => {
    try { confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } }); } catch (e) {}

    const plateProduct = PRODUCTS.find(p => p.id === 'elec-1') || PRODUCTS[0];
    const switchProduct = PRODUCTS.find(p => p.id === 'elec-2') || PRODUCTS[1];
    const socketProduct = PRODUCTS.find(p => p.id === 'elec-4') || PRODUCTS[3];
    const wireProduct = PRODUCTS.find(p => p.id === 'elec-5') || PRODUCTS[4];
    const dbProduct = PRODUCTS.find(p => p.id === 'elec-6') || PRODUCTS[5];

    // Add plates
    const totalPlates = bhkData.plates2M + bhkData.plates4M + bhkData.plates6M + bhkData.plates8M;
    onAddToCart({
      product: plateProduct,
      quantity: totalPlates,
      finish: "Smoked Obsidian Black",
      unit: "Pieces"
    });

    // Add switches
    onAddToCart({
      product: switchProduct,
      quantity: bhkData.switches6A + bhkData.switches16A,
      finish: "Velvet Matte Charcoal",
      unit: "Pieces"
    });

    // Add sockets
    onAddToCart({
      product: socketProduct,
      quantity: bhkData.sockets,
      finish: "Matte Anthracite",
      unit: "Pieces"
    });

    // Add wires
    const totalWires = bhkData.wires["1.0mm"] + bhkData.wires["1.5mm"] + bhkData.wires["2.5mm"];
    onAddToCart({
      product: wireProduct,
      quantity: totalWires,
      finish: "Assorted FR-LSH Phase/Neutral",
      unit: "Coils"
    });

    // Add DB
    onAddToCart({
      product: dbProduct,
      quantity: 1,
      finish: "Architectural Off-White",
      unit: "Pieces"
    });

    if (onShowToast) {
      onShowToast({
        type: 'success',
        title: 'BHK Electrical Bill Pushed',
        message: `Complete ${bhkData.label} electrical bill of quantities pushed to your Estimate Cart.`
      });
    }
  };

  // Push Civil Materials Calculation to Cart
  const handlePushCivilToCart = () => {
    try { confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } }); } catch (e) {}

    const cementProduct = PRODUCTS.find(p => p.id === 'cem-1') || PRODUCTS[14];
    const sandProduct = PRODUCTS.find(p => p.id === 'cem-3') || PRODUCTS[16];
    const gittiProduct = PRODUCTS.find(p => p.id === 'cem-4') || PRODUCTS[17];
    const chemicalProduct = PRODUCTS.find(p => p.id === 'cem-6') || PRODUCTS[19];

    // Cement
    if (civilResults.cementBags > 0) {
      onAddToCart({
        product: cementProduct,
        quantity: civilResults.cementBags,
        finish: "Standard 50kg Heavy Bag",
        unit: "50kg Bags"
      });
    }

    // Sand
    if (civilResults.sandTrolleys > 0) {
      onAddToCart({
        product: sandProduct,
        quantity: civilResults.sandTrolleys,
        finish: "Golden Banas River Sand",
        unit: "Trolleys"
      });
    }

    // Gitti
    if (civilResults.gittiTrolleys > 0) {
      onAddToCart({
        product: gittiProduct,
        quantity: civilResults.gittiTrolleys,
        finish: "20mm Angular Grey Blue Stone",
        unit: "Trolleys"
      });
    }

    // Waterproofing
    if (civilResults.waterproofingLiters > 0) {
      const cans = Math.max(1, Math.ceil(civilResults.waterproofingLiters / 5));
      onAddToCart({
        product: chemicalProduct,
        quantity: cans,
        finish: "Amber Gold Liquid Solution",
        unit: "Cans"
      });
    }

    if (onShowToast) {
      onShowToast({
        type: 'success',
        title: 'Civil Material Bill Pushed',
        message: `${civilResults.cementBags} Cement Bags, ${civilResults.sandTrolleys} Sand Trolleys & Aggregate pushed to Estimate Cart.`
      });
    }
  };

  return (
    <div className="content-container py-8 space-y-8 pb-24">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight">
            ESTIMATOR.
          </h1>
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center bg-stone-200 p-1 sm:p-1.5 rounded-2xl border border-stone-300 overflow-x-auto no-scrollbar max-w-full">
          <button
            onClick={() => setActiveTab('tiles')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
              activeTab === 'tiles' ? 'bg-[#C85A32] text-white shadow-md' : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
            <span>Tiles & Adhesive</span>
          </button>

          <button
            onClick={() => setActiveTab('switches')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
              activeTab === 'switches' ? 'bg-[#181816] text-white shadow-md' : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-400" />
            <span>House Electrical (BHK)</span>
          </button>

          <button
            onClick={() => setActiveTab('civil')}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
              activeTab === 'civil' ? 'bg-[#2E2A27] text-white shadow-md' : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Plaster & Cement-Bajri</span>
          </button>
        </div>
      </div>

      {/* --- TAB 1: TILE & ADHESIVE CALCULATOR --- */}
      {activeTab === 'tiles' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Column (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-5">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#C85A32] font-bold block">
                Room Dimensions (In Feet)
              </span>
              <h3 className="font-display font-bold text-lg text-stone-900 mt-0.5">
                Input Floor Area & Tile Slab Size
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-stone-600 mb-1">Room Length (Feet):</label>
                <input
                  type="number"
                  min="1"
                  max="200"
                  value={tileInputs.lengthFt}
                  onChange={(e) => setTileInputs({ ...tileInputs, lengthFt: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2.5 text-stone-900 font-mono text-sm focus:outline-hidden focus:border-[#C85A32]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-600 mb-1">Room Width (Feet):</label>
                <input
                  type="number"
                  min="1"
                  max="200"
                  value={tileInputs.widthFt}
                  onChange={(e) => setTileInputs({ ...tileInputs, widthFt: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2.5 text-stone-900 font-mono text-sm focus:outline-hidden focus:border-[#C85A32]"
                />
              </div>
            </div>

            {/* Tile Size Selector */}
            <div>
              <label className="block text-xs font-mono text-stone-600 mb-1">Select Tile / Slab Format:</label>
              <select
                value={tileInputs.tileTypeId}
                onChange={(e) => setTileInputs({ ...tileInputs, tileTypeId: e.target.value })}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2.5 text-stone-900 text-xs font-medium focus:outline-hidden focus:border-[#C85A32] cursor-pointer"
              >
                {TILE_SIZES.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label} ({t.sqftPerBox} Sq.Ft / Box)
                  </option>
                ))}
              </select>
            </div>

            {/* Skirting & Wastage Toggles */}
            <div className="pt-2 border-t border-stone-100 space-y-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={tileInputs.includeSkirting}
                  onChange={(e) => setTileInputs({ ...tileInputs, includeSkirting: e.target.checked })}
                  className="w-4 h-4 rounded text-[#C85A32] focus:ring-[#C85A32]"
                />
                <span className="text-xs text-stone-700 font-medium">
                  Include 4-Inch Wall Perimeter Skirting (+8% material)
                </span>
              </label>

              <div>
                <label className="block text-xs font-mono text-stone-600 mb-1">
                  Cutting & Corner Wastage Margin:
                </label>
                <div className="flex gap-2">
                  {[5, 10, 15].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setTileInputs({ ...tileInputs, wastagePercent: pct })}
                      className={`flex-1 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all ${
                        tileInputs.wastagePercent === pct
                          ? 'border-[#C85A32] bg-[#FDF2EE] text-[#C85A32]'
                          : 'border-stone-200 bg-stone-50 text-stone-600'
                      }`}
                    >
                      {pct}% Wastage
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Results Output Column (7 Cols) */}
          <div className="lg:col-span-7 bg-[#1C1C1A] text-white p-6 sm:p-8 rounded-3xl border border-stone-800 shadow-xl space-y-6">
            <div className="flex justify-between items-start border-b border-stone-800 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#B08D57] font-bold block">
                  Automated BOQ Calculation
                </span>
                <h3 className="font-display font-bold text-xl text-white mt-0.5">
                  Exact Tile Boxes & Chemical Requirement
                </h3>
              </div>
              <span className="text-xs font-mono bg-stone-800 text-stone-300 px-2.5 py-1 rounded">
                Total Area: {tileResults.totalAreaWithWastage} Sq.Ft
              </span>
            </div>

            {/* Calculated Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              
              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
                <span className="text-[10px] font-mono text-stone-400 uppercase block">Required Tile Boxes</span>
                <div className="font-display font-extrabold text-3xl text-amber-400 mt-1">
                  {tileResults.boxesRequired}
                </div>
                <span className="text-[10px] font-mono text-stone-500 mt-1 block">
                  {tileResults.totalPcs} Individual Slabs
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
                <span className="text-[10px] font-mono text-stone-400 uppercase block">Tile Adhesive</span>
                <div className="font-display font-extrabold text-3xl text-white mt-1">
                  {tileResults.adhesiveBags}
                </div>
                <span className="text-[10px] font-mono text-stone-500 mt-1 block">
                  20 Kg Polymer Bags (Roff T02)
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
                <span className="text-[10px] font-mono text-stone-400 uppercase block">Epoxy Joint Grout</span>
                <div className="font-display font-extrabold text-3xl text-white mt-1">
                  {tileResults.epoxyGroutBuckets}
                </div>
                <span className="text-[10px] font-mono text-stone-500 mt-1 block">
                  5 Kg Stain-Proof Buckets
                </span>
              </div>

            </div>

            {/* Technical Detail Checklist */}
            <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800 text-xs space-y-2 text-stone-300">
              <div className="flex justify-between">
                <span>Net Carpet Floor Area:</span>
                <span className="font-mono text-white font-bold">{tileResults.baseArea} Sq.Ft</span>
              </div>
              <div className="flex justify-between">
                <span>Skirting & Wastage Addition:</span>
                <span className="font-mono text-white font-bold">
                  +{Math.round((tileResults.totalAreaWithWastage - tileResults.baseArea) * 10) / 10} Sq.Ft ({tileInputs.wastagePercent}% buffer)
                </span>
              </div>
              <div className="flex justify-between">
                <span>Recommended Leveling Spacers:</span>
                <span className="font-mono text-white font-bold">{tileResults.spacerPackets} Packets (2mm cross clips)</span>
              </div>
            </div>

            {/* Push to Estimate Cart Action */}
            <button
              onClick={handlePushTilesToCart}
              className="w-full py-3.5 px-4 bg-[#C85A32] hover:bg-[#A44522] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer text-xs sm:text-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Push All {tileResults.boxesRequired} Boxes & Adhesive to Estimate Cart</span>
            </button>

          </div>

        </div>
      )}

      {/* --- TAB 2: HOUSE ELECTRICAL SWITCH CALCULATOR --- */}
      {activeTab === 'switches' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* BHK Selector Column (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-5">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#C85A32] font-bold block">
                Residential Layout Specification
              </span>
              <h3 className="font-display font-bold text-lg text-stone-900 mt-0.5">
                Select Your Home / Flat Size
              </h3>
            </div>

            <div className="space-y-2.5">
              {Object.entries(BHK_PRESETS).map(([key, item]) => {
                const isSelected = selectedBhkKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedBhkKey(key)}
                    className={`w-full p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'border-[#181816] bg-[#181816] text-white shadow-md'
                        : 'border-stone-200 hover:border-stone-400 text-stone-800'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold block">{item.label}</span>
                      <span className={`text-[10px] font-mono block mt-0.5 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                        {item.plates8M + item.plates6M + item.plates4M + item.plates2M} Switchboards • {item.switches6A + item.switches16A} Switches
                      </span>
                    </div>
                    {isSelected && <CheckCircle2 className="w-5 h-5 text-amber-400" />}
                  </button>
                );
              })}
            </div>

            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-[11px] text-stone-600 space-y-1">
              <p><strong>Standards Complied:</strong> BIS IS-3854 & National Electrical Code (NEC 2023).</p>
              <p>Includes dedicated power loops for Geysers, Split ACs, and modular kitchen chimneys.</p>
            </div>

          </div>

          {/* Electrical Bill of Quantities Output (7 Cols) */}
          <div className="lg:col-span-7 bg-[#1C1C1A] text-white p-6 sm:p-8 rounded-3xl border border-stone-800 shadow-xl space-y-6">
            <div className="flex justify-between items-start border-b border-stone-800 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">
                  Recommended Electrical BOQ
                </span>
                <h3 className="font-display font-bold text-xl text-white mt-0.5">
                  {bhkData.label}
                </h3>
              </div>
              <span className="text-xs font-mono bg-stone-800 text-emerald-400 px-2.5 py-1 rounded">
                Complete Circuit Kit
              </span>
            </div>

            {/* Itemized Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                <span className="text-[10px] font-mono text-stone-400 block">2-Module Plates</span>
                <span className="text-xl font-bold font-mono text-white mt-0.5 block">{bhkData.plates2M} Pcs</span>
              </div>
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                <span className="text-[10px] font-mono text-stone-400 block">4-Module Plates</span>
                <span className="text-xl font-bold font-mono text-white mt-0.5 block">{bhkData.plates4M} Pcs</span>
              </div>
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                <span className="text-[10px] font-mono text-stone-400 block">6-Module Plates</span>
                <span className="text-xl font-bold font-mono text-white mt-0.5 block">{bhkData.plates6M} Pcs</span>
              </div>
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                <span className="text-[10px] font-mono text-stone-400 block">8-Module Plates</span>
                <span className="text-xl font-bold font-mono text-white mt-0.5 block">{bhkData.plates8M} Pcs</span>
              </div>
            </div>

            {/* Rockers, Sockets & Wires Breakdown */}
            <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 divide-y divide-stone-800 text-xs space-y-2">
              <div className="flex justify-between py-1">
                <span className="text-stone-300">Total 6A Normal Lighting Switches:</span>
                <span className="font-mono text-white font-bold">{bhkData.switches6A} Pieces</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-300">Heavy 16A Power Appliance Switches:</span>
                <span className="font-mono text-white font-bold">{bhkData.switches16A} Pieces</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-300">5-Pin Universal Safety Shutter Sockets:</span>
                <span className="font-mono text-white font-bold">{bhkData.sockets} Pieces</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-300">Recommended MCB Enclosure:</span>
                <span className="font-mono text-amber-400 font-bold">{bhkData.mcbBox}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-300">FR-LSH Copper Wires (90m Coils):</span>
                <span className="font-mono text-white font-bold">
                  {bhkData.wires["1.0mm"]}x 1.0mm (Light) • {bhkData.wires["1.5mm"]}x 1.5mm (Fan) • {bhkData.wires["2.5mm"]}x 2.5mm (Power)
                </span>
              </div>
            </div>

            {/* Push to Estimate Cart Action */}
            <button
              onClick={handlePushElectricalToCart}
              className="w-full py-3.5 px-4 bg-[#C85A32] hover:bg-[#A44522] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer text-xs sm:text-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Push Complete {bhkData.label} Electrical Kit to Estimate</span>
            </button>

          </div>

        </div>
      )}

      {/* --- TAB 3: PLASTER & CEMENT-BAJRI ESTIMATOR --- */}
      {activeTab === 'civil' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Civil Inputs Column (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-stone-200 shadow-sm space-y-5">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#C85A32] font-bold block">
                Structural Site Civil Estimation
              </span>
              <h3 className="font-display font-bold text-lg text-stone-900 mt-0.5">
                Input Plaster / Slab Area & Mix
              </h3>
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-600 mb-1">Total Surface / Slab Area (Sq.Ft):</label>
              <input
                type="number"
                min="50"
                max="50000"
                step="50"
                value={civilInputs.areaSqft}
                onChange={(e) => setCivilInputs({ ...civilInputs, areaSqft: e.target.value })}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2.5 text-stone-900 font-mono text-sm focus:outline-hidden focus:border-[#C85A32]"
              />
            </div>

            {/* Civil Work Type Selector */}
            <div>
              <label className="block text-xs font-mono text-stone-600 mb-1">Select Construction Type:</label>
              <div className="space-y-2">
                {CIVIL_WORKS.map((work) => {
                  const isSelected = civilInputs.workTypeId === work.id;
                  return (
                    <button
                      key={work.id}
                      type="button"
                      onClick={() => setCivilInputs({ ...civilInputs, workTypeId: work.id })}
                      className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#2E2A27] bg-[#2E2A27] text-white shadow-xs'
                          : 'border-stone-200 hover:border-stone-400 text-stone-800'
                      }`}
                    >
                      <span className="text-xs font-bold block">{work.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Civil Results Output (7 Cols) */}
          <div className="lg:col-span-7 bg-[#1C1C1A] text-white p-6 sm:p-8 rounded-3xl border border-stone-800 shadow-xl space-y-6">
            <div className="flex justify-between items-start border-b border-stone-800 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                  Material Dispatch Requirement
                </span>
                <h3 className="font-display font-bold text-xl text-white mt-0.5">
                  UltraTech Cement & Banas Bajri Loads
                </h3>
              </div>
              <span className="text-xs font-mono bg-stone-800 text-stone-300 px-2.5 py-1 rounded">
                Area: {civilResults.area} Sq.Ft
              </span>
            </div>

            {/* Calculated Civil Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              
              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
                <span className="text-[10px] font-mono text-stone-400 uppercase block">Cement Bags</span>
                <div className="font-display font-extrabold text-3xl text-white mt-1">
                  {civilResults.cementBags}
                </div>
                <span className="text-[10px] font-mono text-stone-500 mt-1 block">
                  50 Kg OPC 53 Bags
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
                <span className="text-[10px] font-mono text-stone-400 uppercase block">Banas River Sand</span>
                <div className="font-display font-extrabold text-3xl text-amber-400 mt-1">
                  {civilResults.sandTrolleys}
                </div>
                <span className="text-[10px] font-mono text-stone-500 mt-1 block">
                  Trolleys (~{civilResults.sandTons} MT)
                </span>
              </div>

              {civilResults.gittiTrolleys > 0 && (
                <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
                  <span className="text-[10px] font-mono text-stone-400 uppercase block">Stone Gitti</span>
                  <div className="font-display font-extrabold text-3xl text-white mt-1">
                    {civilResults.gittiTrolleys}
                  </div>
                  <span className="text-[10px] font-mono text-stone-500 mt-1 block">
                    Trolleys (~{civilResults.gittiTons} MT)
                  </span>
                </div>
              )}

            </div>

            {/* Waterproofing & Logistics Notes */}
            <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800 text-xs space-y-1.5 text-stone-300">
              {civilResults.waterproofingLiters > 0 && (
                <p>
                  • <strong>Dr. Fixit Waterproofing:</strong> ~{civilResults.waterproofingLiters} Liters recommended ({Math.ceil(civilResults.waterproofingLiters / 5)}x 5L Jerrycans).
                </p>
              )}
              <p>• Silt content verified &lt; 3% for superior bonding without plaster cracks.</p>
              <p>• Dispatched via hydraulic tipping tractor trolley directly at site location.</p>
            </div>

            {/* Push to Estimate Cart Action */}
            <button
              onClick={handlePushCivilToCart}
              className="w-full py-3.5 px-4 bg-[#C85A32] hover:bg-[#A44522] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer text-xs sm:text-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Push Cement & Sand Quantities to Estimate Cart</span>
            </button>

          </div>

        </div>
      )}

    </div>
  );
}
