import React, { useState } from 'react';
import { 
  X, 
  User, 
  Phone, 
  Lock, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  Building2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TRADER_INFO } from '../data/mockData';

export default function AccountModal({ isOpen, onClose, currentUser, onSaveUser, onSignOut }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState(currentUser ? 'profile' : 'create'); // 'create' | 'signin' | 'profile'
  
  // Registration form
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [userRole, setUserRole] = useState('Building Contractor / Mistri');
  const [city, setCity] = useState('Jaipur');
  const [password, setPassword] = useState('');

  // Sign In form
  const [signInInput, setSignInInput] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const demoRoles = [
    {
      name: "Shri Rajesh Sharma",
      role: "Showroom Owner / Trader",
      phone: "+91 98290 12345",
      type: "trader"
    },
    {
      name: "Vikram Singh",
      role: "Building Contractor (Apex Infra)",
      phone: "+91 98295 44321",
      type: "contractor"
    },
    {
      name: "Ar. Ananya Mehta",
      role: "Senior Architect (Studio Design)",
      phone: "+91 98291 99887",
      type: "architect"
    },
    {
      name: "Gaurav Agarwal",
      role: "Homeowner (Civil Lines Villa)",
      phone: "+91 98298 77665",
      type: "client"
    }
  ];

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const newUser = {
      name: fullName || 'Registered Trade Member',
      role: userRole,
      phone: mobileNumber || '+91 98290 12345',
      city: city || 'Jaipur',
      type: userRole.includes('Contractor') ? 'contractor' : userRole.includes('Architect') ? 'architect' : 'client'
    };

    onSaveUser(newUser);
    try { confetti({ particleCount: 60, spread: 50, origin: { y: 0.6 } }); } catch (e) {}
    onClose();
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const existingUser = {
      name: signInInput ? `Client (${signInInput})` : 'Registered Trader',
      role: 'Trade Partner',
      phone: signInInput || '+91 98290 12345',
      type: 'user'
    };
    onSaveUser(existingUser);
    onClose();
  };

  const handleQuickDemoSelect = (role) => {
    onSaveUser(role);
    try { confetti({ particleCount: 50, spread: 45, origin: { y: 0.6 } }); } catch (e) {}
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-stone-300 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Amazon-style Modal Top Bar */}
        <div className="p-5 sm:p-6 bg-stone-100 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C85A32] text-white flex items-center justify-center font-bold font-display text-lg">
              SV
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-stone-900 leading-tight">
                {currentUser ? 'Your Trade Account' : 'Customer & Contractor Account'}
              </h3>
              <span className="text-[11px] font-mono text-stone-500">
                {TRADER_INFO.name}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-800 rounded-full hover:bg-stone-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Headers */}
        <div className="px-5 pt-4">
          <div className="flex rounded-xl bg-stone-100 p-1 border border-stone-200 text-xs font-mono font-semibold">
            {!currentUser ? (
              <>
                <button
                  onClick={() => setActiveTab('create')}
                  className={`flex-1 py-2 rounded-lg transition-all text-center cursor-pointer ${
                    activeTab === 'create' ? 'bg-white text-[#C85A32] shadow-xs font-bold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Create Account
                </button>
                <button
                  onClick={() => setActiveTab('signin')}
                  className={`flex-1 py-2 rounded-lg transition-all text-center cursor-pointer ${
                    activeTab === 'signin' ? 'bg-white text-[#C85A32] shadow-xs font-bold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Sign In
                </button>
              </>
            ) : (
              <button
                className="flex-1 py-2 rounded-lg bg-white text-[#C85A32] shadow-xs font-bold text-center"
              >
                Profile & Dispatches
              </button>
            )}
          </div>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-6 space-y-5">
          
          {/* TAB 1: CREATE ACCOUNT (AMAZON STYLE) */}
          {activeTab === 'create' && !currentUser && (
            <form onSubmit={handleCreateAccount} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-stone-600 mb-1">Your Full Name:</label>
                <div className="relative flex items-center">
                  <User className="w-4 h-4 text-stone-400 absolute left-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-[#C85A32]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-600 mb-1">Mobile / WhatsApp Number:</label>
                <div className="relative flex items-center">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3" />
                  <input
                    type="tel"
                    required
                    inputMode="tel"
                    placeholder="+91 98290 12345"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm text-stone-900 font-mono focus:outline-hidden focus:border-[#C85A32]"
                  />
                </div>
                <span className="text-[10px] font-mono text-stone-400 mt-0.5 block">
                  Wholesale estimate slips will be sent to this WhatsApp number.
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-stone-600 mb-1">I am a:</label>
                  <select
                    value={userRole}
                    onChange={(e) => setUserRole(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2.5 py-2.5 text-xs text-stone-900 focus:outline-hidden focus:border-[#C85A32] cursor-pointer"
                  >
                    <option value="Building Contractor / Mistri">Contractor / Builder</option>
                    <option value="Interior Architect / Designer">Interior Architect</option>
                    <option value="Villa / Homeowner Client">Villa / Homeowner</option>
                    <option value="Electrical Contractor">Electrical / MEP</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-600 mb-1">Project City:</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-2.5 py-2.5 text-xs text-stone-900 focus:outline-hidden focus:border-[#C85A32] cursor-pointer"
                  >
                    <option value="Jaipur">Jaipur (Central Depo)</option>
                    <option value="Kota">Kota</option>
                    <option value="Jodhpur">Jodhpur</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Other">Other Rajasthan</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#C85A32] hover:bg-[#A44522] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Create Free Trade Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* TAB 2: SIGN IN */}
          {activeTab === 'signin' && !currentUser && (
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-stone-600 mb-1">Mobile Number or Email:</label>
                <div className="relative flex items-center">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3" />
                  <input
                    type="text"
                    required
                    placeholder="+91 98290 12345 or your@email.com"
                    value={signInInput}
                    onChange={(e) => setSignInInput(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-[#C85A32]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-600 mb-1">Password / PIN:</label>
                <div className="relative flex items-center">
                  <Lock className="w-4 h-4 text-stone-400 absolute left-3" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-hidden focus:border-[#C85A32]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#181816] hover:bg-stone-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Sign In to Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* PROFILE VIEW (IF SIGNED IN) */}
          {currentUser && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#C85A32] font-bold uppercase">Active Account</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h4 className="font-display font-bold text-lg text-stone-900">{currentUser.name}</h4>
                <p className="text-xs font-mono text-stone-600">{currentUser.role} • {currentUser.phone}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-xl bg-[#C85A32] text-white font-bold text-xs cursor-pointer"
                >
                  Continue Browsing
                </button>
                <button
                  onClick={() => {
                    onSignOut();
                    setActiveTab('create');
                  }}
                  className="px-4 py-2.5 rounded-xl bg-stone-200 text-stone-800 hover:bg-rose-100 hover:text-rose-700 font-bold text-xs cursor-pointer transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}

          {/* Quick Demo Personas (One-Click Testing for Pitch) */}
          <div className="pt-3 border-t border-stone-200">
            <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block mb-2">
              Or Instant Demo Switch (For Pitch Presentation):
            </span>
            <div className="grid grid-cols-2 gap-2">
              {demoRoles.map((r, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleQuickDemoSelect(r)}
                  className="p-2.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-amber-50 hover:border-amber-300 text-left transition-all cursor-pointer"
                >
                  <span className="text-xs font-bold text-stone-900 block truncate">{r.name}</span>
                  <span className="text-[10px] font-mono text-stone-500 block truncate">{r.role}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
