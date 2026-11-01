import React, { useState, useRef, useEffect } from 'react';
import { 
  Building2, 
  Layers, 
  Sliders, 
  BookOpen, 
  Calculator, 
  Share2, 
  ShoppingBag, 
  Search, 
  X, 
  ArrowRight,
  Menu,
  Sparkles,
  LogOut,
  UserCheck,
  User
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/mockData';

export default function Navbar({ 
  currentView, 
  setCurrentView, 
  cartCount, 
  onOpenCart, 
  traderModeActive, 
  currentUser,
  onLogout,
  onSelectProduct,
  onOpenAccountModal
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchInputRef = useRef(null);

  // Filtered search results
  const searchResults = searchQuery.trim() === "" ? [] : PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.subCategory.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 6);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const navItems = [
    { id: "home", label: "Showroom", icon: Building2 },
    { id: "catalogue", label: "Collections", icon: Layers },
    { id: "visualizer", label: "3D Studio", icon: Sliders },
    { id: "lookbooks", label: "Inspirations", icon: BookOpen },
    { id: "calculator", label: "Estimator", icon: Calculator }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-[#E2DDD5] shadow-xs">
      <div className="content-container">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-2 sm:gap-4">
          
          {/* Clean Architectural Brand Logo */}
          <div 
            onClick={() => setCurrentView("home")}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-[#181816] text-white flex items-center justify-center shadow-md group-hover:bg-[#C85A32] transition-colors shrink-0 font-bold text-base tracking-widest border border-stone-800">
              G
            </div>
            <div>
              <span className="font-display font-extrabold text-sm sm:text-base xl:text-lg tracking-wider text-[#181816] block uppercase">
                GHODELA
              </span>
              <p className="text-[9px] font-mono tracking-widest uppercase text-stone-500">
                Surfaces & Living
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`relative px-2.5 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "text-[#C85A32] bg-[#C85A32]/8 font-semibold"
                      : item.special && traderModeActive
                      ? "text-amber-800 bg-amber-500/15 font-semibold"
                      : "text-stone-700 hover:text-[#181816] hover:bg-stone-100"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#C85A32]' : 'text-stone-400'}`} />
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#C85A32] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons (User Session, Search, Cart & Mobile Menu) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            
            {/* Amazon-style Account & Lists Button */}
            <button
              onClick={onOpenAccountModal}
              className="flex items-center gap-2 bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-xl border border-stone-300 text-xs transition-all cursor-pointer shadow-2xs group"
              title={currentUser ? "View Your Trade Profile" : "Create Trade Account or Sign In (Optional)"}
            >
              {currentUser ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <div className="text-left leading-tight hidden sm:block">
                    <span className="text-[9px] font-mono text-stone-500 uppercase block">Hello, {currentUser.name ? currentUser.name.split(' ')[0] : 'Partner'}</span>
                    <span className="font-bold text-stone-900 block truncate max-w-[110px]">{currentUser.role ? currentUser.role.split(' ')[0] : 'Account'}</span>
                  </div>
                  <UserCheck className="w-4 h-4 text-stone-700 sm:hidden" />
                </>
              ) : (
                <>
                  <User className="w-4 h-4 text-stone-600 group-hover:text-[#C85A32] transition-colors" />
                  <div className="text-left leading-tight hidden sm:block">
                    <span className="text-[9px] font-mono text-stone-500 uppercase block">Hello, Sign In</span>
                    <span className="font-bold text-stone-900 block">Create Account</span>
                  </div>
                </>
              )}
            </button>

            {/* Instant Search Bar Button */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-stone-100 border border-stone-300 rounded-full px-3 py-1.5 w-48 sm:w-64 shadow-inner">
                  <Search className="w-4 h-4 text-stone-400 mr-2 shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search switches, tiles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden"
                  />
                  <button 
                    onClick={() => { setSearchQuery(""); setSearchOpen(false); }}
                    className="text-stone-400 hover:text-stone-600 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors flex items-center gap-1 cursor-pointer"
                  title="Search products & materials"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden md:inline text-xs text-stone-500 font-mono">Search</span>
                </button>
              )}

              {/* Instant Search Live Results Dropdown */}
              {searchOpen && searchResults.length > 0 && (
                <div className="absolute top-12 right-0 w-72 sm:w-96 bg-white border border-stone-200 shadow-2xl rounded-2xl p-2 z-50">
                  <div className="text-[10px] font-mono text-stone-400 uppercase px-2 py-1 border-b border-stone-100">
                    Live Stock Matches ({searchResults.length})
                  </div>
                  <div className="divide-y divide-stone-100 max-h-80 overflow-y-auto">
                    {searchResults.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          if (onSelectProduct) onSelectProduct(p);
                          setSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="p-2 hover:bg-stone-50 cursor-pointer rounded-lg flex items-center justify-between transition-colors"
                      >
                        <div>
                          <div className="text-xs font-semibold text-stone-900">{p.name}</div>
                          <div className="text-[11px] font-mono text-stone-500 flex items-center gap-2">
                            <span>{p.brand}</span>
                            <span>•</span>
                            <span className="text-[#C85A32]">{p.rateEstimateRange}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Estimate Cart Trigger Button */}
            <button
              onClick={onOpenCart}
              className="relative px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#A44522] text-white flex items-center gap-1.5 sm:gap-2 shadow-sm transition-all cursor-pointer group shrink-0"
              title="Open WhatsApp Estimate Cart"
            >
              <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
              <div className="hidden sm:block text-left leading-none">
                <span className="text-[9px] uppercase font-mono block text-white/80">Quotation</span>
                <span className="text-xs font-bold block">Cart</span>
              </div>
              <span className="px-1.5 py-0.2 rounded-full bg-white text-[#C85A32] text-xs font-mono font-bold">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:bg-stone-100 rounded-xl cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 py-3 space-y-1">
            <div className="px-3 py-2 bg-stone-50 rounded-xl mb-2 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#C85A32]" />
                <span className="font-semibold text-stone-800">
                  {currentUser ? currentUser.name : 'Trade Visitor'}
                </span>
              </div>
              <button
                onClick={() => {
                  onOpenAccountModal();
                  setMobileMenuOpen(false);
                }}
                className="text-[#C85A32] font-mono text-[11px] font-bold cursor-pointer"
              >
                {currentUser ? 'Manage Profile' : 'Create Account'}
              </button>
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-between cursor-pointer ${
                    isActive ? "bg-[#C85A32] text-white" : "text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
