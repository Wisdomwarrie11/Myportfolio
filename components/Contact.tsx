
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4">Connection</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8">Ready to start <br/>something big?</h3>
            <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
              I'm always open to discussing web development projects, radiography consults, or tech roles. Let's make it happen.
            </p>
            
            <div className="space-y-8">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 group-hover:border-blue-500 group-hover:-translate-y-1">
                  <i className="fa-solid fa-envelope text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl font-bold group-hover:text-blue-400 transition-colors">{CONTACT_INFO.email}</p>
                </div>
              </a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 group-hover:border-blue-500 group-hover:-translate-y-1">
                  <i className="fa-solid fa-phone text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-xl font-bold group-hover:text-blue-400 transition-colors">{CONTACT_INFO.phone}</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-md p-10 rounded-[2rem] border border-slate-800 shadow-3xl">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 outline-none transition-all text-white placeholder:text-slate-700"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 outline-none transition-all text-white placeholder:text-slate-700"
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none text-white placeholder:text-slate-700"
                  placeholder="Tell me about your vision..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg shadow-2xl shadow-blue-900/40 transition-all transform active:scale-95 flex items-center justify-center gap-3"
              >
                Send Inquiry <i className="fa-solid fa-paper-plane text-sm"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-black text-white">Wisdom Warrie</span>
            <p className="text-slate-600 text-sm font-medium">Expert Radiographer & Full-stack Engineer</p>
          </div>
          <p className="text-slate-700 text-sm font-bold order-3 md:order-2">
            © {new Date().getFullYear()} WISDOM WARRIE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 order-2 md:order-3">
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-600 transition-all"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-600 transition-all"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-600 transition-all"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
