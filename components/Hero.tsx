
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-300 text-xs font-bold tracking-widest uppercase mb-8 animate-pulse">
            <span className="mr-2">⚡</span> Innovation Meets Precision
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight mb-8 leading-[1.1]">
            Wisdom Warrie: <br/>
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Developer & Radiographer</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed">
            A professional <span className="text-slate-200">Radiographer</span> by day and a <span className="text-slate-200">Full-stack Engineer</span> by choice. I build high-performance web applications with React, Vue, and TypeScript, delivering precision in every line of code.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#projects"
              className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/30 transform hover:-translate-y-1"
            >
              Explore Portfolio
            </a>
            <a
              href="#contact"
              className="px-10 py-4 bg-slate-800 text-white border border-slate-700 rounded-2xl font-bold hover:bg-slate-700 transition-all shadow-md transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
          
          <div className="mt-24 pt-12 border-t border-slate-900 flex flex-wrap justify-center items-center gap-10 grayscale opacity-40">
            <div className="flex items-center gap-3"><i className="fa-brands fa-react text-3xl"></i> <span className="font-bold">React</span></div>
            <div className="flex items-center gap-3"><i className="fa-solid fa-code text-3xl"></i> <span className="font-bold">TypeScript</span></div>
            <div className="flex items-center gap-3"><i className="fa-brands fa-vuejs text-3xl"></i> <span className="font-bold">Vue.js</span></div>
            <div className="flex items-center gap-3"><i className="fa-solid fa-wind text-3xl"></i> <span className="font-bold">Tailwind</span></div>
            <div className="flex items-center gap-3"><i className="fa-brands fa-bootstrap text-3xl"></i> <span className="font-bold">Bootstrap</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
