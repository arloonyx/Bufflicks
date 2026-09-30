import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BufflicksLayout from './components/BufflicksLayout';
import MovieDetail from './components/MovieDetail'; 
import CreatorDashboard from './components/CreatorDashboard';
import { Gem } from 'lucide-react';

const VAULT_ITEMS = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: 'SECRET LEVEL',
  price: 15,
  isNew: true,
  image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80'
}));

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[1600px] mx-auto font-['Outfit'] pb-10">
      
      {/* Unified Background Wrapper */}
      <div className="bg-[#6b0a12] rounded-[32px] p-5 shadow-2xl flex flex-col gap-6">
        
        {/* Exact Multi-Stop Gradient Hero */}
        <div 
          className="relative w-full h-[450px] rounded-[24px] flex flex-col items-center justify-between py-12 px-6 overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #ff1a00 0%, #ff858d 45%, #00c3ff 100%)'
          }}
        >
          {/* Made "Built by Fans" text smaller */}
          <p className="text-[9px] font-bold tracking-widest text-white/70 uppercase text-center leading-relaxed">
            Built by Fans.<br />Built for Fans.
          </p>
          
          <div className="text-center select-none flex flex-col items-center mt-4">
            {/* Shrunk the "A" relative to "BRAND" */}
            <h1 className="text-[5.5rem] md:text-[7.5rem] lg:text-[9rem] font-black tracking-tighter text-black leading-[0.8] uppercase flex items-baseline">
              <span className="text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] mr-2">A</span> 
              <span>BRAND<span className="text-[#ff003c]">.</span></span>
            </h1>
            <h1 className="text-[5.5rem] md:text-[7.5rem] lg:text-[9rem] font-black tracking-tighter text-black leading-[0.8] uppercase mt-1">
              NEW WORLD
            </h1>
          </div>
          
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full shadow-md border border-white/20 mt-auto">
            <div className="w-4 h-4 bg-[#ff0055] rounded-[4px] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
            <span className="text-xs font-bold tracking-widest text-white">BUFFLICKS.</span>
          </div>
        </div>

        {/* Fresh in Vault Section */}
        <section className="px-3 pb-2">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-white">Fresh in Vault</h2>
            <button className="text-sm font-bold tracking-wide text-white hover:text-gray-300 transition-colors">
              See All
            </button>
          </div>

          {/* Full-Bleed Movie Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3.5">
            {VAULT_ITEMS.map((item) => (
              <div 
                key={item.id}
                onClick={() => navigate(`/vault/${item.id}`)}
                className="group relative rounded-[12px] overflow-hidden cursor-pointer hover:-translate-y-1.5 transition-transform duration-300 shadow-xl aspect-[2/3]"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                {item.isNew && (
                  <span className="absolute top-2 right-2 bg-[#ff0055] text-white text-[9px] font-black px-2 py-0.5 rounded-[4px] uppercase tracking-widest shadow-md z-10">
                    NEW
                  </span>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-1 z-10">
                  <h3 className="text-[10px] font-bold tracking-widest text-white truncate uppercase drop-shadow-md">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#ff8800] drop-shadow-md">
                    <Gem size={10} className="fill-[#ff8800]" />
                    <span className="text-[11px] font-bold text-gray-200">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BufflicksLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vault/:id" element={<MovieDetail />} /> 
        <Route path="/creator" element={<CreatorDashboard />} /> 
      </Routes>
    </BufflicksLayout>
  );
}