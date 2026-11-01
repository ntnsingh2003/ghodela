import React, { useState } from 'react';
import { 
  Sliders, 
  Paintbrush, 
  Grid3X3, 
  Lightbulb, 
  Volume2, 
  VolumeX, 
  ShoppingBag, 
  Share2, 
  Check, 
  Sparkles,
  Maximize2,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VisualizerStudioView({ onAddToCart, onShowToast }) {
  const [activeMode, setActiveMode] = useState('switches'); // 'switches' | 'tiles'

  // Wall Canvas Texture/Color
  const [activeWall, setActiveWall] = useState({
    id: 'cream',
    name: 'Warm Alabaster Cream',
    color: '#F5EFEB',
    bg: '#F5EFEB',
    textColor: '#181816'
  });

  const wallOptions = [
    { id: 'cream', name: 'Warm Alabaster Cream', color: '#F5EFEB', bg: '#F5EFEB', textColor: '#181816' },
    { id: 'terracotta', name: 'Venetian Terracotta', color: '#94452C', bg: '#94452C', textColor: '#FFF' },
    { id: 'navy', name: 'Royal Navy Charcoal', color: '#1D2433', bg: '#1D2433', textColor: '#FFF' },
    { id: 'concrete', name: 'Exposed Raw Concrete', color: '#7E8287', bg: '#7E8287', textColor: '#FFF' },
    { 
      id: 'marble', 
      name: 'Statuario Marble Wall', 
      color: '#F4F4F6', 
      bg: 'linear-gradient(135deg, #F8F8F8 30%, #DDD 50%, #F8F8F8 70%)',
      textColor: '#181816'
    }
  ];

  // --- MODE A: SWITCH CONFIGURATOR STATE ---
  const switchRanges = [
    {
      id: 'crystal',
      name: 'Crystal Glass Series',
      brand: 'Legrand Arteor / Havells Fabio',
      plateStyle: 'linear-gradient(135deg, #2D3035 0%, #151618 100%)',
      borderStyle: '1px solid rgba(255,255,255,0.25)',
      isGlass: true,
      tag: 'Toughened Glass 4mm'
    },
    {
      id: 'white-glass',
      name: 'Arctic White Glass',
      brand: 'Legrand Arteor White',
      plateStyle: 'linear-gradient(135deg, #FFFFFF 0%, #E8EBF0 100%)',
      borderStyle: '1px solid rgba(255,255,255,0.6)',
      isGlass: true,
      tag: 'Ultra-Clear Toughened'
    },
    {
      id: 'matte-black',
      name: 'Stealth Matte Black',
      brand: 'Schneider AvatarOn',
      plateStyle: '#1E1E20',
      borderStyle: '1px solid #38383C',
      isGlass: false,
      tag: 'Soft-Touch Matte'
    },
    {
      id: 'champagne-gold',
      name: 'Brushed Champagne Gold',
      brand: 'Crabtree Verona Metallic',
      plateStyle: 'linear-gradient(135deg, #DFC188 0%, #A68346 100%)',
      borderStyle: '1px solid #B89659',
      isGlass: false,
      tag: 'Anodized Aluminum'
    },
    {
      id: 'wood-grain',
      name: 'Royal Walnut Wood-Grain',
      brand: 'Kajaria Artisan Plates',
      plateStyle: 'linear-gradient(90deg, #4A2E1B 0%, #6E452B 50%, #4A2E1B 100%)',
      borderStyle: '1px solid #361E0F',
      isGlass: false,
      tag: 'Natural Timber Grain'
    },
    {
      id: 'classic-white',
      name: 'Classic Polycarbonate White',
      brand: 'Legrand Myrius Classic',
      plateStyle: '#FDFCFA',
      borderStyle: '1px solid #D5D0C6',
      isGlass: false,
      tag: 'High-Gloss Anti-UV'
    }
  ];

  const moduleSizes = [
    { id: '2M', label: '2-Module (Bedside)', widthClass: 'w-40', modulesCount: 2, sockets: 1, switches: 1 },
    { id: '4M', label: '4-Module (Room Secondary)', widthClass: 'w-56', modulesCount: 4, sockets: 1, switches: 2 },
    { id: '6M', label: '6-Module (Room Main Control)', widthClass: 'w-72', modulesCount: 6, sockets: 1, switches: 4, hasRegulator: true },
    { id: '8M', label: '8-Module (Living Hub)', widthClass: 'w-96', modulesCount: 8, sockets: 2, switches: 4, hasRegulator: true }
  ];

  const rockerStyles = [
    { id: 'standard', name: 'Standard Minimalist Rocker', desc: 'Crisp mechanical feel with hairline bezel' },
    { id: 'metallic-trim', name: 'Metallic Trim Luxury Rocker', desc: 'Brass electroplated accent band' },
    { id: 'touch-glass', name: 'Capacitive Touch Glass Sensor', desc: 'Zero noise with soft aura backlight' },
    { id: 'step-regulator', name: 'Fan Step-Regulator + 5-Pin Combo', desc: 'Hum-free 4-speed electronic control' }
  ];

  const [selectedRange, setSelectedRange] = useState(switchRanges[0]);
  const [selectedSize, setSelectedSize] = useState(moduleSizes[3]); // Default 8M
  const [selectedRocker, setSelectedRocker] = useState(rockerStyles[0]);
  
  // Interactive Switch States (ON/OFF per switch index)
  const [switchStates, setSwitchStates] = useState({ 0: true, 1: false, 2: true, 3: false });
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Play synthetic mechanical click audio
  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.04);
    } catch (e) {
      // Audio context might be restricted before interaction
    }
  };

  const toggleSwitch = (index) => {
    playClickSound();
    setSwitchStates(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleAddSwitchConfigToCart = () => {
    try {
      confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } });
    } catch (e) {}

    onAddToCart({
      product: {
        id: `config-sw-${selectedRange.id}-${selectedSize.id}`,
        name: `Custom Configured ${selectedRange.name} (${selectedSize.id})`,
        brand: selectedRange.brand,
        sku: `SVB-CFG-${selectedRange.id.toUpperCase()}-${selectedSize.id}`,
        category: 'electricals',
        dimensionsUnit: `${selectedSize.label} | Concealed GI Mount`,
        unit: 'Pieces',
        rateEstimateRange: selectedSize.id === '8M' ? '₹ 1,650 – ₹ 2,100 / Set' : '₹ 850 – ₹ 1,250 / Set'
      },
      quantity: 1,
      finish: `${selectedRange.name} • ${selectedRocker.name}`,
      unit: 'Pieces'
    });

    if (onShowToast) {
      onShowToast({
        type: 'success',
        title: 'Switch Configuration Shortlisted',
        message: `${selectedRange.name} (${selectedSize.id}) with ${selectedRocker.name} added to your estimate cart.`
      });
    }
  };

  // --- MODE B: TILE LAYING PATTERN STATE ---
  const tileVarieties = [
    {
      id: 'statuario',
      name: 'Italian Statuario Royale',
      brand: 'Kajaria Eternity',
      bg: '#FBFBFB',
      gradient: 'linear-gradient(135deg, #FFF 40%, #E0E0E0 60%, #FFF 80%)',
      dimensions: '600x1200mm'
    },
    {
      id: 'marquina',
      name: 'Royal Black Marquina Marble',
      brand: 'Kajaria Eternity',
      bg: '#141416',
      gradient: 'linear-gradient(135deg, #1C1D1F 30%, #303135 50%, #111 80%)',
      dimensions: '600x1200mm'
    },
    {
      id: 'teak-wood',
      name: 'Natural Teak Wood Grain',
      brand: 'Kajaria Woodstyle',
      bg: '#85542C',
      gradient: 'repeating-linear-gradient(90deg, #85542C 0px, #6B3F1E 12px, #85542C 24px)',
      dimensions: '200x1200mm'
    },
    {
      id: 'sandstone',
      name: 'Desert Crema Sandstone',
      brand: 'Somany Max',
      bg: '#E2D5BE',
      gradient: 'linear-gradient(120deg, #ECE2CF 0%, #D8C6A7 100%)',
      dimensions: '600x600mm'
    },
    {
      id: 'calacatta',
      name: 'Calacatta Gold Luxury Slab',
      brand: 'Ghodela Natural Stone',
      bg: '#FAF8F4',
      gradient: 'linear-gradient(135deg, #FFF 40%, #E2C792 60%, #FFF 80%)',
      dimensions: '800x1600mm'
    }
  ];

  const tilePatterns = [
    { id: 'straight', name: 'Straight Grid (1:1 Stacked)', desc: 'Clean modern alignment for large format slabs' },
    { id: 'brick', name: 'Brick Bond (1:2 Staggered)', desc: 'Classical offset running bond joint' },
    { id: 'herringbone', name: '45° Classical Herringbone', desc: 'Luxurious zigzag plank arrangement' }
  ];

  const groutColors = [
    { id: 'white', name: 'Crisp Architectural White', color: '#FFFFFF', border: '#DDD' },
    { id: 'grey', name: 'Architectural Charcoal Grey', color: '#444444', border: '#222' },
    { id: 'gold', name: 'Sparkling Metallic Gold Epoxy', color: '#D4AF37', border: '#AA8822' }
  ];

  const [selectedTile, setSelectedTile] = useState(tileVarieties[0]);
  const [selectedPattern, setSelectedPattern] = useState(tilePatterns[0]);
  const [selectedGrout, setSelectedGrout] = useState(groutColors[0]);
  const [ambientLight, setAmbientLight] = useState('warm'); // 'warm' | 'daylight'

  const handleAddTileConfigToCart = () => {
    try {
      confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } });
    } catch (e) {}

    onAddToCart({
      product: {
        id: `config-tile-${selectedTile.id}`,
        name: `${selectedTile.name} (${selectedTile.dimensions})`,
        brand: selectedTile.brand,
        sku: `SVB-TL-${selectedTile.id.toUpperCase()}-GVT`,
        category: 'tiles',
        dimensionsUnit: `${selectedTile.dimensions} | Pattern: ${selectedPattern.name}`,
        unit: 'Boxes',
        rateEstimateRange: '₹ 78 – ₹ 92 / Sq.Ft'
      },
      quantity: 20,
      finish: `Pattern: ${selectedPattern.name} • Grout: ${selectedGrout.name}`,
      unit: 'Boxes'
    });

    if (onShowToast) {
      onShowToast({
        type: 'success',
        title: 'Tile Specification Added',
        message: `20 Boxes of ${selectedTile.name} with ${selectedGrout.name} added to your quotation.`
      });
    }
  };

  return (
    <div className="content-container py-8 space-y-8 pb-24">
      
      {/* Studio Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-stone-900 tracking-tight">
            3D STUDIO.
          </h1>
        </div>

        {/* Mode Switcher Buttons */}
        <div className="flex items-center bg-stone-200 p-1 rounded-2xl border border-stone-300">
          <button
            onClick={() => setActiveMode('switches')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeMode === 'switches'
                ? "bg-[#181816] text-white shadow-md"
                : "text-stone-700 hover:text-stone-900"
            }`}
          >
            <Sliders className="w-4 h-4 text-amber-400" />
            <span>Switch Studio</span>
          </button>
          <button
            onClick={() => setActiveMode('tiles')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeMode === 'tiles'
                ? "bg-[#C85A32] text-white shadow-md"
                : "text-stone-700 hover:text-stone-900"
            }`}
          >
            <Grid3X3 className="w-4 h-4 text-white" />
            <span>Tile Studio</span>
          </button>
        </div>
      </div>

      {/* Wall Texture Selector Strip */}
      <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-stone-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 shrink-0">
          <Paintbrush className="w-4 h-4 text-stone-500" />
          <span className="text-xs font-mono font-bold uppercase text-stone-700">
            Wall Texture:
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          {wallOptions.map((wall) => {
            const isWallActive = activeWall.id === wall.id;
            return (
              <button
                key={wall.id}
                onClick={() => setActiveWall(wall)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer shrink-0 ${
                  isWallActive
                    ? 'border-[#C85A32] bg-stone-50 text-[#C85A32] font-semibold ring-1 ring-[#C85A32]'
                    : 'border-stone-300 bg-white text-stone-700 hover:border-stone-400'
                }`}
              >
                <span 
                  className="w-3.5 h-3.5 rounded-full border border-stone-400 shrink-0" 
                  style={{ background: wall.bg }} 
                />
                <span>{wall.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* --- STUDIO WORKSPACE (CANVAS + CONTROLS) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* LEFT / CENTER: THE LIVE INTERACTIVE CANVAS (7 COLS) */}
        <div className="lg:col-span-7 space-y-4">
          <div 
            className="w-full h-80 sm:h-[480px] lg:h-[520px] rounded-3xl border-2 border-stone-300 shadow-xl relative overflow-hidden flex items-center justify-center p-3 sm:p-6 transition-all duration-500"
            style={{ 
              background: activeWall.bg,
              boxShadow: 'inset 0 0 80px rgba(0,0,0,0.15), 0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            {/* Ambient Lighting Overlay */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
              ambientLight === 'warm' 
                ? 'bg-amber-500/10 mix-blend-color-dodge' 
                : 'bg-blue-400/5 mix-blend-overlay'
            }`} />

            {/* Micro wall texture effect */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* MODE A: MODULAR SWITCHBOARD LIVE TACTILE RENDER */}
            {activeMode === 'switches' && (
              <div className="flex flex-col items-center w-full max-w-sm sm:max-w-md lg:max-w-lg px-2">
                
                {/* Switchboard Plate Outer Frame */}
                <div 
                  className={`relative w-full h-28 sm:h-36 lg:h-40 rounded-2xl p-2.5 sm:p-4 shadow-2xl transition-all duration-300 flex items-center justify-between mx-auto`}
                  style={{
                    background: selectedRange.plateStyle,
                    border: selectedRange.borderStyle,
                    boxShadow: selectedRange.isGlass
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 2px 2px rgba(255,255,255,0.4), inset 0 -2px 3px rgba(0,0,0,0.5)'
                      : '0 20px 40px -10px rgba(0, 0, 0, 0.6)'
                  }}
                >
                  {/* Glass Bevel Edge Highlight */}
                  {selectedRange.isGlass && (
                    <div className="absolute inset-1.5 rounded-xl border border-white/25 pointer-events-none" />
                  )}

                  {/* Brand Monogram Laser Etch */}
                  <div className="absolute bottom-1 sm:bottom-1.5 left-3 sm:left-4 text-[6px] sm:text-[7px] font-mono tracking-widest text-stone-400 opacity-60">
                    {selectedRange.brand.toUpperCase()}
                  </div>
                  <div className="absolute top-1 sm:top-1.5 right-3 sm:right-4 text-[6px] sm:text-[7px] font-mono text-stone-400 opacity-60">
                    {selectedSize.id} MODULAR
                  </div>

                  {/* Inner Chassis with Rockers & Sockets */}
                  <div className="w-full h-full bg-black/20 rounded-xl p-1 sm:p-1.5 flex items-center justify-around gap-1 sm:gap-2">
                    
                    {/* Render Switches according to size */}
                    {[...Array(selectedSize.switches)].map((_, i) => {
                      const isOn = switchStates[i] ?? false;
                      return (
                        <div
                          key={i}
                          onClick={() => toggleSwitch(i)}
                          className={`flex-1 h-16 sm:h-20 rounded-lg cursor-pointer transition-all duration-150 select-none flex flex-col justify-between p-1.5 sm:p-2 relative group ${
                            isOn 
                              ? 'bg-stone-800 shadow-inner translate-y-1' 
                              : 'bg-stone-700 shadow-lg -translate-y-0.5 hover:bg-stone-650'
                          }`}
                          style={{
                            borderTop: isOn ? '1px solid #111' : '1px solid rgba(255,255,255,0.3)',
                            borderBottom: isOn ? '1px solid rgba(255,255,255,0.1)' : '3px solid #111'
                          }}
                        >
                          {/* Rocker Accent Band if Metallic Trim */}
                          {selectedRocker.id === 'metallic-trim' && (
                            <div className="absolute top-1/2 left-0 right-0 h-1 bg-amber-400/80 -translate-y-1/2" />
                          )}

                          {/* LED Status Light */}
                          <div className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full mx-auto transition-all ${
                            isOn 
                              ? 'bg-emerald-400 shadow-[0_0_10px_#34D399]' 
                              : 'bg-stone-500 opacity-50'
                          }`} />

                          <span className="text-[6px] sm:text-[7px] font-mono font-bold text-center text-stone-400">
                            {selectedRocker.id === 'touch-glass' ? 'TOUCH' : `R${i + 1}`}
                          </span>
                        </div>
                      );
                    })}

                    {/* Fan Regulator if 6M or 8M */}
                    {selectedSize.hasRegulator && (
                      <div className="w-10 sm:w-14 h-16 sm:h-20 bg-stone-800 rounded-lg border border-stone-700 flex flex-col items-center justify-center p-1 shadow-inner">
                        <div className="w-7 sm:w-9 h-7 sm:h-9 rounded-full bg-stone-700 border-2 border-stone-600 flex items-center justify-center shadow-md">
                          <div className="w-1 sm:w-1.5 h-2.5 sm:h-3 bg-amber-400 rounded-full" />
                        </div>
                        <span className="text-[5px] sm:text-[6px] font-mono text-stone-400 mt-0.5 sm:mt-1">REG</span>
                      </div>
                    )}

                    {/* Sockets according to size */}
                    {[...Array(selectedSize.sockets)].map((_, sIdx) => (
                      <div key={sIdx} className="w-12 sm:w-16 h-16 sm:h-20 bg-stone-800 rounded-lg border border-stone-700 flex flex-col items-center justify-center p-1 sm:p-1.5 shadow-inner">
                        <div className="w-3.5 h-3.5 rounded-full bg-stone-950 border border-stone-600 mb-1" />
                        <div className="flex gap-4">
                          <div className="w-2.5 h-2.5 rounded-full bg-stone-950 border border-stone-600" />
                          <div className="w-2.5 h-2.5 rounded-full bg-stone-950 border border-stone-600" />
                        </div>
                        <span className="text-[6px] font-mono text-stone-400 mt-1">16A SAFETY</span>
                      </div>
                    ))}

                  </div>
                </div>

                <p className="text-xs font-mono mt-6 text-stone-800 bg-white/90 px-3 py-1.5 rounded-full border border-stone-300 shadow-sm">
                  ⚡ Click individual switch rockers to toggle ON/OFF with realistic tactile mechanical sound
                </p>
              </div>
            )}

            {/* MODE B: TILE LAYING PATTERN LIVE RENDER */}
            {activeMode === 'tiles' && (
              <div className="w-full h-full p-4 flex flex-col items-center justify-center">
                
                {/* Pattern Grid simulation */}
                <div 
                  className="w-full h-4/5 rounded-2xl overflow-hidden shadow-2xl relative border-2 border-stone-400"
                  style={{
                    backgroundColor: selectedGrout.color,
                    padding: '3px'
                  }}
                >
                  {selectedPattern.id === 'straight' && (
                    <div className="w-full h-full grid grid-cols-4 grid-rows-3 gap-1">
                      {[...Array(12)].map((_, i) => (
                        <div 
                          key={i} 
                          className="w-full h-full shadow-inner relative overflow-hidden transition-all duration-300"
                          style={{
                            background: selectedTile.gradient,
                            backgroundColor: selectedTile.bg
                          }}
                        >
                          <div className="absolute top-1 left-1 text-[7px] font-mono text-stone-400 opacity-40">
                            {selectedTile.dimensions}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedPattern.id === 'brick' && (
                    <div className="w-full h-full flex flex-col gap-1 justify-between">
                      <div className="flex-1 flex gap-1">
                        <div className="w-1/3 h-full shadow-inner" style={{ background: selectedTile.gradient, backgroundColor: selectedTile.bg }} />
                        <div className="w-2/3 h-full shadow-inner" style={{ background: selectedTile.gradient, backgroundColor: selectedTile.bg }} />
                      </div>
                      <div className="flex-1 flex gap-1">
                        <div className="w-2/3 h-full shadow-inner" style={{ background: selectedTile.gradient, backgroundColor: selectedTile.bg }} />
                        <div className="w-1/3 h-full shadow-inner" style={{ background: selectedTile.gradient, backgroundColor: selectedTile.bg }} />
                      </div>
                      <div className="flex-1 flex gap-1">
                        <div className="w-1/2 h-full shadow-inner" style={{ background: selectedTile.gradient, backgroundColor: selectedTile.bg }} />
                        <div className="w-1/2 h-full shadow-inner" style={{ background: selectedTile.gradient, backgroundColor: selectedTile.bg }} />
                      </div>
                    </div>
                  )}

                  {selectedPattern.id === 'herringbone' && (
                    <div className="w-full h-full flex items-center justify-center overflow-hidden bg-stone-800">
                      <div className="transform rotate-45 scale-125 grid grid-cols-6 gap-1 w-full h-full">
                        {[...Array(24)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-full h-12 shadow-sm"
                            style={{
                              background: selectedTile.gradient,
                              backgroundColor: selectedTile.bg
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 mt-3 text-xs font-mono text-stone-800 bg-white/90 px-3 py-1 rounded-full border border-stone-300">
                  <span>Selected Pattern: <strong>{selectedPattern.name}</strong></span>
                  <span>•</span>
                  <span>Grout: <strong>{selectedGrout.name}</strong></span>
                </div>
              </div>
            )}

            {/* Bottom Floating Canvas Controls */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono pointer-events-auto">
              {/* Sound click toggle */}
              {activeMode === 'switches' && (
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="px-2.5 py-1 bg-black/70 text-white rounded-lg flex items-center gap-1.5 hover:bg-black transition-colors"
                >
                  {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5 text-stone-400" />}
                  <span>{soundEnabled ? 'Acoustic Click Sound ON' : 'Muted'}</span>
                </button>
              )}

              {/* Lighting ambiance toggle */}
              <div className="flex items-center gap-1 bg-black/70 text-white p-1 rounded-lg ml-auto">
                <button
                  onClick={() => setAmbientLight('warm')}
                  className={`px-2 py-0.5 rounded text-[11px] ${ambientLight === 'warm' ? 'bg-amber-600 font-bold' : 'text-stone-300'}`}
                >
                  Warm 3000K
                </button>
                <button
                  onClick={() => setAmbientLight('daylight')}
                  className={`px-2 py-0.5 rounded text-[11px] ${ambientLight === 'daylight' ? 'bg-blue-600 font-bold' : 'text-stone-300'}`}
                >
                  Daylight 6500K
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT: CONFIGURATION CONTROLS PANEL (5 COLS) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-stone-200 shadow-md space-y-6">
          
          {activeMode === 'switches' ? (
            <>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#C85A32] font-bold block">
                  Step 1: Select Plate Finish & Range
                </span>
                <h3 className="font-display font-bold text-lg text-stone-900 mt-0.5">
                  Modular Switch Plate Collection
                </h3>
                
                <div className="grid grid-cols-2 gap-2 mt-3">
                  {switchRanges.map((range) => {
                    const isSelected = selectedRange.id === range.id;
                    return (
                      <button
                        key={range.id}
                        onClick={() => setSelectedRange(range)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#C85A32] bg-[#FDF2EE] shadow-xs ring-1 ring-[#C85A32]'
                            : 'border-stone-200 hover:border-stone-400 bg-stone-50/50'
                        }`}
                      >
                        <span className="text-[9px] font-mono text-stone-500 uppercase block">
                          {range.tag}
                        </span>
                        <span className="text-xs font-bold text-stone-900 block mt-0.5 truncate">
                          {range.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Module Size Selector */}
              <div>
                <span className="text-[10px] font-mono uppercase text-[#C85A32] font-bold block">
                  Step 2: Choose Module Capacity
                </span>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {moduleSizes.map((size) => {
                    const isSelected = selectedSize.id === size.id;
                    return (
                      <button
                        key={size.id}
                        onClick={() => setSelectedSize(size)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#181816] bg-[#181816] text-white shadow-xs'
                            : 'border-stone-200 hover:border-stone-400 text-stone-800'
                        }`}
                      >
                        <span className="text-xs font-bold block">{size.label}</span>
                        <span className={`text-[10px] font-mono block mt-0.5 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                          {size.switches} Switches • {size.sockets} Sockets
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Rocker Style Selector */}
              <div>
                <span className="text-[10px] font-mono uppercase text-[#C85A32] font-bold block">
                  Step 3: Select Inner Rocker Style
                </span>
                <div className="space-y-1.5 mt-2">
                  {rockerStyles.map((rocker) => {
                    const isSelected = selectedRocker.id === rocker.id;
                    return (
                      <button
                        key={rocker.id}
                        onClick={() => setSelectedRocker(rocker)}
                        className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'border-[#C85A32] bg-[#FDF2EE] text-stone-900'
                            : 'border-stone-200 hover:border-stone-400 text-stone-700'
                        }`}
                      >
                        <div>
                          <span className="text-xs font-bold block">{rocker.name}</span>
                          <span className="text-[10px] text-stone-500">{rocker.desc}</span>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-[#C85A32] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-stone-200">
                <button
                  onClick={handleAddSwitchConfigToCart}
                  className="w-full py-3.5 px-4 bg-[#C85A32] hover:bg-[#A44522] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer text-xs sm:text-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add This Exact Switchboard to Estimate</span>
                </button>
              </div>
            </>
          ) : (
            <>
              {/* MODE B TILE CONTROLS */}
              <div>
                <span className="text-[10px] font-mono uppercase text-[#C85A32] font-bold block">
                  Step 1: Select Large Slab Design
                </span>
                <h3 className="font-display font-bold text-lg text-stone-900 mt-0.5">
                  Tiles & Marble Slabs
                </h3>
                
                <div className="space-y-2 mt-3">
                  {tileVarieties.map((tile) => {
                    const isSelected = selectedTile.id === tile.id;
                    return (
                      <button
                        key={tile.id}
                        onClick={() => setSelectedTile(tile)}
                        className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'border-[#C85A32] bg-[#FDF2EE] shadow-xs'
                            : 'border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded border border-stone-400 shrink-0" style={{ background: tile.bg }} />
                          <div>
                            <span className="text-xs font-bold text-stone-900 block">{tile.name}</span>
                            <span className="text-[10px] font-mono text-stone-500">{tile.brand} • {tile.dimensions}</span>
                          </div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-[#C85A32]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Pattern Selector */}
              <div>
                <span className="text-[10px] font-mono uppercase text-[#C85A32] font-bold block">
                  Step 2: Choose Laying Pattern
                </span>
                <div className="space-y-1.5 mt-2">
                  {tilePatterns.map((pat) => {
                    const isSelected = selectedPattern.id === pat.id;
                    return (
                      <button
                        key={pat.id}
                        onClick={() => setSelectedPattern(pat)}
                        className={`w-full p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'border-[#181816] bg-[#181816] text-white shadow-xs'
                            : 'border-stone-200 hover:border-stone-400 text-stone-800'
                        }`}
                      >
                        <div>
                          <span className="text-xs font-bold block">{pat.name}</span>
                          <span className={`text-[10px] block mt-0.5 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                            {pat.desc}
                          </span>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Grout Color Selector */}
              <div>
                <span className="text-[10px] font-mono uppercase text-[#C85A32] font-bold block">
                  Step 3: Grout Line & Epoxy Color
                </span>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {groutColors.map((grout) => {
                    const isSelected = selectedGrout.id === grout.id;
                    return (
                      <button
                        key={grout.id}
                        onClick={() => setSelectedGrout(grout)}
                        className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#C85A32] bg-[#FDF2EE] shadow-xs'
                            : 'border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        <span 
                          className="w-4 h-4 rounded-full border border-stone-400 mx-auto block mb-1" 
                          style={{ backgroundColor: grout.color }} 
                        />
                        <span className="text-[10px] font-bold text-stone-800 block truncate">
                          {grout.name.split(' ')[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-stone-200">
                <button
                  onClick={handleAddTileConfigToCart}
                  className="w-full py-3.5 px-4 bg-[#C85A32] hover:bg-[#A44522] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer text-xs sm:text-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add Tile + Grout Specification to Estimate</span>
                </button>
              </div>
            </>
          )}

        </div>

      </div>

    </div>
  );
}
