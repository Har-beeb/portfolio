import React from 'react';
import { Layout, Server, Database, Terminal } from 'lucide-react';
import { SpotlightCard } from '../ui/SpotlightCard';

const SkillCategory = ({ icon: Icon, title, skills }) => (
  <div className="mb-6 last:mb-0">
    <div className="flex items-center justify-center gap-2 mb-3 text-zinc-700 dark:text-zinc-300">
      <Icon size={18} className="text-accent" />
      <span className="font-medium">{title}</span>
    </div>
    <div className="flex flex-wrap justify-center gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1.5 rounded-lg bg-black/5 dark:bg-black/30 border border-black/5 dark:border-white/5 text-sm text-zinc-600 dark:text-zinc-400 transition-colors cursor-default">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export const SkillsWidget = () => (
  <SpotlightCard className="col-span-1 md:col-span-2 lg:col-span-1 row-span-2">
    <h3 className="text-2xl font-semibold mb-6 text-center">Technical Arsenal</h3>
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
  </SpotlightCard>
);
