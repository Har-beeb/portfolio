import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightCard } from '../ui/SpotlightCard';

const IMAGES = ['/img1.jpg', '/img2.jpg'];

export const ProfileWidget = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SpotlightCard className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 p-0 overflow-hidden relative group !border-0 h-[400px] md:h-auto md:min-h-[300px]">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={IMAGES[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full object-cover object-[center_top] md:object-center absolute inset-0 rounded-3xl"
          alt="Profile Carousel"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-3xl" />
      <div className="absolute bottom-6 left-6 z-10">
        <h3 className="text-xl font-bold text-white mb-2">Me</h3>
        <div className="flex gap-1.5">
          {IMAGES.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-5 bg-accent' : 'w-1.5 bg-white/50'}`} />
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
};
