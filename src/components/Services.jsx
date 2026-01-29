import React from 'react';
import { 
  Briefcase, Coins, Users, BarChart2, ShieldCheck, 
  FileSearch, Scale, Settings, ArrowRight 
} from 'lucide-react';

const services = [
  {
    title: "Business Advisory",
    description: "Tailored, innovative solutions for startups and established firms, ranging from business modeling to due diligence.",
    icon: <Briefcase size={24} />,
    color: "group-hover:text-blue-600",
    bg: "group-hover:bg-blue-50",
    // Changed: defined the explicit background class
    lineColor: "bg-blue-500" 
  },
  {
    title: "Fund Raising",
    description: "Customised financing solutions including project finance, working capital, and debt restructuring for growth.",
    icon: <Coins size={24} />,
    color: "group-hover:text-lime-600",
    bg: "group-hover:bg-lime-50",
    lineColor: "bg-lime-500"
  },
  {
    title: "Accounts Outsourcing",
    description: "End-to-end accounting support, from system design and payroll to monthly reporting and compliance.",
    icon: <Users size={24} />,
    color: "group-hover:text-purple-600",
    bg: "group-hover:bg-purple-50",
    lineColor: "bg-purple-500"
  },
  {
    title: "Decision Support",
    description: "Strategic support including MIS development, cost-benefit analysis, and performance management systems.",
    icon: <BarChart2 size={24} />,
    color: "group-hover:text-orange-600",
    bg: "group-hover:bg-orange-50",
    lineColor: "bg-orange-500"
  },
  {
    title: "Compliance Support",
    description: "Expert assistance with IFRS, tax filings, reconciliations, and routine accounting compliance.",
    icon: <ShieldCheck size={24} />,
    color: "group-hover:text-teal-600",
    bg: "group-hover:bg-teal-50",
    lineColor: "bg-teal-500"
  },
  {
    title: "Auditing & Assurance",
    description: "Comprehensive audit services including internal controls, statutory audits, and risk assessments.",
    icon: <FileSearch size={24} />,
    color: "group-hover:text-red-600",
    bg: "group-hover:bg-red-50",
    lineColor: "bg-red-500"
  },
  {
    title: "Legal Compliance",
    description: "Navigation of complex regulations including FEMA, RBI, SEBI compliance, trademarks, and corporate governance.",
    icon: <Scale size={24} />,
    color: "group-hover:text-indigo-600",
    bg: "group-hover:bg-indigo-50",
    lineColor: "bg-indigo-500"
  },
  {
    title: "Process Improvement",
    description: "Enhancing business efficiency through risk management, cost reduction, and product rationalization.",
    icon: <Settings size={24} />,
    color: "group-hover:text-pink-600",
    bg: "group-hover:bg-pink-50",
    lineColor: "bg-pink-500"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-blue-50 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-100 text-lime-800 text-xs font-bold tracking-wide uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-bule-500 animate-pulse"></span>
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Comprehensive <br/> Financial Solutions.
            </h2>
          </div>
          <div className="max-w-sm text-gray-500 text-sm md:text-base leading-relaxed pb-2">
            Going beyond traditional auditing to provide deep technical knowledge and forward-thinking strategies for your growth.
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${service.lineColor}`}></div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 text-gray-900 transition-colors duration-300 ${service.bg} ${service.color}`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed mb-8 min-h-[80px]">
                {service.description}
              </p>

              {/* Action */}
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                <span className="text-sm font-semibold text-gray-900">Learn more</span>
                <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:text-white`}>
                  <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;