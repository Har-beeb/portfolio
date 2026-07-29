import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useAnimation } from 'framer-motion';

export const RopeSwitch = ({ theme, toggleTheme }) => {
  const dragY = useMotionValue(0);
  const springY = useSpring(dragY, {
    stiffness: 400,
    damping: 10,
    mass: 1
  });

  const containerControls = useAnimation();

  // Gentle wind pendulum effect on mount
  useEffect(() => {
    containerControls.start({
      rotate: [-2, 3, -2],
      transition: { repeat: Infinity, duration: 5, ease: "easeInOut" }
    });
  }, [containerControls]);

  // Click handler to trigger a random wobble if clicked without pulling
  const handleClick = () => {
    const sign = Math.random() > 0.5 ? 1 : -1;
    const rotateVal = (15 + Math.random() * 20) * sign;
    
    containerControls.start({
      rotate: [0, rotateVal, -rotateVal * 0.8, rotateVal * 0.5, 0],
      transition: { duration: 0.8, ease: "easeOut" }
    }).then(() => {
      // Resume pendulum
      containerControls.start({
        rotate: [-2, 3, -2],
        transition: { repeat: Infinity, duration: 5, ease: "easeInOut" }
      });
    });
  };

  const pathD = useTransform(() => {
    const sY = springY.get();
    const dY = dragY.get();
    const diff = sY - dY;
    const endY = 96 + Math.max(sY, -20);
    
    // Add unpredictability: multiply by a sine wave dependent on the bouncy Y.
    // This makes the string zig-zag and bow unpredictably as it bounces.
    const wobbleFactor = Math.sin(sY * 0.15); 
    const cx = 10 + (diff * 2 * wobbleFactor);
    const cy = (endY / 2) + (diff * 0.5);

    return `M 10 0 Q ${cx} ${cy} 10 ${endY}`;
  });

  const handleDragEnd = (event, info) => {
    if (info.offset.y > 40) {
      toggleTheme();
    }
  };

  return (
    <div className="fixed top-0 right-4 md:right-8 z-50 flex flex-col items-center pointer-events-none">
      <div className="w-4 h-1.5 bg-black dark:bg-white/20 rounded-b-md shadow-lg z-10" />
      
      {/* Rotatable container for pendulum and click swings */}
      <motion.div 
        animate={containerControls}
        style={{ originY: 0 }}
        className="relative flex flex-col items-center w-20"
      >
        <svg 
          width="20" 
          height="160" 
          className="overflow-visible text-yellow-700 dark:text-zinc-500"
          style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}
        >
          <motion.path
            d={pathD}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        
        <motion.div 
          style={{ y: springY }}
          className="absolute top-[96px] w-4 h-6 bg-accent rounded-full shadow-[0_0_15px_rgba(139,92,246,0.6)] border border-white/30 pointer-events-none" 
        />

        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 60 }}
          dragElastic={0.2}
          dragSnapToOrigin={true}
          style={{ y: dragY }}
          onDragEnd={handleDragEnd}
          onClick={handleClick}
          className="absolute top-[80px] w-12 h-20 bg-transparent cursor-grab active:cursor-grabbing pointer-events-auto"
        />
      </motion.div>
    </div>
  );
};
