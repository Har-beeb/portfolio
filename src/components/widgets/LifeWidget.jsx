import React from 'react';
import { BookOpen, Camera, Plane } from 'lucide-react';
import { SpotlightCard } from '../ui/SpotlightCard';

export const LifeWidget = () => (
  <SpotlightCard className="col-span-1 md:col-span-2 flex flex-col justify-center">
    <h3 className="text-2xl font-bold mb-4">Life Outside Coding</h3>
    <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
      When I'm not architecting fullstack applications, I spend my time exploring other creative and intellectual pursuits. 
      I regularly write blogs on tech, design, and continuous learning.
    </p>
    <div className="flex gap-4">
      <div className="flex items-center gap-2 text-sm text-zinc-500 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-xl">
        <BookOpen size={16} className="text-accent" /> Tech Blogging
      </div>
      <div className="flex items-center gap-2 text-sm text-zinc-500 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-xl">
        <Plane size={16} className="text-blue-500" /> Travel
      </div>
      <div className="flex items-center gap-2 text-sm text-zinc-500 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-xl">
        <Camera size={16} className="text-orange-500" /> Photography
      </div>
    </div>
  </SpotlightCard>
);
