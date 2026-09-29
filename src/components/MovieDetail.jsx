import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, Download, MessageSquare, ArrowLeft, Gem, X, Send, Users } from 'lucide-react';

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // State for the Watch Party Chat
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'Arlo N.', text: 'The cinematography in this opening sequence is incredible.', time: '12:01' },
    { id: 2, user: 'Cinephile99', text: 'Wait until the drop at the 15-minute mark.', time: '12:02' },
    { id: 3, user: 'Sarah_J', text: 'Definitely adding this to my Vault permanently.', time: '12:04' }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    setChatMessages([...chatMessages, {
      id: Date.now(),
      user: 'Salako Khalilulahi T.', // Simulating your logged-in user profile
      text: newMessage,
      time: 'Now'
    }]);
    setNewMessage('');
  };

  return (
    <div className="text-white animate-fade-in flex flex-col gap-6 relative font-['Outfit']">
      
      {/* Back Navigation */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-[#686877] hover:text-white transition-colors w-fit"
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-semibold tracking-wide">Back to Vault</span>
      </button>

      {/* Cinematic Video Player Placeholder */}
      <div className="w-full aspect-video bg-[#0a0a0c] rounded-[32px] overflow-hidden relative group border border-white/5 shadow-2xl">
         <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80" 
            alt="Movie Backdrop" 
            className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500" 
         />
         <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-[#ff0055] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_40px_rgba(255,0,85,0.4)]">
               <Play size={32} className="fill-white ml-2 text-white" />
            </button>
         </div>
         
         {/* Live Watcher Badge */}
         <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 bg-[#ff0055] rounded-full animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-white uppercase">241 Watching</span>
         </div>
      </div>

      {/* Meta & Transaction Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-2">
         {/* Left Column: Movie Metadata */}
         <div className="lg:col-span-2 flex flex-col gap-4 pr-4">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              Secret Level {id}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-xs tracking-wider text-[#9e9ea7] font-bold uppercase">
               <span>2026</span>
               <span className="w-1 h-1 bg-[#686877] rounded-full" />
               <span>2h 14m</span>
               <span className="w-1 h-1 bg-[#686877] rounded-full" />
               <span className="border border-white/10 px-3 py-1 rounded-md text-white/80">Sci-Fi / Action</span>
            </div>
            
            <p className="text-[#a5a5b2] leading-relaxed text-base md:text-lg mt-2 max-w-3xl">
               A gritty, raw exploration of a dystopian future where technology dictates survival. This platform prioritizes the creators behind the lens, giving them the revenue they deserve while letting fans own the art forever.
            </p>
         </div>

         {/* Right Column: Monetization & Community */}
         <div className="flex flex-col gap-3 bg-[#17171e] p-6 rounded-[28px] border border-white/5 h-fit shadow-xl">
            <button className="w-full py-4 bg-[#ff0055] hover:bg-[#ff1744] rounded-[14px] font-black text-sm uppercase tracking-widest transition-colors flex justify-center items-center gap-2 shadow-lg shadow-red-500/20">
               <Gem size={16} className="fill-white" />
               Own Forever - 15 Shards
            </button>
            <button className="w-full py-4 bg-[#0a0a0c] hover:bg-[#20202a] text-[#9e9ea7] hover:text-white rounded-[14px] font-bold text-sm uppercase tracking-widest transition-colors flex justify-center items-center gap-2 border border-white/5">
               <Download size={18} />
               Download Offline
            </button>
            
            {/* Open Community Chat Trigger */}
            <div 
              onClick={() => setIsChatOpen(true)}
              className="mt-4 pt-5 border-t border-white/5 flex items-center justify-between group cursor-pointer"
            >
               <div className="flex items-center gap-3 text-[#686877] group-hover:text-white transition-colors">
                  <MessageSquare size={20} />
                  <span className="font-bold text-sm tracking-wide uppercase">Join Watch Party</span>
               </div>
               <span className="text-xs bg-[#20202a] group-hover:bg-[#ff0055] transition-colors text-white px-3 py-1.5 rounded-full font-bold">
                  Live
               </span>
            </div>
         </div>
      </div>

      {/* Slide-Out Chat Drawer */}
      <div 
        className={`fixed top-0 right-0 h-screen w-full sm:w-[400px] bg-[#0e0e12] border-l border-white/5 z-50 flex flex-col shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isChatOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Chat Header */}
        <div className="h-[84px] px-6 flex items-center justify-between border-b border-white/5 bg-[#0e0e12]">
          <div className="flex items-center gap-3">
            <Users size={20} className="text-[#ff0055]" />
            <span className="font-black tracking-widest uppercase text-lg">Watch Party</span>
          </div>
          <button 
            onClick={() => setIsChatOpen(false)}
            className="w-10 h-10 bg-[#17171e] hover:bg-[#20202a] rounded-full flex items-center justify-center text-[#686877] hover:text-white transition-colors"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* Chat Messages Feed */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 scrollbar-hide">
          {chatMessages.map((msg) => (
            <div key={msg.id} className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold tracking-widest uppercase ${msg.user === 'Salako Khalilulahi T.' ? 'text-[#ff0055]' : 'text-gray-400'}`}>
                  {msg.user}
                </span>
                <span className="text-[10px] text-[#686877] font-semibold">{msg.time}</span>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed bg-[#17171e] p-3 rounded-2xl rounded-tl-sm w-fit border border-white/5">
                {msg.text}
              </p>
            </div>
          ))}
        </div>

        {/* Chat Input Area */}
        <div className="p-6 bg-[#17171e] border-t border-white/5">
          <form onSubmit={handleSendMessage} className="relative flex items-center">
            <input 
              type="text" 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Join the conversation..." 
              className="w-full bg-[#0a0a0c] border border-white/10 text-white placeholder-[#686877] rounded-full pl-5 pr-12 py-3.5 text-sm focus:outline-none focus:border-[#ff0055]/50 transition-all shadow-inner"
            />
            <button 
              type="submit"
              className="absolute right-2 w-9 h-9 bg-[#ff0055] hover:bg-[#ff1744] rounded-full flex items-center justify-center transition-transform hover:scale-105"
            >
              <Send size={14} className="fill-white text-white ml-0.5" />
            </button>
          </form>
        </div>
      </div>
      
      {/* Overlay backdrop when chat is open on mobile */}
      {isChatOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setIsChatOpen(false)}
        />
      )}
    </div>
  );
}