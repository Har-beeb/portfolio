import React from 'react';
import { Layout, Server, Database, Terminal } from 'lucide-react';
import { SpotlightCard } from '../ui/SpotlightCard';

const SkillCategory = ({ icon: Icon, title, skills }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-black/5 dark:bg-black/20 hover:bg-black/10 dark:hover:bg-black/40 border border-black/5 dark:border-white/5 hover:border-accent/50 transition-colors p-4">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2.5 bg-black/5 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/5 group-hover:scale-110 transition-transform">
         <Icon size={18} className="text-zinc-600 dark:text-zinc-400 group-hover:text-accent transition-colors" />
      </div>
      <span className="font-bold text-zinc-800 dark:text-zinc-200 tracking-wide text-sm uppercase">{title}</span>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1.5 rounded-md bg-black/10 dark:bg-white/5 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export const SkillsWidget = () => (
  <SpotlightCard className="col-span-1 md:col-span-2 lg:col-span-1 row-span-2 flex flex-col">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-2xl font-semibold">Technical Arsenal</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 flex-grow relative z-10">
      <SkillCategory 
        icon={Layout} 
        title="Frontend & UI" 
        skills={['JavaScript', 'React.js', 'Redux', 'Tailwind CSS', 'MaterialUI']} 
      />
      <SkillCategory 
        icon={Server} 
        title="Backend & Logic" 
        skills={['Node.js', 'Express.js', 'Python', 'REST APIs', 'JWT Auth']} 
      />
      <SkillCategory 
        icon={Database} 
        title="Database & Storage" 
        skills={['MongoDB', 'Mongoose', 'Supabase', 'Cloudinary', 'Redis']} 
      />
      <SkillCategory 
        icon={Terminal} 
        title="Tools & Workflows" 
        skills={['Git', 'Vite', 'Postman', 'Figma', 'Prompt Engineering']} 
      />
    </div>
  </SpotlightCard>
);
