import React, { useEffect } from 'react';
import { Play, Download, Star, Eye, Heart, MoreHorizontal, Globe, PlayCircle, ArrowDownCircle, Gem, TrendingUp } from 'lucide-react';

export default function MovieDetail() {
  // Ensure the page loads at the top when navigating here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-sans pt-4 pb-20 flex flex-col gap-6 lg:gap-8">
      
      {/* --- TOP HERO SECTION --- */}
      {/* Figma Specs: Rounded 25px, Reddish background overlay */}
      <div className="relative w-full rounded-[25px] overflow-hidden p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 bg-[#17171e]">
        
        {/* Deep Red Ambient Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-red-900/10 to-transparent pointer-events-none z-0"></div>
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-600/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* Poster Image */}
        <div className="relative z-10 w-[200px] sm:w-[260px] lg:w-[320px] shrink-0 mx-auto lg:mx-0 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
          <div className="absolute top-3 left-3 bg-[#ff1744] text-white text-[10px] font-black px-2 py-0.5 rounded-[4px] uppercase tracking-wider z-20">
            Vault
          </div>
          <img 
            src="/photos/image/Posters/dune 1.jpg" 
            alt="Dune" 
            className="w-full aspect-[2/3] object-cover rounded-[16px]"
          />
        </div>

        {/* Movie Details */}
        <div className="relative z-10 flex flex-col w-full text-center lg:text-left">
          
          <h1 className="text-[40px] sm:text-[50px] lg:text-[64px] font-black text-white leading-none tracking-tight mb-2">
            Dune
          </h1>
          <p className="text-gray-400 text-[13px] mb-6">Updated 11th March, 2026</p>

          <p className="text-gray-200 text-[14px] sm:text-[15px] font-medium leading-relaxed mb-1 max-w-3xl mx-auto lg:mx-0">
            Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.
          </p>
          <button className="text-white font-bold text-[14px] hover:underline mb-6 text-left mx-auto lg:mx-0">
            More
          </button>

          {/* Badges Row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-5">
            <div className="flex items-center gap-1.5 bg-[#f5c518] text-black px-2.5 py-1 rounded-[6px] font-black text-[12px]">
              <span>IMDb</span>
              <span className="font-bold">8.0</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#01b4e4] text-white px-2.5 py-1 rounded-[6px] font-bold text-[12px]">
              <span>TMDb</span>
              <span>78%</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#ff1744]/20 text-[#ff1744] px-2.5 py-1 rounded-[6px] font-bold text-[12px] border border-[#ff1744]/30">
              <TrendingUp size={14} />
              <span>71.3k</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-200 font-bold text-[13px]">
              <Gem size={14} className="text-[#ff7a00] fill-[#ff7a00]" />
              <span>126M shards</span>
            </div>
          </div>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[14px] text-gray-300 font-medium mb-5">
            <span>155min</span>
            <span>•</span>
            <span>PG13</span>
            <span>•</span>
            <span>2024</span>
          </div>

          {/* Genre Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-[12px] font-medium backdrop-blur-sm border border-white/10">Adventure</span>
            <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-[12px] font-medium backdrop-blur-sm border border-white/10">Action</span>
            <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-[12px] font-medium backdrop-blur-sm border border-white/10">Scifi</span>
          </div>

          {/* Ratings */}
          <div className="flex items-center justify-center lg:justify-start gap-6 mb-8 text-white font-bold text-[15px]">
            <div className="flex items-center gap-1.5">
              <Star size={18} className="text-yellow-400 fill-yellow-400" />
              <span>7.8</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-300">
              <TrendingUp size={18} />
              <span>36</span>
            </div>
          </div>

          {/* Creator Block */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-[46px] h-[46px] rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <Globe size={24} className="text-white" />
              </div>
              <div className="flex flex-col text-left mr-4">
                <span className="text-white font-bold text-[16px] leading-tight mb-0.5">Legendary Pictures</span>
                <span className="text-gray-400 text-[13px] font-medium">2.6M Buffs</span>
              </div>
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold text-[14px] px-8 py-2.5 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(236,72,153,0.3)]">
              Subscribe
            </button>
          </div>

          {/* Social Stats */}
          <div className="flex items-center justify-center lg:justify-start gap-6 text-gray-300 font-medium text-[14px] mb-8">
            <div className="flex items-center gap-2">
              <Eye size={18} />
              <span>7.1M</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Heart size={18} className="fill-white" />
              <span>345k</span>
            </div>
            <button className="hover:text-white transition-colors">
              <MoreHorizontal size={20} />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-[12px] font-bold text-[15px] hover:bg-gray-200 transition-colors">
              <PlayCircle size={20} className="fill-black text-white" />
              Watch
            </button>
            <button className="flex items-center gap-2 bg-[#17171e] text-[#ff1744] border border-[#ff1744]/50 px-8 py-3 rounded-[12px] font-bold text-[15px] hover:bg-[#ff1744]/10 transition-colors">
              <ArrowDownCircle size={20} />
              Download
            </button>
          </div>
          
        </div>
      </div>

      {/* --- BOTTOM SECTION: TWO COLUMNS --- */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full">
        
        {/* LEFT COLUMN: Trailer & Synopsis */}
        <div className="flex flex-col flex-1 gap-8">
          
          {/* Trailer Block */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-[24px] font-bold tracking-tight">Trailer</h2>
            <div className="relative w-full aspect-video rounded-[15px] overflow-hidden bg-[#17171e] group cursor-pointer border border-white/5 shadow-lg">
              <img 
               src="/photos/image/Posters/dune 2.jpg" 
                alt="Trailer Thumbnail" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-110 group-hover:bg-white/30 transition-all">
                  <Play className="fill-white text-white ml-1 w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Synopsis Block */}
          <div className="flex flex-col gap-4 bg-white/5 rounded-[15px] p-6 lg:p-8 border border-white/5">
            <h2 className="text-white text-[24px] font-bold tracking-tight">Synopsis</h2>
            <p className="text-gray-300 text-[14px] sm:text-[15px] leading-relaxed mb-4">
              Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.
            </p>
            
            <div className="flex flex-col gap-3 text-[14px] sm:text-[15px]">
              <div className="flex items-start gap-2">
                <span className="text-white font-bold w-20 shrink-0">Director:</span>
                <span className="text-gray-300">Denis Villeneuve</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold w-20 shrink-0">Writers:</span>
                <span className="text-gray-300">Denis Villeneuve</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold w-20 shrink-0">Tagline:</span>
                <span className="text-gray-300 italic">Long live the fighters.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-white font-bold w-20 shrink-0">Stars:</span>
                <span className="text-gray-300">Timothée Chalamet, Zendaya, Rebecca Ferguson</span>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Blank Container (Matches Figma 5% White Fill, 15px Radius) */}
        <div className="flex-1 bg-[#FEFEFE]/5 rounded-[15px] border border-white/5 min-h-[400px] p-6">
          {/* This empty container is ready for the Comments and Recommended Flicks! */}
        </div>

      </div>
    </div>
  );
}