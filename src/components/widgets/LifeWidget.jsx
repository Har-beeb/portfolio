import React, { useState, useEffect } from 'react';
import { BookOpen, Cpu, PenTool, X } from 'lucide-react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { motion, AnimatePresence } from 'framer-motion';
import { THOUGHTS } from '../../data/constants';

export const LifeWidget = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showThoughtsModal, setShowThoughtsModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % THOUGHTS.length);
    }, 5000); // Change quote every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SpotlightCard className="col-span-1 md:col-span-2 flex flex-col justify-center h-full">
      <h3 className="text-2xl font-bold mb-4">Life Outside Coding</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
        When I'm not architecting fullstack applications, I spend my time exploring other creative and intellectual pursuits. 
        I regularly write blogs on tech and design, and I tinker with hardware.
      </p>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <a href="https://hashnode.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-zinc-500 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-xl hover:text-accent hover:bg-accent/10 transition-colors">
          <BookOpen size={16} className="text-accent" /> Tech Blogging
        </a>
        <a href="#" className="flex items-center gap-2 text-sm text-zinc-500 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-xl hover:text-blue-500 hover:bg-blue-500/10 transition-colors">
          <Cpu size={16} className="text-blue-500" /> Smart Home Automation
        </a>
        <button 
          onClick={() => setShowThoughtsModal(true)}
          className="flex items-center gap-2 text-sm text-zinc-500 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-xl hover:text-orange-500 hover:bg-orange-500/10 transition-colors"
        >
          <PenTool size={16} className={showThoughtsModal ? "text-orange-500" : ""} /> Reflective Writing
        </button>
        <div className="flex items-center gap-2 text-sm text-zinc-500 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-xl">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg> Pencil Sketching
        </div>
      </div>

      <div className="relative h-24 w-full bg-black/5 dark:bg-white/5 rounded-xl p-4 overflow-hidden border border-black/10 dark:border-white/10">
        <div className="absolute top-2 left-4 text-xs font-semibold text-accent/60">LATEST THOUGHTS</div>
        <AnimatePresence mode="wait">
          <motion.div
            key={quoteIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowThoughtsModal(true)}
            className="absolute top-8 left-4 right-4 text-sm font-medium italic text-zinc-700 dark:text-zinc-300 line-clamp-2 cursor-pointer hover:text-orange-500 transition-colors"
            title="Click to view all thoughts"
          >
            "{THOUGHTS[quoteIndex]?.content}"
          </motion.div>
        </AnimatePresence>
      </div>
    </SpotlightCard>

      {/* Expanded Thoughts Modal */}
      <AnimatePresence>
        {showThoughtsModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowThoughtsModal(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-card w-full max-w-2xl max-h-[80vh] rounded-3xl p-6 md:p-8 border border-black/10 dark:border-white/10 shadow-2xl relative z-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-6 shrink-0">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <PenTool size={20} />
                  </div>
                  Reflective Writing
                </h2>
                <button onClick={() => setShowThoughtsModal(false)} className="p-2 bg-black/5 dark:bg-white/5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                  <X size={20} />
                </button>
              </div>
              
              <div className="overflow-y-auto pr-4 space-y-6 flex-grow pb-4 scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent">
                {THOUGHTS.map(thought => (
                  <div key={thought.id} className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                    <div className="text-xs font-bold text-accent mb-2 tracking-wider uppercase">{thought.date}</div>
                    <p className="text-foreground leading-relaxed">{thought.content}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
