
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-blue-600/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Floating AI Assistant */}
      <ChatBot />
      
      {/* Footer minimal info */}
      <footer className="bg-slate-950 pb-12 text-center">
        <div className="max-w-7xl mx-auto px-4 text-slate-700 text-[10px] uppercase tracking-[0.3em] font-black">
           Clinical Professional • Software Engineer • Nigeria
        </div>
      </footer>
    </div>
  );
}

export default App;
