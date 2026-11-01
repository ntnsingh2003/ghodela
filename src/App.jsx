import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';
import EstimateCartDrawer from './components/EstimateCartDrawer';
import ProductSpecsModal from './components/ProductSpecsModal';
import PrintableEstimateSlip from './components/PrintableEstimateSlip';
import Toast from './components/Toast';
import AccountModal from './components/AccountModal';
import GhodelaIntroSplash from './components/GhodelaIntroSplash';

import ShowroomHomeView from './views/ShowroomHomeView';
import CatalogueView from './views/CatalogueView';
import VisualizerStudioView from './views/VisualizerStudioView';
import LookbooksView from './views/LookbooksView';
import CalculatorView from './views/CalculatorView';
import TraderQuickShareView from './views/TraderQuickShareView';

import { TRADER_INFO, PRODUCTS } from './data/mockData';
import { ShieldCheck, Warehouse, Phone, MessageSquare, MapPin, Mail, Clock, Layers, Sparkles, LogOut, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  // Optional Account State (Amazon-style, never blocks browsing)
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('svb_current_user');
      if (savedUser) return JSON.parse(savedUser);
    } catch (e) {}
    return null;
  });

  const [isAccountOpen, setIsAccountOpen] = useState(false);

  // Navigation State
  const [currentView, setCurrentView] = useState('home');
  const [catalogueInitialCategory, setCatalogueInitialCategory] = useState('all');
  const [catalogueInitialSubCategory, setCatalogueInitialSubCategory] = useState('all');
  const [catalogueInitialSearch, setCatalogueInitialSearch] = useState('');

  // Cart State (Persisted in localStorage with 2 starter sample items for instant pitch demo)
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('svb_estimate_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {}

    // Starter demo items
    return [
      {
        id: 'elec-1',
        name: 'Arteor Crystal Toughened Glass Modular Plate (8-Module)',
        brand: 'Legrand France',
        sku: 'SVB-SW-LEG-8M',
        finish: 'Smoked Obsidian Black',
        dimensionsUnit: '8-Module Horizontal (245 x 90mm)',
        unit: 'Pieces',
        quantity: 12,
        rateEstimateRange: '₹ 1,420 – ₹ 1,750 / Plate'
      },
      {
        id: 'tile-1',
        name: 'Italian Statuario Royale Glazed Vitrified Tile (GVT Slab)',
        brand: 'Kajaria Eternity',
        sku: 'SVB-TL-KAJ-1206',
        finish: 'Carving Satin Silk',
        dimensionsUnit: '600 x 1200mm | 2 Pcs / Box (15.5 Sq.Ft)',
        unit: 'Boxes',
        quantity: 35,
        rateEstimateRange: '₹ 78 – ₹ 92 / Sq.Ft'
      }
    ];
  });

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductForSpecs, setSelectedProductForSpecs] = useState(null);
  const [printableSlipCustomer, setPrintableSlipCustomer] = useState(null);
  const [traderModeActive, setTraderModeActive] = useState(false);
  const [toast, setToast] = useState(null);

  // Sync state
  useEffect(() => {
    try {
      localStorage.setItem('svb_estimate_cart', JSON.stringify(cartItems));
    } catch (e) {}
  }, [cartItems]);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('svb_current_user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('svb_current_user');
      }
    } catch (e) {}
  }, [currentUser]);

  // Read URL query parameters on initial load (Deep-Linking for Trader Quick-Share)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get('tab');
      const cat = params.get('category');
      const sub = params.get('sub');
      const prodId = params.get('product');

      if (tab) {
        setCurrentView(tab);
      }
      if (cat) {
        setCatalogueInitialCategory(cat);
      }
      if (sub) {
        setCatalogueInitialSubCategory(sub);
      }
      if (prodId) {
        const prod = PRODUCTS.find(p => p.id === prodId);
        if (prod) {
          setSelectedProductForSpecs(prod);
        }
      }
    } catch (e) {}
  }, []);

  const showToast = ({ type = 'info', title, message }) => {
    setToast({ type, title, message });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  // Add single item or multiple to cart
  const handleAddToCart = ({ product, quantity, finish, unit }) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === product.id && item.finish === finish);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          brand: product.brand,
          sku: product.sku,
          dimensionsUnit: product.dimensionsUnit,
          finish: finish || 'Standard',
          unit: unit || product.unit,
          quantity: quantity || 1,
          rateEstimateRange: product.rateEstimateRange
        }
      ];
    });
  };

  // Add pre-built bundle/package
  const handleAddPackage = (pkg) => {
    pkg.defaultItems.forEach(pkgItem => {
      const prod = PRODUCTS.find(p => p.id === pkgItem.id);
      if (prod) {
        handleAddToCart({
          product: prod,
          quantity: pkgItem.qty,
          finish: pkgItem.finish,
          unit: pkgItem.unit
        });
      }
    });
  };

  const handleUpdateQuantity = (index, qty) => {
    setCartItems(prev => {
      const updated = [...prev];
      updated[index].quantity = qty;
      return updated;
    });
  };

  const handleRemoveItem = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
    showToast({
      type: 'info',
      title: 'Item Removed',
      message: 'Line item removed from estimate cart.'
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
    showToast({
      type: 'info',
      title: 'Cart Cleared',
      message: 'All items have been cleared.'
    });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    showToast({
      type: 'info',
      title: 'Signed Out',
      message: 'You have signed out from trade account.'
    });
  };

  // Navigate with params
  const handleNavigate = (view, params = {}) => {
    setCurrentView(view);
    if (params.category) setCatalogueInitialCategory(params.category);
    if (params.subCategory) setCatalogueInitialSubCategory(params.subCategory);
    if (params.searchQuery) setCatalogueInitialSearch(params.searchQuery);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- DIRECT UNBLOCKED RENDERING: FULL ARCHITECTURAL EXPERIENCE ---
  return (
    <div className="min-h-screen bg-[#F6F4F0] text-[#181816] flex flex-col justify-between selection:bg-[#C85A32] selection:text-white relative overflow-x-hidden">
      
      {/* 0. CINEMATIC LUXURY "GHODELA" INTRO SPLASH REVEAL */}
      <GhodelaIntroSplash />

      {/* AMBIENT FIXED ARCHITECTURAL PHOTO BACKDROP (GPU ACCELERATED SMOOTH SCROLL) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden will-change-transform transform-gpu">
        {/* Subtle Luxury Architectural Interior Photo Texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.02] mix-blend-multiply"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80')`
          }}
        />
        {/* Ambient Warm Architectural Light Glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#C85A32]/4 blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-[#B08D57]/3 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-stone-400/5 blur-3xl" />
      </div>

      {/* 1. STICKY ARCHITECTURAL NAVBAR */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        traderModeActive={traderModeActive}
        currentUser={currentUser}
        onOpenAccountModal={() => setIsAccountOpen(true)}
        onLogout={handleLogout}
        onSelectProduct={(product) => setSelectedProductForSpecs(product)}
      />

      {/* 3. MAIN DYNAMIC VIEW ROUTER */}
      <main className="flex-1">
        {currentView === 'home' && (
          <ShowroomHomeView
            onNavigate={handleNavigate}
            onOpenProductSpecs={(prod) => setSelectedProductForSpecs(prod)}
            onAddPackageToCart={handleAddPackage}
            onShowToast={showToast}
            onOpenTraderShare={() => setCurrentView('tradershare')}
          />
        )}

        {currentView === 'catalogue' && (
          <CatalogueView
            initialCategory={catalogueInitialCategory}
            initialSubCategory={catalogueInitialSubCategory}
            initialSearch={catalogueInitialSearch}
            onOpenProductSpecs={(prod) => setSelectedProductForSpecs(prod)}
            onAddToCart={handleAddToCart}
            onShowToast={showToast}
          />
        )}

        {currentView === 'visualizer' && (
          <VisualizerStudioView
            onAddToCart={handleAddToCart}
            onShowToast={showToast}
          />
        )}

        {currentView === 'lookbooks' && (
          <LookbooksView
            onAddToCart={handleAddToCart}
            onShowToast={showToast}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'calculator' && (
          <CalculatorView
            onAddToCart={handleAddToCart}
            onShowToast={showToast}
          />
        )}

        {currentView === 'tradershare' && (
          <TraderQuickShareView
            onShowToast={showToast}
          />
        )}
      </main>

      {/* 4. ARCHITECTURAL LUXURY FOOTER */}
      <footer className="bg-[#181816] text-[#E5E0D8] border-t border-stone-800 pt-12 pb-24 lg:pb-12 mt-16">
        <div className="content-container space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Col 1: Clean Brand Monogram & Title */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#181816] border border-stone-700 text-white flex items-center justify-center font-bold text-xs tracking-wider">
                  G
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-sm text-white tracking-wider uppercase">
                    GHODELA
                  </h3>
                  <span className="text-[10px] font-mono text-[#B08D57] block tracking-widest uppercase">
                    Architectural Surfaces & Living
                  </span>
                </div>
              </div>
              <p className="text-xs text-stone-400 max-w-sm">
                Curated modular switch plates, luxury porcelain slabs, and designer bath fixtures.
              </p>
            </div>

            {/* Col 2: Fast Navigation Links */}
            <div className="flex flex-wrap items-center justify-start md:justify-center gap-x-6 gap-y-2 text-xs text-stone-400">
              <button onClick={() => handleNavigate('home')} className="hover:text-white transition-colors cursor-pointer">Showroom</button>
              <button onClick={() => handleNavigate('catalogue')} className="hover:text-white transition-colors cursor-pointer">Collections</button>
              <button onClick={() => handleNavigate('visualizer')} className="hover:text-white transition-colors cursor-pointer">3D Studio</button>
              <button onClick={() => handleNavigate('lookbooks')} className="hover:text-white transition-colors cursor-pointer">Inspirations</button>
              <button onClick={() => handleNavigate('calculator')} className="hover:text-white transition-colors cursor-pointer">Estimator</button>
            </div>

            {/* Col 3: Instant WhatsApp & Account */}
            <div className="flex flex-col sm:flex-row items-stretch md:items-center justify-end gap-3">
              <a
                href={`https://wa.me/${TRADER_INFO.flagshipShowroom.whatsapp.replace('+', '')}?text=${encodeURIComponent("Namaste, I am interested in viewing materials and getting a quotation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 bg-[#128C7E] hover:bg-[#0E7569] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>

              {currentUser ? (
                <button
                  onClick={handleLogout}
                  className="py-2.5 px-4 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-mono rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsAccountOpen(true)}
                  className="py-2.5 px-4 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-mono rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Account</span>
                </button>
              )}
            </div>

          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-stone-500">
            <div>
              © 2026 {TRADER_INFO.legalEntity}.
            </div>
            <div>
              Digital Experience Showroom Prototype
            </div>
          </div>

        </div>
      </footer>

      {/* 5. MOBILE BOTTOM NAVIGATION */}
      <MobileBottomNav
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* 6. SLIDE-OVER ESTIMATE CART DRAWER */}
      <EstimateCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOpenPrintSlip={(custInfo) => {
          setPrintableSlipCustomer(custInfo);
          setIsCartOpen(false);
        }}
        onShowToast={showToast}
      />

      {/* 7. FULL TECHNICAL SPECS MODAL */}
      <ProductSpecsModal
        product={selectedProductForSpecs}
        onClose={() => setSelectedProductForSpecs(null)}
        onAddToCart={handleAddToCart}
        onShowToast={showToast}
      />

      {/* 8. PRINTABLE OFFICIAL ESTIMATE SLIP MODAL */}
      {printableSlipCustomer && (
        <PrintableEstimateSlip
          cartItems={cartItems}
          customerInfo={printableSlipCustomer}
          onClose={() => setPrintableSlipCustomer(null)}
        />
      )}

      {/* 9. FLOATING TOAST NOTIFICATION */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />

      {/* 10. OPTIONAL ACCOUNT MODAL (AMAZON STYLE) */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        currentUser={currentUser}
        onSaveUser={(user) => {
          setCurrentUser(user);
          showToast({
            type: 'success',
            title: 'Trade Account Ready',
            message: `Welcome, ${user.name}! Your account profile has been saved.`
          });
        }}
        onSignOut={() => {
          setCurrentUser(null);
          showToast({
            type: 'info',
            title: 'Signed Out',
            message: 'You have signed out from trade account.'
          });
        }}
      />

    </div>
  );
}
