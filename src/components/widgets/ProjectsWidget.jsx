import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';
import { PROJECTS } from '../../data/constants';

export const ProjectsWidget = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <SpotlightCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold">Featured Projects</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow relative z-10">
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              className="p-5 rounded-2xl bg-black/5 dark:bg-black/20 hover:bg-black/10 dark:hover:bg-black/40 border border-black/5 dark:border-white/5 hover:border-accent/50 transition-colors cursor-pointer group"
            >
              {/* Image Placeholder (Hidden on mobile) */}
              <div className="hidden md:block w-full h-32 mb-4 bg-black/10 dark:bg-white/10 rounded-xl overflow-hidden relative">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-400 dark:text-zinc-500 text-sm font-medium">
                    [Project Image Placeholder]
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-lg group-hover:text-accent transition-colors">{project.title}</h4>
                <ArrowUpRight size={18} className="text-zinc-400 group-hover:text-accent transition-colors" />
              </div>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4 line-clamp-2">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-md bg-black/10 dark:bg-white/5 text-zinc-700 dark:text-zinc-300">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SpotlightCard>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedId}`}
                className="bg-card w-full max-w-2xl rounded-3xl p-8 border border-black/10 dark:border-white/10 shadow-2xl pointer-events-auto"
              >
                {PROJECTS.filter(p => p.id === selectedId).map(project => (
                  <div key={project.id}>
                    <div className="flex justify-between items-start mb-6">
                      <h2 className="text-3xl font-bold text-accent">{project.title}</h2>
                      <button onClick={() => setSelectedId(null)} className="p-2 bg-black/5 dark:bg-white/5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                        <X size={20} />
                      </button>
                    </div>
                    {/* Image Placeholder (Hidden on mobile) */}
                    <div className="hidden md:block w-full h-48 md:h-64 mb-6 bg-black/10 dark:bg-white/10 rounded-2xl overflow-hidden relative">
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-400 dark:text-zinc-500 font-medium">
                          [Project Image Placeholder]
                        </div>
                      )}
                    </div>
                    <p className="text-lg text-foreground mb-4">{project.desc}</p>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">{project.details}</p>
                    
                    <div className="flex justify-between items-center border-t border-black/10 dark:border-white/10 pt-6">
                       <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-sm px-3 py-1 rounded-md bg-accent/10 text-accent font-medium">{tag}</span>
                        ))}
                      </div>
                      <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-xl hover:scale-105 transition-transform">
                        View Source <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
