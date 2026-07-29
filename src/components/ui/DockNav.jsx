import React from 'react';
import { Terminal, Code, Layout, User, Image } from 'lucide-react';
import { motion } from 'framer-motion';

export const DockNav = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'hero', icon: Terminal, label: 'Terminal' },
    { id: 'profile', icon: Image, label: 'Photos' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: Layout, label: 'Projects' },
    { id: 'skills', icon: Code, label: 'Skills' },
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 dark:bg-black/60 backdrop-blur-xl rounded-full p-2 flex gap-1 border border-black/10 dark:border-white/10 shadow-2xl">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative p-3 rounded-full flex items-center justify-center transition-colors ${activeTab === tab.id ? 'text-accent' : 'text-zinc-500 hover:text-foreground'}`}
        >
          {activeTab === tab.id && (
            <motion.div layoutId="dock-indicator" className="absolute inset-0 bg-accent/10 dark:bg-accent/20 rounded-full" />
          )}
          <tab.icon size={22} className="relative z-10" />
        </button>
      ))}
    </div>
  );
};
