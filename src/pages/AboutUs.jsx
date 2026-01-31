import React from 'react';
// Your specific assets
import kiran from "../assets/kiran.png"; 
import Nithasha from "../assets/Nithasha.png";
import Sudha from "../assets/Sudha.png";
import Amit from "../assets/3-682x1024.jpg";
import sudheer from "../assets/sudheer.png";
import praveen from "../assets/praveen.png";

// --- 1. Blue Theme Hero Section ---
const HeroSection = () => (
  <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
    {/* Blue Gradient Mesh */}
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      <div 
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-cyan-300 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
        style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
      ></div>
    </div>
    
    <div className="mx-auto max-w-3xl py-20 sm:py-28 text-center">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-blue-700 bg-blue-100/50 ring-1 ring-blue-700/10 hover:ring-blue-700/20 font-medium">
          Bangalore's Premier Financial Consultancy
        </div>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
        Strategic Financial Leadership for <span className="text-blue-600">Growing SMEs</span>
      </h1>
      <p className="mt-6 text-lg leading-8 text-slate-600">
        We provide expert outsourced CFO services, enabling promoters to focus on their core vision while we handle financial complexities, debt syndication, and compliance.
      </p>
    </div>
  </div>
);

// --- 2. Stats Section (Blue Accents) ---
const StatsSection = () => {
  const stats = [
    { label: 'Combined Experience', value: '30+ Years' },
    { label: 'SME Clients', value: '50+' },
    { label: 'Debt Syndicated', value: '₹500Cr+' },
    { label: 'Compliance Rate', value: '100%' },
  ];

  return (
    <div className="bg-white py-12 sm:py-16 border-y border-blue-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-2">
              <dt className="text-sm font-semibold leading-6 text-blue-900/50 uppercase tracking-widest">{stat.label}</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

// --- 3. CTA Section (Solid Blue) ---
const CTASection = () => (
  <div className="bg-white py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {/* Changed background to blue-600 for the strong blue theme */}
      <div className="relative isolate overflow-hidden bg-blue-600 px-6 py-24 text-center shadow-lg sm:rounded-3xl sm:px-16">
        
        {/* Background Art */}
        <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.4" />
          <defs>
            <radialGradient id="gradient">
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#1e40af" />
            </radialGradient>
          </defs>
        </svg>

        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Address your biggest financial challenges
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
          From improving operating efficiencies to strategic debt syndication, let our multidisciplinary team become the strategic advisor your business needs.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all">
            Get a Consultation
          </button>
          <button className="text-sm font-semibold leading-6 text-white hover:text-blue-200 transition-colors">
            Our Services <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Component ---
const AboutUs = () => {
  // UPDATED: Team background colors changed to Blue Variations to match the theme
  const teamMembers = [
    {
      name: "Praveen M",
      role: "Managing Partner",
      bgColor: "bg-blue-200", // Soft Blue
      image: praveen 
    },
    {
      name: "Scott Farquhar",
      role: "Co-Founder & Co-CEO",
      bgColor: "bg-sky-200", // Sky Blue
      image: sudheer
    },
    {
      name: "Kiran",
      role: "Chief Technology Officer",
      bgColor: "bg-indigo-200", // Indigo
      image: kiran
    },
    {
      name: "Anu Bharadwaj",
      role: "Chief Operating Officer",
      bgColor: "bg-cyan-200", // Cyan
      image: Amit
    },
    {
      name: "Erika Fisher",
      role: "Chief Administrative Officer",
      bgColor: "bg-blue-300", // Medium Blue
      image: Sudha 
    },
    {
      name: "James Beer",
      role: "Chief Financial Officer",
      bgColor: "bg-slate-300", // Blue-Grey
      image: Nithasha
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Stats */}
      <StatsSection />

      {/* 3. Team Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Meet our Experts
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              A multidisciplinary team delivering success in finance, compliance, and project management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
            {teamMembers.map((member, index) => (
              <div key={index} className="group cursor-pointer">
                
                {/* Image & Background Wrapper */}
                <div className="relative pt-8 px-4 flex justify-center items-end h-[350px]">
                  
                  {/* Colored Background Box */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 h-[80%] w-full ${member.bgColor} transition-transform duration-300 group-hover:scale-[1.02]`}
                  ></div>

                  {/* Person Image */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="relative z-10 w-auto h-full max-h-[115%] object-cover object-bottom mx-auto" 
                  />
                </div>

                {/* Text Content */}
                <div className="mt-6 text-left">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Footer CTA */}
      <CTASection />
    </div>
  );
};

export default AboutUs;