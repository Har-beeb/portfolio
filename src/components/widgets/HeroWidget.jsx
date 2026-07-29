import React from 'react';
import { Command, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { SpotlightCard } from '../ui/SpotlightCard';
import { InteractiveTerminal } from '../ui/InteractiveTerminal';

export const HeroWidget = () => (
  <SpotlightCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 flex flex-col justify-between group">
    <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 text-accent group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700">
      <Command size={180} />
    </div>
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Issa Habeeullah<br/><span className="text-accent">Oluwafemi</span> (Har-beeb)</h1>
      <p className="text-zinc-600 dark:text-zinc-400 max-w-md">Building complex, scalable web apps and intuitive UX. From secure CLI tools to offline-first applications.</p>
      
      <InteractiveTerminal />
      
      <div className="flex flex-wrap items-center gap-4 mt-8">
        <a href="https://github.com/Har-beeb" target="_blank" rel="noreferrer" className="bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 p-3 rounded-full transition-colors border border-black/5 dark:border-white/5 hover:border-accent/50 text-zinc-600 dark:text-zinc-300 hover:text-accent">
          <FaGithub size={24} />
        </a>
        <a href="http://www.linkedin.com/in/har-beebullah" target="_blank" rel="noreferrer" className="bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 p-3 rounded-full transition-colors border border-black/5 dark:border-white/5 hover:border-accent/50 text-zinc-600 dark:text-zinc-300 hover:text-accent">
          <FaLinkedin size={24} />
        </a>
        <a href="https://wa.me/2348118072077" target="_blank" rel="noreferrer" className="bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 p-3 rounded-full transition-colors border border-black/5 dark:border-white/5 hover:border-accent/50 text-zinc-600 dark:text-zinc-300 hover:text-accent">
          <FaWhatsapp size={24} />
        </a>
        <a href="https://www.instagram.com/har_beebullah/" target="_blank" rel="noreferrer" className="bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 p-3 rounded-full transition-colors border border-black/5 dark:border-white/5 hover:border-accent/50 text-zinc-600 dark:text-zinc-300 hover:text-accent">
          <FaInstagram size={24} />
        </a>
        <a href="mailto:Harbeeb.dev@gmail.com" className="bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 p-3 rounded-full transition-colors border border-black/5 dark:border-white/5 hover:border-accent/50 text-zinc-600 dark:text-zinc-300 hover:text-accent">
          <Mail size={24} />
        </a>
        <div className="flex-1"></div>
        <a 
          href="#cv" 
          className="flex items-center gap-2 bg-accent text-white px-6 py-2 rounded-full font-medium shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:-translate-y-1 transition-all duration-300"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          View CV
        </a>
      </div>
    </div>
  </SpotlightCard>
);
