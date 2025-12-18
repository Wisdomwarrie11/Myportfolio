
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Recent Work</h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From clinical assistants to productivity enhancers and commercial platforms, here are my top builds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group bg-slate-800/30 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full hover:shadow-2xl hover:shadow-blue-900/20">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   {project.link ? (
                     <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                     >
                       Visit Website <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                     </a>
                   ) : (
                     <span className="text-slate-300 font-bold">Case Study Coming Soon</span>
                   )}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-900 text-blue-400 border border-slate-700 rounded-lg text-[10px] font-black uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
