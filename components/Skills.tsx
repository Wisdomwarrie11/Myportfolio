
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = {
    frontend: 'Engineering Stack',
    clinical: 'Healthcare Expertise'
  };

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">Versatile Skillset</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(categories).map(([key, label]) => (
            <div key={key} className="bg-slate-900/50 p-10 rounded-3xl border border-slate-800/50 hover:border-slate-700 transition-all">
              <h4 className="text-xl font-bold text-slate-200 mb-10 pb-4 border-b border-slate-800 flex items-center gap-3">
                <span className={`w-2 h-6 rounded-full ${key === 'frontend' ? 'bg-blue-500' : 'bg-indigo-500'}`}></span>
                {label}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {SKILLS.filter(s => s.category === key).map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-4 group">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-800 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xl group-hover:shadow-blue-900/20 group-hover:-translate-y-1">
                      <i className={`${skill.icon} text-2xl`}></i>
                    </div>
                    <span className="text-sm font-bold text-slate-500 group-hover:text-slate-200 transition-colors uppercase tracking-tighter">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
