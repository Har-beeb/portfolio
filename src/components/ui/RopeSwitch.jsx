import React from 'react';
import { motion, useAnimation } from 'framer-motion';

export const RopeSwitch = ({ theme, toggleTheme }) => {
  const controls = useAnimation();
  
  const handleClick = async () => {
    toggleTheme();
    // High-velocity flick/swing when pulled
    await controls.start({
      rotate: [0, 35, -25, 15, -10, 5, 0],
      transition: { duration: 1.2, ease: "easeInOut" }
    });
    // Return to continuous wind animation
    controls.start({
      rotate: [-3, 3, -3],
      transition: { repeat: Infinity, duration: 4, ease: "easeInOut" }
    });
  };

  return (
    <div className="fixed top-0 right-8 md:right-16 z-50 flex flex-col items-center pointer-events-none">
      {/* Base attachment point */}
      <div className="w-4 h-1.5 bg-black dark:bg-white/20 rounded-b-md shadow-lg z-10" />
      
      {/* The flexible rope */}
      <motion.div
        onClick={handleClick}
        initial={{ rotate: 0 }}
        animate={controls}
        onViewportEnter={() => {
          // Start continuous wind animation on load
          controls.start({
            rotate: [-3, 3, -3],
            transition: { repeat: Infinity, duration: 4, ease: "easeInOut" }
          });
        }}
        style={{ originY: 0 }}
        className="w-[2px] h-24 bg-gradient-to-b from-yellow-700 to-yellow-600 dark:from-zinc-700 dark:to-zinc-500 cursor-pointer pointer-events-auto"
      >
        {/* The handle bulb */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-6 bg-accent rounded-full shadow-[0_0_15px_rgba(139,92,246,0.6)] border border-white/30" />
      </motion.div>
    </div>
  );
};
