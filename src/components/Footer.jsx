import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-white pt-24 pb-12 border-t border-gray-100 overflow-hidden">
      
      {/* 1. Background Pattern (Dot Grid) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
             backgroundSize: '32px 32px' 
           }}>
      </div>

      {/* 2. Modern Ambient Glow (Behind text) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* 3. The Quote - Editorial Style */}
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 leading-tight mb-8 max-w-4xl relative">
            <span className="text-blue-500 text-6xl font-sans absolute -top-8 -left-8 opacity-20">"</span>
            Empowering your growth, <br />
            <span className="italic text-slate-500">securing your future.</span>
            <span className="text-blue-500 text-6xl font-sans absolute -bottom-12 -right-8 opacity-20 transform rotate-180">"</span>
          </h2>

          {/* Decorative Divider */}
          <div className="w-16 h-1.5 bg-slate-900 rounded-full mb-16 opacity-10"></div>

          {/* 4. Bottom Bar: Copyright & Social */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-100/50 backdrop-blur-sm">
            
            {/* Copyright */}
            <p className="text-sm text-gray-400 font-medium order-2 md:order-1 tracking-wide">
              &copy; {new Date().getFullYear()} V-Lead. All rights reserved.
            </p>

            {/* Modern LinkedIn Button (Pill Shape) */}
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="order-1 md:order-2 group flex items-center gap-3 px-6 py-3 bg-white hover:bg-black hover:text-white rounded-full transition-all duration-300 border border-gray-200 hover:border-black shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <span className="text-xs font-bold uppercase tracking-widest">Connect</span>
              <Linkedin size={16} className="text-blue-600 group-hover:text-white transition-colors" />
            </a>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;