import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  Lock, 
  Mail, 
  User, 
  Building2, 
  Briefcase, 
  CheckCircle2,
  Zap
} from 'lucide-react';
import { TRADER_INFO } from '../data/mockData';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  if (!isOpen) return null;

  const [loginMethod, setLoginMethod] = useState('quick'); // 'quick' | 'phone' | 'email'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [selectedRole, setSelectedRole] = useState('Trader / Counter Salesman');

  const demoRoles = [
    {
      id: 'trader',
      title: 'Showroom Owner / Trader',
      subtitle: 'Full access to Godown Stock & Trader Quick-Share Mode',
      badge: 'Best for Pitch',
      roleName: 'Shri Rajesh Sharma (Proprietor)'
    },
    {
      id: 'contractor',
      title: 'Building Contractor / Mistri',
      subtitle: 'Bulk cement, sand truck loads & wiring circuits',
      badge: 'Contractor',
      roleName: 'Vikram Singh (Apex Construction)'
    },
    {
      id: 'architect',
      title: 'Interior Architect / Designer',
      subtitle: 'Modular switch visualizer, GVT slabs & luxury fittings',
      badge: 'Architect',
      roleName: 'Ar. Ananya Mehta (Studio Design)'
    },
    {
      id: 'homeowner',
      title: 'Homeowner / Villa Client',
      subtitle: 'Turnkey renovation packages & room material estimation',
      badge: 'Client',
      roleName: 'Gaurav Agarwal (Mansarovar Site)'
    }
  ];

  const handleQuickLogin = (role) => {
    onLoginSuccess({
      name: role.roleName,
      role: role.title,
      type: role.id,
      phone: '+91 98290 12345'
    });
    onClose();
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    onLoginSuccess({
      name: name || (loginMethod === 'phone' ? `Client (${phoneNumber})` : 'Registered Trader'),
      role: selectedRole,
      type: 'user',
      phone: phoneNumber || '+91 98290 12345',
      email: email || 'trader@vishwakarmabuildmart.com'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-stone-300 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 bg-stone-100 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C85A32] text-white flex items-center justify-center font-bold">
              SV
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-stone-900 leading-tight">
                Enter Digital Showroom
              </h3>
              <span className="text-[11px] font-mono text-stone-500">
                {TRADER_INFO.legalEntity}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-800 rounded-full hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Login Method Tabs */}
        <div className="p-4 sm:p-6 space-y-6">
          <div className="flex rounded-xl bg-stone-100 p-1 border border-stone-200 text-xs font-mono font-semibold">
            <button
              onClick={() => setLoginMethod('quick')}
              className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                loginMethod === 'quick' ? 'bg-white text-[#C85A32] shadow-xs font-bold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>1-Click Demo Login</span>
            </button>
            <button
              onClick={() => setLoginMethod('phone')}
              className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                loginMethod === 'phone' ? 'bg-white text-[#C85A32] shadow-xs font-bold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp / Mobile</span>
            </button>
            <button
              onClick={() => setLoginMethod('email')}
              className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                loginMethod === 'email' ? 'bg-white text-[#C85A32] shadow-xs font-bold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email ID</span>
            </button>
          </div>

          {/* METHOD 1: 1-CLICK INSTANT DEMO ACCESS (PITCH OPTIMIZED) */}
          {loginMethod === 'quick' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-600">
                <span className="font-mono uppercase text-[10px] text-stone-400 font-bold">
                  Select Demo Persona (Instant 1-Click Access):
                </span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                  No Password Needed
                </span>
              </div>

              <div className="space-y-2">
                {demoRoles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => handleQuickLogin(role)}
                    className="w-full p-3.5 rounded-2xl border border-stone-200 hover:border-[#C85A32] hover:bg-[#FDF2EE]/60 bg-stone-50/60 text-left transition-all cursor-pointer group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-700 group-hover:text-[#C85A32] group-hover:border-[#C85A32] flex items-center justify-center shrink-0 shadow-2xs">
                        {role.id === 'trader' && <Building2 className="w-4 h-4" />}
                        {role.id === 'contractor' && <Briefcase className="w-4 h-4" />}
                        {role.id === 'architect' && <Sparkles className="w-4 h-4" />}
                        {role.id === 'homeowner' && <User className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-stone-900 group-hover:text-[#C85A32] transition-colors">
                            {role.title}
                          </span>
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-stone-200/80 text-stone-700 font-semibold">
                            {role.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">
                          {role.subtitle}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#C85A32] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* METHOD 2: MOBILE / WHATSAPP NUMBER OTP SIMULATION */}
          {loginMethod === 'phone' && (
            <form onSubmit={handleSubmitForm} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-stone-600 mb-1">
                  Your Name / Firm:
                </label>
                <div className="relative flex items-center">
                  <User className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra (Contractor)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-stone-900 focus:outline-hidden focus:border-[#C85A32]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-600 mb-1">
                  WhatsApp Mobile Number:
                </label>
                <div className="relative flex items-center">
                  <span className="text-xs font-mono text-stone-500 absolute left-3 font-bold">+91</span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="98290XXXXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-12 pr-3 py-2.5 text-xs text-stone-900 font-mono focus:outline-hidden focus:border-[#C85A32]"
                  />
                </div>
                <span className="text-[10px] font-mono text-stone-400 mt-1 block">
                  Simulated OTP will auto-verify for live pitch demo
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#C85A32] hover:bg-[#A44522] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Verify & Enter Showroom</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* METHOD 3: EMAIL & PASSWORD LOGIN */}
          {loginMethod === 'email' && (
            <form onSubmit={handleSubmitForm} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-stone-600 mb-1">Email ID:</label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
                  <input
                    type="email"
                    required
                    placeholder="trader@vishwakarmabuildmart.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-stone-900 focus:outline-hidden focus:border-[#C85A32]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-600 mb-1">Password:</label>
                <div className="relative flex items-center">
                  <Lock className="w-4 h-4 text-stone-400 absolute left-3 pointer-events-none" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-stone-900 focus:outline-hidden focus:border-[#C85A32]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#181816] hover:bg-stone-800 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Login to Showroom</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Security & GSTIN Footer */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-[11px] font-mono text-stone-500">
            <div className="flex items-center gap-1.5 text-emerald-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>GSTIN: {TRADER_INFO.gstin}</span>
            </div>
            <span>VKI Central Depot</span>
          </div>

        </div>

      </div>
    </div>
  );
}
