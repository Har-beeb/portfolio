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
      I'm a Software/Product Engineer with a UI/UX Design certification. I specialize in the MERN stack to build scalable architectures, particularly utility web apps that solve real-world problems. My passion lies in bridging robust backend logic with seamless, intuitive user experiences.
    </p>
    <div className="mt-auto pt-4 border-t border-black/10 dark:border-white/10 flex flex-col gap-2">
      <div>
        <div className="text-xs text-zinc-500 mb-1">BSc Applied Physics & Electronics</div>
        <div className="text-sm font-medium text-accent">University of Lagos</div>
      </div>
      <div>
        <div className="text-xs text-zinc-500 mb-1">UI/UX Design Certification</div>
        <div className="text-sm font-medium text-accent">Coursera</div>
      </div>
      <div>
        <div className="text-xs text-zinc-500 mb-1">Full-stack Open</div>
        <div className="text-sm font-medium text-accent">University of Helsinki</div>
      </div>
      <div className="mt-2 flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
        </span>
        Gaining more tech knowledge...
      </div>
    </div>
  </SpotlightCard>
);
