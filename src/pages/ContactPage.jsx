import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  HelpCircle, 
  ArrowRight,
  CheckCircle2,
  Globe,
  Plus,
  Minus,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';
// Keeping the same navbar import assumption
import Services from '../components/Services';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    { question: "How quickly can we expect a response?", answer: "Our standard response time for new inquiries is under 4 business hours. For urgent financial matters, our support line is available 24/7 for existing clients." },
    { question: "Do you offer remote consultations?", answer: "Yes, 80% of our client engagements are conducted remotely via secure video conferencing. We utilize military-grade encryption for all document sharing." },
    { question: "What is your typical engagement model?", answer: "We offer both retainer-based models for ongoing advisory and project-based pricing for specific audits or fundraising campaigns." },
  ];

  const locations = [
    { city: "New York", address: "88 Pine St, Financial District", phone: "+1 (212) 555-0199", email: "ny@finance.inc", type: "Global HQ" },
    { city: "London", address: "1 Canada Square, Canary Wharf", phone: "+44 20 7946 0958", email: "ldn@finance.inc", type: "European Hub" },
    { city: "Singapore", address: "12 Marina View, Asia Square", phone: "+65 6535 0011", email: "sg@finance.inc", type: "APAC Center" },
  ];

  return (
    <div className="font-sans text-slate-800 bg-white overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* ================= HERO HEADER ================= */}
      <div className="relative w-full bg-slate-950 text-white pt-32 pb-24 overflow-hidden">
         {/* Background Effects */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[120px]"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px]"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              24/7 Global Support
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Build Your Financial Future.</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Whether you have a question about audits, fundraising, or compliance, our team of experts is ready to answer all your inquiries.
            </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT SPLIT ================= */}
      <div className="container mx-auto px-6 py-16 -mt-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* LEFT: Contact Form Card */}
            <div className="lg:w-7/12 order-2 lg:order-1 mt-20">
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                            <MessageSquare size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
                    </div>

                    {formStatus === 'success' ? (
                        <div className="bg-green-50 border border-green-100 rounded-2xl p-12 text-center animate-fadeIn">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                            <p className="text-green-700">Thank you for reaching out. Our team will get back to you within 4 hours.</p>
                            <button 
                                onClick={() => setFormStatus('idle')}
                                className="mt-8 text-green-700 font-semibold hover:text-green-900 underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                                    <input required type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                                    <input required type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
                                <input required type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Service Interest</label>
                                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-slate-600">
                                    <option>Business Advisory</option>
                                    <option>Fund Raising</option>
                                    <option>Auditing & Assurance</option>
                                    <option>Compliance Support</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                                <textarea required rows="4" placeholder="Tell us about your project needs..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={formStatus === 'submitting'}
                                className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${
                                    formStatus === 'submitting' ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200'
                                }`}
                            >
                                {formStatus === 'submitting' ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>

            {/* RIGHT: Contact Info & Locations */}
            <div className="lg:w-5/12 order-1 lg:order-2 flex flex-col gap-6 mt-20">
                
                {/* Info Card */}
                <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500 rounded-full blur-[80px] opacity-40"></div>
                    
                    <h3 className="text-xl font-bold mb-6 relative z-10">Direct Contact</h3>
                    <div className="space-y-6 relative z-10">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                <Mail size={20} className="text-indigo-400" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm mb-1">General Inquiries</p>
                                <p className="font-semibold text-lg hover:text-indigo-300 transition-colors cursor-pointer">hello@finance.inc</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                <Phone size={20} className="text-indigo-400" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm mb-1">Urgent Support</p>
                                <p className="font-semibold text-lg">+1 (800) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                <Clock size={20} className="text-indigo-400" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm mb-1">Business Hours</p>
                                <p className="font-semibold">Mon - Fri: 08:00 - 19:00 EST</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-slate-700/50 flex gap-4">
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-indigo-600 transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-indigo-600 transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-indigo-600 transition-colors"><Facebook size={20} /></a>
                    </div>
                </div>

                {/* Locations Grid */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-6 text-indigo-600">
                        <Globe size={20} />
                        <span className="font-bold text-sm uppercase tracking-wide">Our Global Hubs</span>
                    </div>
                    <div className="space-y-6">
                        {locations.map((loc, index) => (
                            <div key={index} className="group relative pl-4 border-l-2 border-slate-100 hover:border-indigo-500 transition-all duration-300">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{loc.city}</h4>
                                        <p className="text-xs font-semibold text-indigo-500 mb-1">{loc.type}</p>
                                        <p className="text-sm text-slate-500">{loc.address}</p>
                                    </div>
                                    <a href="#" className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-indigo-600 transition-all">
                                        <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                        <a href="#" className="text-xs font-bold text-indigo-600 flex items-center justify-center gap-1 hover:gap-2 transition-all">
                            VIEW ALL 4 more location <ArrowRight size={12} />
                        </a>
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* ================= FAQ & SUPPORT SECTION ================= */}
      <div className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
                <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Support</span>
                <h2 className="text-3xl font-bold text-slate-900 mt-2">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
                    >
                        <button 
                            onClick={() => toggleFaq(index)}
                            className="w-full px-8 py-6 text-left flex items-center justify-between"
                        >
                            <span className="font-bold text-slate-800 text-lg">{faq.question}</span>
                            <div className={`p-2 rounded-full transition-colors ${activeFaq === index ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>
                                {activeFaq === index ? <Minus size={18} /> : <Plus size={18} />}
                            </div>
                        </button>
                        <div 
                            className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${
                                activeFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-slate-500">Still have questions?</p>
                <a href="mailto:support@finance.inc" className="text-indigo-600 font-bold hover:underline mt-1 inline-block">
                    Chat with our support team
                </a>
            </div>
        </div>
      </div>

      {/* ================= MAP PLACEHOLDER / BOTTOM CTA ================= */}
      <div className="h-96 w-full bg-slate-200 relative grayscale hover:grayscale-0 transition-all duration-700">
        <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
            alt="Office Map" 
            className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 animate-bounce">
                <MapPin className="text-indigo-600" fill="currentColor" size={24} />
                <span className="font-bold text-slate-900">Visit our HQ in Bangalore</span>
            </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
            animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;