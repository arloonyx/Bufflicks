import React from 'react';
import { BarChart3, TrendingUp, Users, Gem, ArrowUpRight, Film } from 'lucide-react';

export default function CreatorDashboard() {
  const stats = [
    { label: 'Total Earnings', value: '42,500 Shards', trend: '+12.5%', icon: <Gem size={20} className="text-[#ff0055]" /> },
    { label: 'Active Vault Owners', value: '1,204', trend: '+8.2%', icon: <Users size={20} className="text-[#00c3ff]" /> },
    { label: 'Total Watch Time (Hrs)', value: '8,432', trend: '+24.1%', icon: <BarChart3 size={20} className="text-[#ff9500]" /> },
    { label: 'Core Pass Allocation', value: '12,450 Shards', trend: '+5.4%', icon: <TrendingUp size={20} className="text-[#ff1a00]" /> },
  ];

  const recentTransactions = [
    { id: 'TX-9021', title: 'Neon Shadows', type: 'Own Forever', amount: '15 Shards', date: 'Just now' },
    { id: 'TX-9020', title: 'Neon Shadows', type: 'Core Pass View', amount: '2 Shards', date: '10 mins ago' },
    { id: 'TX-9019', title: 'Echoes of Earth', type: 'Own Forever', amount: '15 Shards', date: '1 hr ago' },
    { id: 'TX-9018', title: 'Neon Shadows', type: 'AVOD Ad Share', amount: '1 Shard', date: '2 hrs ago' },
  ];

  return (
    <div className="text-white animate-fade-in flex flex-col gap-8 font-['Outfit'] w-full max-w-[1600px] mx-auto">
      
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
            Creator Studio
          </h1>
          <p className="text-[#686877] font-semibold tracking-wide mt-1 text-sm">
            Real-time analytics and transparent revenue tracking.
          </p>
        </div>
        <button className="bg-[#ff0055] hover:bg-[#ff1744] text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(255,0,85,0.3)] flex items-center gap-2 w-fit">
          <Film size={16} />
          Upload New Film
        </button>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-[#17171e] border border-white/5 p-6 rounded-[20px] flex flex-col gap-4 shadow-lg hover:border-white/10 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-[#0a0a0c] flex items-center justify-center border border-white/5">
                {stat.icon}
              </div>
              <div className="flex items-center gap-1 text-green-500 bg-green-500/10 px-2.5 py-1 rounded-full">
                <ArrowUpRight size={14} />
                <span className="text-[10px] font-bold tracking-wider">{stat.trend}</span>
              </div>
            </div>
            <div>
              <h3 className="text-[#686877] text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</h3>
              <p className="text-2xl font-black text-white tracking-tight">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid: Chart & Ledger */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Placeholder for Data Visualization */}
        <div className="lg:col-span-2 bg-[#17171e] border border-white/5 rounded-[24px] p-6 shadow-xl flex flex-col min-h-[400px]">
          <h2 className="text-lg font-bold tracking-wider uppercase mb-6">Revenue Breakdown (30 Days)</h2>
          <div className="flex-1 border-2 border-dashed border-white/5 rounded-xl flex items-center justify-center text-[#686877] flex-col gap-3">
            <BarChart3 size={40} className="opacity-20" />
            <span className="text-sm font-semibold tracking-wide uppercase">Chart Component Area</span>
            <span className="text-xs text-[#686877]/60 max-w-xs text-center">We will drop in Recharts or Chart.js here to visualize AVOD vs. Core Pass data.</span>
          </div>
        </div>

        {/* Real-time Ledger */}
        <div className="bg-[#0a0a0c] border border-white/5 rounded-[24px] p-6 shadow-xl flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-bold tracking-wider uppercase text-white">Live Transactions</h2>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
          
          <div className="flex flex-col gap-4">
            {recentTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-3 bg-[#17171e] rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold tracking-widest text-white uppercase">{tx.title}</span>
                  <span className="text-[10px] font-bold text-[#686877] uppercase tracking-wider">{tx.type}</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs font-black text-[#ff8800]">{tx.amount}</span>
                  <span className="text-[9px] font-semibold text-[#686877]">{tx.date}</span>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-auto pt-6 text-[11px] font-bold uppercase tracking-widest text-[#686877] hover:text-white transition-colors">
            View Full Ledger →
          </button>
        </div>

      </div>
    </div>
  );
}