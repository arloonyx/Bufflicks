import React, { useState } from 'react';
import { Play, Bookmark, PlusSquare, MonitorPlay, Share, MoreHorizontal, X } from 'lucide-react';

// Mock Data for the New Trailers Grid
const TRAILERS = [
  { id: 1, title: 'Wednesday: Season One', image: '/photos/image/Posters/wednesday.jpg' },
  { id: 2, title: 'Dune: Part One', image: '/photos/image/Posters/dune.webp' },
  { id: 3, title: 'Spider-Man: Across the Spid...', image: '/photos/image/Posters/sider.jpg' },
  { id: 4, title: 'Iron Lung', image: '/photos/image/Posters/iron lung.webp' },
  { id: 5, title: 'Wednesday: Season One', image: '/photos/image/Posters/wednesday.jpg' },
  { id: 6, title: 'Dune: Part One', image: '/photos/image/Posters/dune.webp' },
  { id: 7, title: 'Spider-Man: Across the Spid...', image: '/photos/image/Posters/sider.jpg' },
  { id: 8, title: 'Iron Lung', image: '/photos/image/Posters/iron lung.webp' },
  { id: 9, title: 'Wednesday: Season One', image: '/photos/image/Posters/wednesday.jpg' },
  { id: 10, title: 'Dune: Part One', image: '/photos/image/Posters/dune.webp' },
  { id: 11, title: 'Spider-Man: Across the Spid...', image: '/photos/image/Posters/sider.jpg' },
  { id: 12, title: 'Iron Lung', image: '/photos/image/Posters/iron lung.webp' },
];

export default function Discover() {
  const filters = ['New Trailers', 'Bites', 'Release Calendar', 'Box Office', 'Hip-Hop', 'Podcast', 'Audiobooks'];
  const [activeFilter, setActiveFilter] = useState('New Trailers');
  
  // STATE FOR THE LIGHTBOX MODAL
  const [selectedTrailer, setSelectedTrailer] = useState(null);

  return (
    <div className="w-full font-sans pt-4 pb-20 flex flex-col items-start justify-start relative">
      
      {/* FILTER BAR */}
      <div className="flex items-center overflow-x-auto gap-[10px] mb-8 lg:mb-10 w-full snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap px-6 h-[35px] flex items-center justify-center rounded-full text-[13px] transition-all snap-start ${
              activeFilter === filter 
                ? 'bg-white text-black font-bold' 
                : 'text-gray-300 font-medium hover:text-white hover:bg-white/10'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* --- VIEW 1: NEW TRAILERS GRID --- */}
      {activeFilter === 'New Trailers' && (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-x-4 md:gap-y-8 w-full animate-fade-in">
          {TRAILERS.map((trailer) => (
            // Added onClick handler here to open the trailer!
            <div 
              key={trailer.id} 
              className="flex flex-col group cursor-pointer w-full"
              onClick={() => setSelectedTrailer(trailer)}
            >
              <div className="relative w-full aspect-[406/272] rounded-[8px] sm:rounded-[12px] overflow-hidden bg-[#17171e]">
                <img 
                  src={trailer.image} 
                  alt={trailer.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={16} className="fill-black text-black ml-0.5 sm:ml-1 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-white text-[13px] sm:text-[15px] font-semibold mt-2 sm:mt-3 truncate tracking-wide">
                {trailer.title}
              </h3>
            </div>
          ))}
        </div>
      )}

      {/* --- VIEW 2: BITES (SPIDER-MAN FEATURED) --- */}
      {activeFilter === 'Bites' && (
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-10 lg:gap-20 w-full m-0 p-0 animate-fade-in">
          
          <div className="relative w-[80%] max-w-[280px] sm:max-w-[340px] lg:max-w-[400px] shrink-0 m-0 p-0">
            <div className="absolute inset-8 bg-gradient-to-tr from-blue-600 via-purple-600 to-red-600 blur-[60px] opacity-80 z-0 pointer-events-none"></div>
            <img 
              src="/photos/image/Posters/spiderman1.webp" 
              alt="Spider-Man" 
              className="relative z-10 w-full aspect-[2/3] object-cover rounded-[16px] shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1.5 bg-white/90 rounded-full z-20 shadow-sm pointer-events-none"></div>
          </div>

          <div className="flex flex-col w-full max-w-2xl z-10">
            <h1 className="text-[28px] sm:text-[40px] lg:text-[46px] font-bold text-white mb-3 leading-tight tracking-tight">
              Spider-Man: Across the Spider-Verse
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-[13px] sm:text-[14px] text-gray-300 mb-6 sm:mb-8 font-medium">
              <span className="text-white font-bold">By Sony</span>
              <span>•</span>
              <span>2023</span>
              <span>•</span>
              <span>40 shards</span>
              <span>•</span>
              <span>1 hr 45 min</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8">
              <button className="w-[46px] h-[46px] sm:w-[52px] sm:h-[52px] rounded-full bg-[#fbc02d] flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_25px_rgba(251,192,45,0.4)] shrink-0">
                <Play size={20} className="fill-black text-black ml-1 sm:w-6 sm:h-6" />
              </button>
              
              <div className="flex items-center gap-4 sm:gap-6 text-white">
                <button className="flex items-center gap-1.5 sm:gap-2 hover:text-gray-300 transition-colors">
                  <Bookmark size={20} className="fill-transparent sm:w-6 sm:h-6" />
                  <span className="font-semibold text-[13px] sm:text-[14px] tracking-wide">500K</span>
                </button>
                <button className="hover:text-gray-300 transition-colors"><PlusSquare size={20} className="sm:w-6 sm:h-6" /></button>
                <button className="hover:text-gray-300 transition-colors"><MonitorPlay size={20} className="sm:w-6 sm:h-6" /></button>
                <button className="hover:text-gray-300 transition-colors"><Share size={20} className="sm:w-6 sm:h-6" /></button>
                <button className="hover:text-gray-300 transition-colors"><MoreHorizontal size={20} className="sm:w-6 sm:h-6" /></button>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-10">
              <span className="px-4 sm:px-5 py-1.5 rounded-full border border-white/20 text-[12px] sm:text-[13px] font-medium text-gray-200">Animation</span>
              <span className="px-4 sm:px-5 py-1.5 rounded-full border border-white/20 text-[12px] sm:text-[13px] font-medium text-gray-200">Scifi</span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 mt-2">
              <div className="w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] rounded-full bg-white flex items-center justify-center shrink-0">
                <span className="text-black font-black text-[9px] sm:text-[10px] tracking-tighter">SONY</span>
              </div>
              <div className="flex flex-col mr-2">
                <span className="text-white font-bold text-[15px] sm:text-[17px] leading-tight mb-0.5">Sony Animation</span>
                <span className="text-gray-400 text-[12px] sm:text-[14px]">2.6M Flicks</span>
              </div>
              <button className="bg-gradient-to-r from-amber-300 via-orange-400 to-pink-500 text-white font-bold text-[13px] sm:text-[14px] px-6 sm:px-7 py-2 sm:py-2.5 rounded-full hover:scale-105 transition-transform shadow-lg ml-2 lg:ml-6">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}


      {/* --- POP-OUT TRAILER LIGHTBOX MODAL --- */}
      {selectedTrailer && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedTrailer(null)} // Closes when clicking the dark background
        >
          {/* Main Cinematic Container */}
          <div 
            className="relative w-full max-w-5xl flex flex-col bg-[#0e0e12] rounded-[12px] sm:rounded-[16px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/5"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the video itself
          >
            
            {/* Close X Button */}
            <button 
              onClick={() => setSelectedTrailer(null)}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-gray-300 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <X size={24} />
            </button>

            {/* Header: Studio Logo + Title (Floats over the video) */}
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center gap-3 p-4 sm:p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                <span className="text-black font-black text-[8px] tracking-tighter">SONY</span>
              </div>
              <h2 className="text-white text-base sm:text-2xl font-bold tracking-wide drop-shadow-md pr-12 truncate">
                {selectedTrailer.title}
              </h2>
            </div>

            {/* Massive 16:9 Video Player */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              <img 
                src={selectedTrailer.image} 
                alt={selectedTrailer.title} 
                className="w-full h-full object-cover opacity-70" 
              />
              
              {/* Giant Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-110 hover:bg-white/30 transition-all cursor-pointer z-20">
                  <Play className="fill-white text-white ml-1 sm:ml-2 w-8 h-8 sm:w-12 sm:h-12" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}