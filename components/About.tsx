
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                alt="Wisdom Warrie" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 glass-card p-8 rounded-3xl shadow-2xl max-w-[240px]">
              <p className="text-blue-400 font-black text-5xl mb-2">5+</p>
              <p className="text-slate-300 text-sm font-bold uppercase tracking-wider">Production Apps Live</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4">The Professional</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              Dual Expertise. <br/>
              Consistent Excellence.
            </h3>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                My name is <span className="text-white font-semibold">Wisdom Warrie</span>. I operate at the intersection of two demanding fields. As a <span className="text-blue-400">Radiographer</span>, I focus on clinical accuracy and patient welfare. As a <span className="text-indigo-400">Web Developer</span>, I translate complex requirements into fluid digital experiences.
              </p>
              <p>
                I don't just build healthcare apps—I build solutions. My development work spans from educational platforms and productivity tools to sophisticated hospital portals and real estate engines.
              </p>
              <p>
                I am obsessed with clean architecture, responsive design, and providing users with tools that genuinely improve their daily lives.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center text-blue-400 mb-4">
                  <i className="fa-solid fa-microscope text-xl"></i>
                </div>
                <h4 className="font-bold text-white text-lg mb-2">Clinical Precision</h4>
                <p className="text-sm text-slate-500">Expertise in diagnostic imaging and patient-first clinical methodology.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-indigo-900/30 flex items-center justify-center text-indigo-400 mb-4">
                  <i className="fa-solid fa-terminal text-xl"></i>
                </div>
                <h4 className="font-bold text-white text-lg mb-2">Tech Innovation</h4>
                <p className="text-sm text-slate-500">Full-stack engineering focused on performance and modern DX.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
