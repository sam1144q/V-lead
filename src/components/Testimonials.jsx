import React from 'react';
import { Star, Quote, TrendingUp, ShieldCheck, Zap, Globe, ArrowUpRight, Activity, Building2 } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Pattern - Subtle Grid */}
      <div className="absolute inset-0" 
           style={{ 
             backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', 
             backgroundSize: '32px 32px',
             opacity: 0.5
           }}>
      </div>
      
      {/* Soft gradient blobs for "light" atmosphere */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-xs mb-2 block">
              Client Success
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Real stories from <br/>
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">industry leaders.</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-100 -z-0"></span>
              </span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 flex gap-2">
            <div className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-600">500+ Clients</div>
            <div className="px-4 py-2 bg-blue-50 rounded-full text-xs font-bold text-blue-700">98% Retention</div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

          {/* Card 1: Large Featured (Spans 2 cols) */}
          <div className="md:col-span-2 relative group rounded-3xl bg-gray-50 border border-gray-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 p-10 flex flex-col justify-between overflow-hidden">
            {/* Background Icon */}
            <Quote size={140} className="absolute -top-4 -right-4 text-gray-200/50 group-hover:text-blue-100/50 transition-colors duration-300" />
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-amber-400 text-amber-400" />)}
              </div>
              {/* Serif Font for "Editorial" look */}
              <h3 className="text-2xl md:text-3xl font-serif text-slate-800 leading-relaxed">
                "The strategic advisory was a game-changer. They didn't just look at the numbers; they understood our business model instantly."
              </h3>
            </div>
            
            <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  AS
                </div>
                <div>
                  <p className="text-slate-900 font-bold">Sarah Jenkins</p>
                  <p className="text-slate-500 text-sm">CFO, AlphaStream</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-100 shadow-sm">
                <TrendingUp size={14} className="text-emerald-500" />
                <span className="text-xs text-slate-700 font-mono font-bold">+240% Growth</span>
              </div>
            </div>
          </div>

          {/* Card 2: Vertical Card (Spans 1 col, 2 rows) - Highlight Color */}
          <div className="md:row-span-2 relative group rounded-3xl bg-slate-900 text-white border border-slate-800 p-8 flex flex-col justify-between shadow-2xl shadow-slate-200">
            <div>
               <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 text-blue-400 border border-slate-700">
                  <ShieldCheck size={24} />
               </div>
               <h4 className="font-bold text-xl mb-3">Zero Compliance Issues</h4>
               <p className="text-slate-400 text-sm leading-relaxed mb-8">
                 "Navigating international tax compliance was a nightmare until we brought this team on board. Flawless execution and peace of mind."
               </p>
            </div>
            
            {/* Visual Stat */}
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
               <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Audit Pass Rate</span>
                  <span className="text-emerald-400 text-xs font-bold">Top 1%</span>
               </div>
               <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 w-full h-full rounded-full"></div>
               </div>
               <p className="text-right text-white font-mono text-lg mt-1">100%</p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold text-xs">GH</div>
              <div>
                <p className="text-white font-bold text-sm">David Chen</p>
                <p className="text-slate-500 text-xs">Global Horizon</p>
              </div>
            </div>
          </div>

          {/* Card 3: Compact Card */}
          <div className="group rounded-3xl bg-white border border-gray-200 hover:border-purple-200 hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col shadow-sm hover:shadow-lg">
             <div className="mb-auto">
                <Activity size={24} className="text-purple-600 mb-4" />
                <p className="text-lg text-slate-700 font-serif italic">"Outsourcing accounts reduced overhead by 40% while improving accuracy."</p>
             </div>
             <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">UB</div>
                <div>
                   <p className="text-slate-900 text-sm font-bold">Elena Rodriguez</p>
                   <p className="text-slate-500 text-xs">Urban Build</p>
                </div>
             </div>
          </div>

          {/* Card 4: Compact Card */}
          <div className="group rounded-3xl bg-white border border-gray-200 hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col shadow-sm hover:shadow-lg">
             <div className="mb-auto">
                <Zap size={24} className="text-orange-500 mb-4" />
                <p className="text-lg text-slate-700 font-serif italic">"We needed capital fast. Their fundraising team connected us perfectly."</p>
             </div>
             <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">NT</div>
                <div>
                   <p className="text-slate-900 text-sm font-bold">Marcus Thorne</p>
                   <p className="text-slate-500 text-xs">NextGen Tech</p>
                </div>
             </div>
          </div>

          {/* Card 5: Wide Bottom Card (Spans 2 cols) */}
          <div className="md:col-span-2 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 md:p-10 flex items-center justify-between shadow-lg shadow-blue-200">
             <div className="max-w-lg">
                <div className="flex items-center gap-2 mb-3 text-blue-200">
                  <Globe size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Global Reach</span>
                </div>
                <p className="text-xl md:text-2xl font-medium mb-4">
                  "The legal compliance team saved us from a potential regulatory pitfall. Unmatched attention to detail."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center">
                    <Building2 size={12} />
                  </div>
                  <span className="text-sm text-blue-100 font-semibold">Anita Patel, Omni Group</span>
                </div>
             </div>
             
             <div className="hidden md:flex h-14 w-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center hover:bg-white hover:text-blue-600 transition-all cursor-pointer">
                <ArrowUpRight size={24} />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;