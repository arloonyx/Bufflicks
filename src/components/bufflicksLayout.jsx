import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, Sparkles, PlaySquare, Users, Wallet, Search, Bell, Settings, ChevronRight, Gem
} from 'lucide-react';

export default function BufflicksLayout({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0e0e12] text-white flex font-sans overflow-x-hidden relative">
      
      {/* DESKTOP SIDEBAR (Hidden on mobile) */}
      <aside 
        className={`hidden md:flex h-screen sticky top-0 flex-col py-6 border-r border-white/5 bg-[#0e0e12] z-20 shrink-0 transition-all duration-300 ease-in-out ${
          isExpanded ? 'w-[240px] px-6' : 'w-[88px] px-3'
        }`}
      >
        <div className={`flex items-center mb-6 ${isExpanded ? 'justify-start gap-4' : 'justify-center'}`}>
          <div onClick={() => navigate('/')} className="w-11 h-11 bg-[#ff1744] rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/20 cursor-pointer shrink-0 hover:scale-105 transition-transform">
            <div className="w-5 h-5 border-[2.5px] border-white rounded-md flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          </div>
          {isExpanded && (
            <span onClick={() => navigate('/')} className="text-lg font-black tracking-widest text-white uppercase animate-fade-in cursor-pointer">
              Bufflicks.
            </span>
          )}
        </div>
        
        <div className={`flex flex-col flex-1 justify-between bg-[#17171e] rounded-[32px] border border-white/5 py-8 w-full mb-2 transition-all duration-300 relative ${
          isExpanded ? 'px-4' : 'px-0 items-center'
        }`}>
          <div 
            className="absolute left-0 w-1 h-7 bg-white rounded-r-full shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-all duration-300"
            style={{ 
              top: location.pathname === '/' ? '32px' : 
                   location.pathname === '/creator' ? '232px' : '-100px'
            }} 
          />
          <nav className={`flex flex-col gap-7 w-full ${isExpanded ? 'items-start pl-2' : 'items-center'}`}>
            <NavButton icon={<Home size={22} strokeWidth={2.3} />} label="Home" isExpanded={isExpanded} isActive={location.pathname === '/'} onClick={() => navigate('/')} />
            <NavButton icon={<Sparkles size={22} strokeWidth={2.3} />} label="Discover" isExpanded={isExpanded} />
            <NavButton icon={<PlaySquare size={22} strokeWidth={2.3} />} label="Vault" isExpanded={isExpanded} />
            <NavButton icon={<Users size={22} strokeWidth={2.3} />} label="Community" isExpanded={isExpanded} />
            <NavButton icon={<Wallet size={22} strokeWidth={2.3} />} label="Earnings" isExpanded={isExpanded} isActive={location.pathname === '/creator'} onClick={() => navigate('/creator')} />
          </nav>
          <button onClick={() => setIsExpanded(!isExpanded)} className={`h-10 bg-[#0a0a0c] rounded-xl flex items-center justify-center text-[#686877] hover:text-white hover:bg-[#20202a] transition-all border border-white/5 ${isExpanded ? 'w-full gap-3' : 'w-10'}`}>
            <ChevronRight size={18} strokeWidth={2.5} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            {isExpanded && <span className="text-sm font-semibold tracking-wide">Collapse</span>}
          </button>
        </div>
      </aside>

      {/* MAIN VIEWPORT */}
      {/* Added pb-24 on mobile so the content doesn't get trapped behind the bottom nav */}
      <div className="flex-1 flex flex-col min-w-0 pb-24 md:pb-0">
        
        {/* RESPONSIVE HEADER */}
        <header className="h-[84px] px-4 md:px-8 flex items-center justify-between sticky top-0 z-30 bg-[#0e0e12]/90 backdrop-blur-md border-b border-transparent">
          
          {/* Mobile Logo (Only shows when sidebar is hidden) */}
          <div className="flex-1 md:hidden flex items-center">
            <div onClick={() => navigate('/')} className="w-10 h-10 bg-[#ff1744] rounded-xl flex items-center justify-center shadow-lg shadow-red-500/20 cursor-pointer">
              <div className="w-4 h-4 border-[2px] border-white rounded-md flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex-1 hidden md:block"></div>

          {/* Search Bar */}
          <div className="flex-[2] md:flex-1 max-w-xl w-full flex justify-center mx-2 md:mx-0">
            <div className="w-full relative flex items-center">
              <Search size={17} className="absolute left-4 md:left-5 text-[#686877]" />
              <input type="text" placeholder="Search..." className="w-full bg-[#17171e] border border-white/5 text-white placeholder-[#686877] rounded-full pl-10 md:pl-12 pr-4 py-[9px] md:py-[11px] text-sm focus:outline-none focus:border-white/20 transition-all shadow-sm" />
            </div>
          </div>

          {/* Action Cluster */}
          <div className="flex-1 flex items-center justify-end gap-3 md:gap-4 ml-2 md:ml-6">
            <div className="hidden lg:flex items-center gap-2 bg-[#17171e] border border-white/5 rounded-full px-4 py-2 cursor-pointer hover:bg-[#20202a] transition-colors shadow-sm">
              <Gem size={14} className="text-[#ff7a00] fill-[#ff7a00]" />
              <span className="text-xs font-semibold tracking-wide text-gray-200">1420 Shards</span>
            </div>
            {/* Hide Bell and Settings on very small screens to save space */}
            <button className="hidden sm:flex w-10 h-10 rounded-full bg-[#17171e] border border-white/5 items-center justify-center text-[#9e9ea7] hover:text-white hover:bg-[#20202a] transition-all"><Bell size={17} /></button>
            <button className="hidden md:flex w-10 h-10 rounded-full bg-[#17171e] border border-white/5 items-center justify-center text-[#9e9ea7] hover:text-white hover:bg-[#20202a] transition-all"><Settings size={17} /></button>
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-[10px] bg-[#286090] p-0.5 ml-1 ring-2 ring-transparent hover:ring-white/20 cursor-pointer overflow-hidden transition-all shrink-0">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 md:px-8 pb-12">
          {children}
        </main>
      </div>

      {/* MOBILE BOTTOM NAVIGATION (Hidden on desktop) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-[72px] bg-[#0a0a0c]/95 backdrop-blur-xl border-t border-white/10 z-50 flex items-center justify-around px-2 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <MobileNavButton icon={<Home size={24} strokeWidth={2} />} label="Home" isActive={location.pathname === '/'} onClick={() => navigate('/')} />
        <MobileNavButton icon={<Sparkles size={24} strokeWidth={2} />} label="Discover" isActive={location.pathname === '/discover'} />
        <MobileNavButton icon={<PlaySquare size={24} strokeWidth={2} />} label="Vault" isActive={location.pathname.includes('/vault')} />
        <MobileNavButton icon={<Users size={24} strokeWidth={2} />} label="Social" isActive={location.pathname === '/community'} />
        <MobileNavButton icon={<Wallet size={24} strokeWidth={2} />} label="Studio" isActive={location.pathname === '/creator'} onClick={() => navigate('/creator')} />
      </nav>

    </div>
  );
}

// Existing Desktop Nav Button
function NavButton({ icon, label, isActive, isExpanded, onClick }) {
  return (
    <button onClick={onClick} className={`flex items-center transition-all hover:scale-105 ${isExpanded ? 'gap-4 w-full' : 'justify-center'} ${isActive ? 'text-white' : 'text-[#686877] hover:text-white'}`}>
      {icon}
      {isExpanded && <span className="text-sm font-semibold tracking-wide whitespace-nowrap animate-fade-in">{label}</span>}
    </button>
  );
}

// New Mobile Nav Button
function MobileNavButton({ icon, label, isActive, onClick }) {
  return (
    <button onClick={onClick} className="flex flex-col items-center justify-center w-16 h-full gap-1.5 transition-transform active:scale-95">
      <div className={`transition-colors duration-300 ${isActive ? 'text-white translate-y-0.5' : 'text-[#686877]'}`}>
        {icon}
      </div>
      <span className={`text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${isActive ? 'text-[#ff1744] opacity-100' : 'text-transparent opacity-0 translate-y-1'}`}>
        {label}
      </span>
    </button>
  );
}