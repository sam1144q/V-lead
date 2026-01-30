import React, { useState } from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Calculator, 
  PieChart, 
  ShieldCheck, 
  FileSearch, 
  Scale, 
  Settings, 
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Users,
  ChevronRight,
  Layers
} from 'lucide-react';
import Services from '../components/Services';

const ServicePage = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    { 
      id: 0,
      title: "Business Advisory", 
      icon: <Briefcase size={32} />, 
      desc: "Our Business Advisory service acts as your strategic compass. We don't just offer advice; we partner with you to dissect complex market challenges, refine your business model, and identify untapped growth corridors. Whether you are a startup looking for product-market fit or an established enterprise seeking to pivot, our strategic roadmap ensures you stay ahead of the curve.",
      features: ["Strategic Planning & Execution", "Market Entry Analysis", "Business Model Innovation", "Competitor Benchmarking"],
      color: "from-blue-500 to-indigo-600"
    },
    { 
      id: 1,
      title: "Fund Raising", 
      icon: <TrendingUp size={32} />, 
      desc: "Capital is the fuel for growth, but securing it requires precision. We manage the entire fundraising lifecycle—from crafting compelling pitch decks and financial valuations to negotiating term sheets with VCs and angel investors. We ensure your capital structure is optimized for long-term sustainability without diluting your vision.",
      features: ["Pitch Deck Preparation", "Business Valuation", "Investor Relations", "Term Sheet Negotiation"],
      color: "from-emerald-500 to-teal-600"
    },
    { 
      id: 2,
      title: "Accounts Outsourcing", 
      icon: <Calculator size={32} />, 
      desc: "Focus on your core business while we handle the numbers. Our Accounts Outsourcing service provides end-to-end bookkeeping, payroll management, and financial reporting. We act as your virtual CFO office, ensuring your books are not just compliant, but are a source of clear financial insight.",
      features: ["Bookkeeping & General Ledger", "Payroll Management", "Financial Reporting (MIS)", "Payables & Receivables"],
      color: "from-orange-500 to-red-500"
    },
    { 
      id: 3,
      title: "Decision Support", 
      icon: <PieChart size={32} />, 
      desc: "Gut feelings aren't enough in today's data-driven economy. We provide rigorous financial modeling, variance analysis, and scenario planning to support high-stakes executive decisions. Whether it's a merger, acquisition, or a new product launch, our data ensures you move forward with confidence.",
      features: ["Financial Modeling", "Budgeting & Forecasting", "Variance Analysis", "KPI Dashboarding"],
      color: "from-violet-500 to-purple-600"
    },
    { 
      id: 4,
      title: "Compliance Support", 
      icon: <ShieldCheck size={32} />, 
      desc: "Regulatory landscapes are constantly shifting. We take the burden of compliance off your shoulders by managing all statutory filings, tax obligations, and regulatory requirements. Our proactive approach ensures zero penalties and maintains your company's good standing with all government authorities.",
      features: ["Direct & Indirect Tax Filings", "ROC Compliance", "Statutory Registrations", "Regulatory Advisory"],
      color: "from-pink-500 to-rose-600"
    },
    { 
      id: 5,
      title: "Auditing & Assurance", 
      icon: <FileSearch size={32} />, 
      desc: "Trust is built on transparency. Our Auditing & Assurance services go beyond ticking boxes. We conduct rigorous independent examinations of your financial records to detect inefficiencies, prevent fraud, and verify accuracy, providing stakeholders with an unshakeable view of your financial health.",
      features: ["Statutory Audit", "Internal Audit", "Tax Audit", "Fraud Investigation"],
      color: "from-cyan-500 to-blue-600"
    },
    { 
      id: 6,
      title: "Legal Compliance", 
      icon: <Scale size={32} />, 
      desc: "Mitigate legal risks with our comprehensive legal compliance framework. From drafting watertight contracts to ensuring corporate governance standards are met, our legal experts work alongside financial teams to provide holistic protection for your business entities.",
      features: ["Contract Drafting & Vetting", "Corporate Governance", "IP Rights", "Labor Law Compliance"],
      color: "from-slate-600 to-slate-800"
    },
    { 
      id: 7,
      title: "Process Improvement", 
      icon: <Settings size={32} />, 
      desc: "Inefficiency bleeds profit. We analyze your operational workflows to identify bottlenecks, redundancies, and waste. By re-engineering processes and implementing standard operating procedures (SOPs), we streamline your operations to maximize output and minimize cost.",
      features: ["Workflow Optimization", "SOP Development", "Cost Reduction Strategies", "Internal Control Design"],
      color: "from-amber-500 to-orange-600"
    },
  ];

  return (
    <div className="font-sans text-slate-800 bg-white overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full min-h-[85vh] bg-slate-950 text-white flex flex-col justify-center overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="relative z-20">
            <Services /> 
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 mt-12">
          
          <div className="md:w-3/5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/50 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Strategic Business Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Architecture for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
                Financial Growth.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              We empower enterprises with precision auditing, strategic fundraising, and intelligent decision-making support systems.
            </p>
            
            <div className="flex flex-wrap gap-4 py-4">
             <a
  href="mailto:contact@vlead.in?subject=Start%20Conversation&body=Hi%20V-Lead%20Team,"
>
  <button className="bg-white text-slate-900 hover:bg-indigo-50 px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group">
    Start Conversation
    <ArrowRight
      size={18}
      className="group-hover:translate-x-1 transition-transform text-indigo-600"
    />
  </button>
</a>
            </div>
          </div>

          <div className="md:w-2/5 relative hidden md:block">
            {/* Minimalist Graphic */}
            <div className="relative z-10 p-8 rounded-[2rem] bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-500 rounded-lg">
                            <Layers size={20} className="text-white" />
                        </div>
                        <span className="font-semibold text-slate-200">Growth Index</span>
                    </div>
                    <span className="text-green-400 font-mono">+12.5%</span>
                </div>
                <div className="space-y-3">
                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-indigo-500 rounded-full"></div>
                    </div>
                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-5/6 bg-cyan-500 rounded-full"></div>
                    </div>
                </div>
            </div>
             <div className="absolute top-10 -right-6 z-0 bg-slate-800/50 w-full h-full rounded-[2rem] -rotate-6"></div>
          </div>
        </div>
      </div>

      {/* ================= STATS BANNER ================= */}
      <div className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
                {[
                    { label: "Clients Served", val: "500+" },
                    { label: "Capital Raised", val: "$120M" },
                    { label: "Experience", val: "15 Years" },
                    { label: "Audit Success", val: "100%" },
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center justify-center px-4">
                        <span className="text-3xl md:text-4xl font-bold text-slate-900 mb-1 tracking-tight">{stat.val}</span>
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* ================= INTERACTIVE SERVICE CATALOG ================= */}
      <section className="py-24 bg-slate-50" id="services">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="mb-16">
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">Comprehensive Service Catalog</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:h-[600px]">
            
            {/* LEFT COLUMN: Service Navigation */}
            <div className="lg:w-1/3 flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar">
                {services.map((service, index) => (
                    <button 
                        key={index}
                        onClick={() => setActiveService(index)}
                        className={`text-left px-6 py-5 rounded-xl transition-all duration-300 flex items-center justify-between group border ${
                            activeService === index 
                            ? "bg-white border-indigo-100 shadow-lg shadow-indigo-100/50" 
                            : "bg-transparent border-transparent hover:bg-white hover:border-slate-100"
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            <span className={`text-sm font-bold transition-colors ${activeService === index ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"}`}>
                                0{index + 1}
                            </span>
                            <span className={`font-semibold text-lg transition-colors ${activeService === index ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"}`}>
                                {service.title}
                            </span>
                        </div>
                        {activeService === index && (
                            <ChevronRight size={18} className="text-indigo-600" />
                        )}
                    </button>
                ))}
            </div>

            {/* RIGHT COLUMN: Interactive Display Panel */}
            <div className="lg:w-2/3 bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden flex flex-col justify-between">
                
                {/* Decorative Gradient Background for Panel */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${services[activeService].color} opacity-5 rounded-bl-full transition-colors duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10 animate-fadeIn">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${services[activeService].color} flex items-center justify-center text-white mb-8 shadow-lg transform transition-all duration-500`}>
                        {services[activeService].icon}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        {services[activeService].title}
                    </h3>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-2xl">
                        {services[activeService].desc}
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${services[activeService].color}`}></span>
                            What We Deliver
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {services[activeService].features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 size={18} className="text-slate-400 mt-1 shrink-0" />
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-end relative z-10">
                    <button className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-2">
                        View Detailed Brochure <ArrowRight size={16} />
                    </button>
                </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= METHODOLOGY SECTION ================= */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
                <span className="text-indigo-400 font-bold tracking-wider uppercase text-sm">Our Process</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3">From Analysis to Execution</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Connector Line */}
                <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0"></div>

                {[
                    { num: "01", title: "Assessment", desc: "We begin with a deep dive analysis of your current operational bottlenecks and financial health." },
                    { num: "02", title: "Strategy", desc: "Our team designs a custom roadmap tailored to your specific growth targets and market position." },
                    { num: "03", title: "Execution", desc: "We assist in implementation with continuous quality monitoring to ensure the strategy holds." }
                ].map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                            <span className="text-3xl font-bold text-white font-mono">{step.num}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-indigo-100">{step.title}</h3>
                        <p className="text-slate-400 leading-relaxed max-w-xs text-sm">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
            <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-indigo-200">
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900 opacity-20 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
                
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to scale your business architecture?</h2>
                    <p className="text-indigo-100 text-lg mb-12">
                        Join hundreds of forward-thinking companies that trust us with their financial strategy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-indigo-700 px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all">
                            Schedule a Call
                        </button>
                        <button className="bg-transparent border border-indigo-400 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all">
                            Download Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #e2e8f0;
          border-radius: 20px;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>

    </div>
  );
};

export default ServicePage;