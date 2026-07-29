import React from 'react';
import { Code } from 'lucide-react';
import { SpotlightCard } from '../ui/SpotlightCard';

export const AboutWidget = () => (
  <SpotlightCard className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 flex flex-col gap-4">
    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-2">
      <Code size={24} />
    </div>
    <h3 className="text-2xl font-semibold">About Me</h3>
    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-grow">
      I'm a fullstack MERN developer with a Google UX Design certification. I specialize in building complex, scalable architectures and have a strong passion for seamless user experiences.
    </p>
    <div className="mt-auto pt-4 border-t border-black/10 dark:border-white/10 flex flex-col gap-2">
      <div>
        <div className="text-xs text-zinc-500 mb-1">BSc Computer Science</div>
        <div className="text-sm font-medium text-accent">Undergraduate</div>
      </div>
      <div>
        <div className="text-xs text-zinc-500 mb-1">University of Helsinki</div>
        <div className="text-sm font-medium text-accent">Full-stack Open</div>
      </div>
    </div>
  </SpotlightCard>
);
