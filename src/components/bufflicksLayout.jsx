import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  Sparkles, 
  PlaySquare, 
  Users, 
  Wallet, 
  Search, 
  Bell, 
  Settings, 
  ChevronRight,
  Gem
} from 'lucide-react';

export default function BufflicksLayout({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0e0e12] text-white flex font-sans overflow-x-hidden">
      {/* Dynamic Sidebar */}
      <aside 
        className={`h-screen sticky top-0 flex flex-col py-6 border-r border-white/5 bg-[#0e0e12] z-20 shrink-0 transition-all duration-300 ease-in-out ${
          isExpanded ? 'w-[240px] px-6' : 'w-[88px] items-center'
        }`}
      >
        <div className={`flex items-center mb-8 ${isExpanded ? 'justify-start gap-4' : 'justify-center'}`}>
          <div 
            onClick={() => navigate('/')} 
            className="w-11 h-11 bg-[#ff1744] rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/20 cursor-pointer shrink-0 hover:scale-105 transition-transform"
          >
            <div className="w-5 h-5 border-[2.5px] border-white rounded-md flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          </div>
          {isExpanded && (
            <span 
              onClick={() => navigate('/')}
              className="text-lg font-black tracking-widest text-white uppercase animate-fade-in cursor-pointer"
            >
              Bufflicks.
            </span>
          )}
        </div>
        
        <nav className={`flex flex-col gap-7 bg-[#17171e] py-8 rounded-[32px] relative border border-white/5 transition-all duration-300 ${
          isExpanded ? 'px-6 items-start' : 'px-4 items-center'
        }`}>
          {/* Moving Active Indicator */}
          <div 
            className="absolute -left-[1px] w-1 h-7 bg-white rounded-r-full shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-all duration-300"
            style={{ 
              top: location.pathname === '/' ? '32px' : 
                   location.pathname === '/creator' ? '232px' : '-100px'
            }} 
          />
          
          <NavButton 
            icon={<Home size={22} strokeWidth={2.3} />} 
            label="Home" 
            isExpanded={isExpanded} 
            isActive={location.pathname === '/'} 
            onClick={() => navigate('/')} 
          />
          <NavButton icon={<Sparkles size={22} strokeWidth={2.3} />} label="Discover" isExpanded={isExpanded} />
          <NavButton icon={<PlaySquare size={22} strokeWidth={2.3} />} label="Vault" isExpanded={isExpanded} />
          <NavButton icon={<Users size={22} strokeWidth={2.3} />} label="Community" isExpanded={isExpanded} />
          <NavButton 
            icon={<Wallet size={22} strokeWidth={2.3} />} 
            label="Earnings" 
            isExpanded={isExpanded} 
            isActive={location.pathname === '/creator'} 
            onClick={() => navigate('/creator')} 
          />
        </nav>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`mt-auto h-10 bg-[#17171e] rounded-xl flex items-center justify-center text-[#686877] hover:text-white hover:bg-[#20202a] transition-all border border-white/5 ${
            isExpanded ? 'w-full gap-3' : 'w-10'
          }`}
        >
          <ChevronRight 
            size={18} 
            strokeWidth={2.5} 
            className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
          {isExpanded && <span className="text-sm font-semibold tracking-wide">Collapse</span>}
        </button>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-[84px] px-8 flex items-center justify-between sticky top-0 z-30 bg-[#0e0e12]/90 backdrop-blur-md border-b border-transparent">
          <div className="flex-1 hidden md:block"></div>
          <div className="flex-1 max-w-xl w-full flex justify-center">
            <div className="w-full relative flex items-center">
              <Search size={17} className="absolute left-5 text-[#686877]" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-[#17171e] border border-white/5 text-white placeholder-[#686877] rounded-full pl-12 pr-4 py-[11px] text-sm focus:outline-none focus:border-white/20 transition-all shadow-sm" 
              />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-end gap-4 ml-6">
            <div className="flex items-center gap-2 bg-[#17171e] border border-white/5 rounded-full px-4 py-2 cursor-pointer hover:bg-[#20202a] transition-colors shadow-sm">
              <Gem size={14} className="text-[#ff7a00] fill-[#ff7a00]" />
              <span className="text-xs font-semibold tracking-wide text-gray-200">1420 Shards</span>
            </div>
            <button className="w-10 h-10 rounded-full bg-[#17171e] border border-white/5 flex items-center justify-center text-[#9e9ea7] hover:text-white hover:bg-[#20202a] transition-all"><Bell size={17} /></button>
            <button className="w-10 h-10 rounded-full bg-[#17171e] border border-white/5 flex items-center justify-center text-[#9e9ea7] hover:text-white hover:bg-[#20202a] transition-all"><Settings size={17} /></button>
            <div className="w-10 h-10 rounded-[10px] bg-[#286090] p-0.5 ml-1 ring-2 ring-transparent hover:ring-white/20 cursor-pointer overflow-hidden transition-all">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
                alt="Avatar" 
                className="w-full h-full object-cover rounded-lg" 
              />
            </div>
          </div>
        </header>
        <main className="flex-1 px-8 pb-12">
          {children}
        </main>
      </div>
    </div>
  );
}

function NavButton({ icon, label, isActive, isExpanded, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-4 transition-all hover:scale-105 ${
        isActive ? 'text-white' : 'text-[#686877] hover:text-white'
      }`}
    >
      {icon}
      {isExpanded && (
        <span className="text-sm font-semibold tracking-wide whitespace-nowrap animate-fade-in">
          {label}
        </span>
      )}
    </button>
  );
}