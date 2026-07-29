import React from 'react';
import { Coffee, Star } from 'lucide-react';
import { SpotlightCard } from '../ui/SpotlightCard';

export const CoffeeWidget = () => (
  <SpotlightCard className="col-span-1 flex flex-col items-center justify-center text-center gap-4 group">
    <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
      <Coffee size={32} />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">Buy Me a Coffee</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        If you appreciate my work or want to support my open-source projects!
      </p>
    </div>
    <a href="mailto:Harbeeb.dev@gmail.com" className="mt-2 w-full py-3 bg-foreground text-background rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
      <Star size={18} /> Leave a Review
    </a>
  </SpotlightCard>
);
