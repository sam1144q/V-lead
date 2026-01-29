import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Phone, TrendingUp, User, ChevronDown } from 'lucide-react';

const slides = [
  {
    id: 1,
    preTitle: "Financial consult that",
    highlight: "leads",
    postTitle: "you to",
    finalTitle: "your goals",
    description: "Data-driven insights for wealth management advisors and executives. We help you scale efficiently.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    highlightColor: "bg-lime-300"
  },
  {
    id: 2,
    preTitle: "Strategic audits that",
    highlight: "build",
    postTitle: "trust for",
    finalTitle: "the future",
    description: "Comprehensive auditing services that go beyond compliance to uncover hidden opportunities for growth.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop",
    highlightColor: "bg-blue-300"
  },
  {
    id: 3,
    preTitle: "Global compliance that",
    highlight: "secures",
    postTitle: "your",
    finalTitle: "investments",
    description: "Navigate complex international regulations with our expert legal teams and automated compliance tracking.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
    highlightColor: "bg-purple-300"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[currentSlide];

  return (
   <section className="relative bg-gray-50 pt-28 pb-16 lg:pt-32 lg:pb-20">

      {/* Decorative Blur Background (Static) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-200/50 blur-3xl opacity-200 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-gray-200/50 blur-3xl opacity-200 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* CAROUSEL CONTENT WRAPPER */}
        {/* key={currentSlide} triggers the animation when state changes */}
        <div key={currentSlide} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fadeIn">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight transition-all duration-500">
              {current.preTitle} <br />
              <span className="relative inline-block">
                {current.highlight}
                <div className={`absolute bottom-2 left-0 w-full h-2 ${current.highlightColor} -z-10 bg-opacity-80 rounded-sm transition-colors duration-300`}></div>
              </span>{' '}
              {current.postTitle} <br />
              {current.finalTitle}
            </h1>
            
            <p className="mt-4 text-base text-gray-600 max-w-lg relative z-20 transition-opacity duration-500">
              {current.description}
            </p>

            <div className="mt-8 flex items-center gap-6 relative">
              <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg text-sm sm:text-base z-20">
                Reinforce your team
              </button>
              
              {/* Decorative Squiggly Arrow */}
              <div className="hidden sm:block absolute left-[180px] -top-8 text-gray-400 rotate-12">
                <svg width="80" height="60" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M70 10 C 60 10, 40 20, 30 40 C 25 50, 10 45, 5 45" />
                  <path d="M15 40 L 5 45 L 12 55" />
                </svg>
              </div>
            </div>

            {/* Navigation & Trust Section */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <p className="text-xs text-gray-500 max-w-[150px] leading-tight">
                    Trusted by worldwide leading companies.
                  </p>
                  
                  {/* CAROUSEL CONTROLS */}
                  <div className="flex gap-2 relative z-30">
                    <button 
                      onClick={prevSlide}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 text-gray-600 cursor-pointer"
                    >
                      <ArrowLeft size={14} />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 text-gray-600 cursor-pointer"
                    >
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
                
                {/* Static Logos */}
                <div className="flex items-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-all scale-90">
                   <span className="font-bold text-lg">headway</span>
                   <span className="font-bold text-lg font-serif">GWT</span>
                   <span className="font-bold text-lg tracking-widest">ADISQ</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Image & Floating Elements */}
          <div className="relative w-full max-w-md lg:max-w-full mx-auto lg:pr-4">
            <div className="relative rounded-b-[5rem] rounded-t-3xl overflow-hidden border-4 border-white shadow-2xl bg-gray-100 transition-all duration-500">
              <img 
                src={current.image} 
                alt="Financial Consultant" 
                className="w-full h-[500px] lg:h-[600px] object-cover animate-zoomIn"
              />
            </div>

            {/* --- FLOATING ITEMS (Static Position, Animated Entry) --- */}

            {/* Card 1: Income */}
            <div 
              className="absolute -top-2 -right-2 bg-white p-2 rounded-xl shadow-lg flex items-center gap-2 animate-float scale-90 z-20"
              style={{ animationDelay: '0s' }}
            >
              <div className="p-1.5 bg-lime-100 rounded-lg text-lime-600">
                <TrendingUp size={16} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500">Income</p>
                <p className="font-bold text-sm text-gray-900">$150.00</p>
              </div>
            </div>

            {/* Card 2: Active User */}
            <div 
              className="absolute top-16 -left-4 bg-white py-1.5 px-3 rounded-full shadow-lg flex items-center gap-2 scale-90 z-20 animate-float"
              style={{ animationDelay: '1s' }}
            >
               <div className="relative">
                 <div className="w-2 h-2 bg-green-500 rounded-full absolute top-0 right-0 border border-white"></div>
                 <User size={14} className="text-gray-600"/>
               </div>
               <span className="text-xs font-medium text-gray-700">Active now</span>
            </div>

            {/* Card 3: Stats */}
            <div 
              className="absolute top-1/2 -right-4 bg-white p-3 rounded-2xl shadow-xl max-w-[140px] hidden sm:block scale-90 z-20 animate-float"
              style={{ animationDelay: '2s' }}
            >
               <div className="flex justify-between items-center mb-1">
                 <span className="text-[10px] text-gray-500">Clients</span>
               </div>
               <div className="flex justify-between items-center">
                 <span className="font-bold text-sm text-green-600">+172</span>
                 <span className="font-bold text-xs text-gray-400">+110</span>
               </div>
               <div className="flex gap-1 items-end h-6 mt-1">
                 <div className="w-1.5 bg-green-200 h-3 rounded-sm"></div>
                 <div className="w-1.5 bg-green-400 h-5 rounded-sm"></div>
                 <div className="w-1.5 bg-green-500 h-full rounded-sm"></div>
               </div>
            </div>

            {/* Card 4: Efficiency */}
            <div 
              className="absolute top-2/3 -left-6 bg-white p-2 pr-3 rounded-full shadow-lg flex items-center gap-2 scale-90 z-20 animate-float"
              style={{ animationDelay: '3s' }}
            >
               <div className="w-10 h-10 rounded-full border-2 border-lime-300 flex items-center justify-center bg-white text-[10px] font-bold">
                 +25%
               </div>
               <p className="text-[10px] text-gray-600 leading-tight">Efficiency <br/> increased</p>
            </div>

            {/* Card 5: Calling */}
            <div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-1.5 rounded-full shadow-xl flex flex-col items-center z-20 animate-float"
              style={{ animationDelay: '1.5s' }}
            >
               <div className="bg-lime-300 text-black text-[8px] font-bold px-1.5 py-0.5 rounded-full mb-1 absolute -top-2">
                 Calling
               </div>
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-100">
                  <Phone size={18} className="text-gray-800" />
               </div>
            </div>

          </div>
        </div>
        
        {/* Slide Indicators (Dots) */}
        <div className="flex justify-center gap-2 mt-8 lg:mt-0 lg:absolute lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-gray-800 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer z-10">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Scroll</span>
        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white/50 backdrop-blur-sm">
           <ChevronDown size={16} className="text-gray-600" />
        </div>
      </div>

      {/* Tailwind Animation Styles (Add to global CSS or Style block) */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { transform: scale(1.05); }
          to { transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-zoomIn {
          animation: zoomIn 6s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px) scale(0.9); }
          50% { transform: translateY(-10px) scale(0.9); }
          100% { transform: translateY(0px) scale(0.9); }
        }
      `}</style>
    </section>
  );
};

export default Hero;