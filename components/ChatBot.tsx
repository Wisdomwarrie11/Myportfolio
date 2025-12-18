
import React, { useState, useRef, useEffect } from 'react';
import { getPortfolioAssistantResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm Wisdom's AI agent. Want to know more about StudiFocus, StudiRad, or his radiography career?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getPortfolioAssistantResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-[350px] sm:w-[420px] h-[550px] bg-slate-900 rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] border border-slate-800 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-slate-800 p-6 text-white flex justify-between items-center border-b border-slate-700">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/20">
                <i className="fa-solid fa-bolt text-lg"></i>
              </div>
              <div>
                <p className="font-black text-sm uppercase tracking-widest leading-none">Wisdom Bot</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Online & Ready</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors">
              <i className="fa-solid fa-xmark text-slate-400"></i>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 bg-slate-950">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl font-medium text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none shadow-xl'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 bg-slate-900 border-t border-slate-800 flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              className="flex-grow bg-slate-800 border-none rounded-2xl px-5 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-blue-600 placeholder:text-slate-500 font-medium"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/30 disabled:opacity-50 active:scale-95"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-blue-600 text-white rounded-2xl shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] flex items-center justify-center hover:scale-105 hover:-translate-y-1 transition-all duration-300 group"
        >
          <i className="fa-solid fa-comment-dots text-2xl group-hover:rotate-12 transition-transform"></i>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
