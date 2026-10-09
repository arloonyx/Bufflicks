import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, Sparkles, PlaySquare, Users, ShoppingBag, Search, Bell, Settings, ChevronRight, Gem
} from 'lucide-react';

export default function BufflicksLayout({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0e0e12] text-white flex font-sans overflow-x-hidden relative">
      
      {/* DESKTOP SIDEBAR */}
      <aside 
        className={`hidden md:flex h-screen sticky top-0 flex-col items-center py-6 bg-[#0e0e12] z-20 shrink-0 transition-all duration-300 ease-in-out ${
          isExpanded ? 'w-[240px] px-6' : 'w-[140px]' 
        }`}
      >
        <div className={`flex items-center mb-6 ${isExpanded ? 'justify-start gap-4 w-full' : 'justify-center w-full'}`}>
          <img 
            src="/photos/image/bufflicks-logo.png" 
            alt="Bufflicks Logo" 
            onClick={() => navigate('/')} 
            className="w-[48px] h-[48px] object-contain cursor-pointer shrink-0 hover:scale-105 transition-transform drop-shadow-[0_0_15px_rgba(255,23,68,0.2)]"
          />
          {isExpanded && (
            <span onClick={() => navigate('/')} className="text-lg font-black tracking-widest text-white uppercase animate-fade-in cursor-pointer">
              Bufflicks.
            </span>
          )}
        </div>
        
        <div className={`flex flex-col flex-1 justify-between bg-[#FEFEFE]/5 rounded-[15px] border border-white/5 py-8 transition-all duration-300 ${
          isExpanded ? 'w-full px-4' : 'w-[100px] px-0 items-center'
        }`}>
          <nav className={`flex flex-col gap-3 w-full ${isExpanded ? 'items-start' : 'items-center'}`}>
            <NavButton icon={<Home size={22} strokeWidth={2.3} />} label="Home" isExpanded={isExpanded} isActive={location.pathname === '/'} onClick={() => navigate('/')} />
            <NavButton icon={<Sparkles size={22} strokeWidth={2.3} />} label="Discover" isExpanded={isExpanded} isActive={location.pathname === '/discover'} onClick={() => navigate('/discover')} />
            <NavButton icon={<PlaySquare size={22} strokeWidth={2.3} />} label="Vault" isExpanded={isExpanded} isActive={location.pathname.includes('/vault')} />
            <NavButton icon={<Users size={22} strokeWidth={2.3} />} label="Community" isExpanded={isExpanded} isActive={location.pathname === '/community'} />
            <NavButton icon={<ShoppingBag size={22} strokeWidth={2.3} />} label="Shop" isExpanded={isExpanded} isActive={location.pathname === '/shop'} onClick={() => navigate('/shop')} />
          </nav>

          <div className={`mt-auto ${isExpanded ? 'w-full' : 'w-full flex justify-center'}`}>
           <button 
             onClick={() => setIsExpanded(!isExpanded)} 
             className={`w-[48px] h-[48px] flex items-center justify-center rounded-[12px] opacity-100 text-[#686877] hover:text-white transition-all hover:bg-white/5 ${isExpanded ? 'w-full gap-3 justify-start px-4' : ''}`}
           >
             <ChevronRight size={20} strokeWidth={2.5} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
             {isExpanded && <span className="text-sm font-semibold tracking-wide">Collapse</span>}
           </button>
          </div>
        </div>
      </aside>

      {/* MAIN VIEWPORT */}
      <div className="flex-1 flex flex-col min-w-0 pb-24 md:pb-0">
        
        {/* 
          GLOBAL TOP HEADER (PERFECTLY CENTERED & RESPONSIVE)
          Uses a 3-column flex grid to guarantee the search bar stays dead center!
        */}
        <header className="h-[84px] px-4 md:px-8 flex items-center justify-between sticky top-0 z-30 bg-[#0e0e12]/95 backdrop-blur-md border-b border-transparent">
          
          {/* COLUMN 1: LEFT SPACER & MOBILE LOGO */}
          <div className="flex-1 flex items-center">
            <div className="md:hidden flex items-center shrink-0">
              <img 
                src="/photos/image/bufflicks-logo.png" 
                alt="Bufflicks Logo" 
                onClick={() => navigate('/')} 
                className="w-10 h-10 object-contain cursor-pointer"
              />
            </div>
          </div>

          {/* COLUMN 2: CENTER SEARCH BAR */}
          <div className="flex-[2] w-full max-w-xl flex justify-center px-2 md:px-4">
            <div className="w-full relative flex items-center">
              <Search size={17} className="absolute left-4 md:left-5 text-[#686877]" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-white/5 border border-white/5 text-white placeholder-[#686877] rounded-full pl-10 md:pl-12 pr-4 py-[9px] md:py-[11px] text-[14px] focus:outline-none focus:border-white/20 transition-all shadow-sm" 
              />
            </div>
          </div>

          {/* COLUMN 3: RIGHT PROFILE CLUSTER */}
          <div className="flex-1 flex items-center justify-end gap-3 md:gap-4">
            <div className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/5 rounded-full px-4 py-2 cursor-pointer hover:bg-white/10 transition-colors shadow-sm">
              <Gem size={14} className="text-[#ff7a00] fill-[#ff7a00]" />
              <span className="text-[13px] font-semibold tracking-wide text-gray-200">1420 Shards</span>
            </div>
            
            <button className="relative hidden sm:flex w-10 h-10 rounded-full bg-white/5 border border-white/5 items-center justify-center text-[#9e9ea7] hover:text-white hover:bg-white/10 transition-all">
              <Bell size={17} />
              <span className="absolute top-[9px] right-[10px] w-[7px] h-[7px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
            </button>
            
            <button className="hidden md:flex w-10 h-10 rounded-full bg-white/5 border border-white/5 items-center justify-center text-[#9e9ea7] hover:text-white hover:bg-white/10 transition-all">
              <Settings size={17} />
            </button>
            
            <div className="w-9 h-9 md:w-[42px] md:h-[42px] rounded-[12px] bg-[#286090] p-[2px] ring-2 ring-transparent hover:ring-white/20 cursor-pointer overflow-hidden transition-all shrink-0">
              <img src="/photos/image/Posters/avatar.webp" alt="Avatar" className="w-full h-full object-cover rounded-[9px]" />
            </div>
          </div>

        </header>

        <main className="flex-1 px-4 md:px-8 pb-12 w-full max-w-[1600px] mx-auto">
          {children}
        </main>
      </div>

      {/* MOBILE BOTTOM NAVIGATION */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-[72px] bg-[#0a0a0c]/95 backdrop-blur-xl border-t border-white/10 z-50 flex items-center justify-around px-2 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <MobileNavButton icon={<Home size={24} strokeWidth={2} />} label="Home" isActive={location.pathname === '/'} onClick={() => navigate('/')} />
        <MobileNavButton icon={<Sparkles size={24} strokeWidth={2} />} label="Discover" isActive={location.pathname === '/discover'} onClick={() => navigate('/discover')} />
        <MobileNavButton icon={<PlaySquare size={24} strokeWidth={2} />} label="Vault" isActive={location.pathname.includes('/vault')} />
        <MobileNavButton icon={<Users size={24} strokeWidth={2} />} label="Social" isActive={location.pathname === '/community'} />
        <MobileNavButton icon={<ShoppingBag size={24} strokeWidth={2} />} label="Shop" isActive={location.pathname === '/shop'} onClick={() => navigate('/shop')} />
      </nav>
    </div>
  );
}

function NavButton({ icon, label, isActive, isExpanded, onClick }) {
  return (
    <button 
      onClick={onClick} 
      className={`flex items-center transition-all opacity-100 hover:scale-105 rounded-[12px] ${
        isExpanded ? 'w-full h-[48px] px-4 gap-4' : 'justify-center w-[48px] h-[48px]'
      } ${
        isActive 
          ? 'text-white border border-white/20 bg-white/5 shadow-sm'
          : 'text-[#686877] hover:text-white border border-transparent hover:bg-white/5'
      }`}
    >
      {icon}
      {isExpanded && <span className="text-sm font-semibold tracking-wide whitespace-nowrap animate-fade-in">{label}</span>}
    </button>
  );
}

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