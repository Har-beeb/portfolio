import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RopeSwitch } from './components/ui/RopeSwitch';
import { DockNav } from './components/ui/DockNav';
import { HeroWidget } from './components/widgets/HeroWidget';
import { AboutWidget } from './components/widgets/AboutWidget';
import { ProjectsWidget } from './components/widgets/ProjectsWidget';
import { SkillsWidget } from './components/widgets/SkillsWidget';
import { ProfileWidget } from './components/widgets/ProfileWidget';
import { FeedbackWidget } from './components/widgets/FeedbackWidget';
import { LifeWidget } from './components/widgets/LifeWidget';
import { CVPage } from './pages/CVPage';

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeTab, setActiveTab] = useState('hero');
  const [currentView, setCurrentView] = useState('portfolio');

  useEffect(() => {
    // Handle hash routing
    const handleHashChange = () => {
      if (window.location.hash === '#cv') {
        setCurrentView('cv');
      } else {
        setCurrentView('portfolio');
      }
    };
    
    // Initial check
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Mobile View Renderer
  const renderActiveTab = () => {
    switch (activeTab) {
      case 'hero': return <HeroWidget />;
      case 'profile': return <ProfileWidget />;
      case 'about': return (
        <div className="flex flex-col gap-6">
          <AboutWidget />
          <LifeWidget />
          <FeedbackWidget />
        </div>
      );
      case 'projects': return <ProjectsWidget />;
      case 'skills': return <SkillsWidget />;
      default: return <HeroWidget />;
    }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 font-sans transition-colors duration-500 overflow-x-hidden">
      <RopeSwitch theme={theme} toggleTheme={toggleTheme} />
      
      {currentView === 'cv' ? (
        <CVPage />
      ) : (
        <>
          {/* Container with dynamic padding for Dock on mobile */}
          <div className="max-w-6xl mx-auto p-4 md:p-8 lg:p-12 pb-24 md:pb-12">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-8 px-2 mt-4 md:mt-0">
          <div className="text-xl font-bold tracking-tighter text-foreground z-10">Har-beeb<span className="text-accent">.dev</span></div>
          <a href="mailto:Harbeeb.dev@gmail.com" className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-foreground transition-colors flex items-center gap-2 z-10 mr-12 md:mr-24">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for work
          </a>
        </header>

        {/* Desktop View (Grid Layout) */}
        <main className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          <HeroWidget />
          <ProfileWidget />
          <AboutWidget />
          <ProjectsWidget />
          <SkillsWidget />
          <LifeWidget />
          <FeedbackWidget />
        </main>

        {/* Mobile View (App-like OS Routing) */}
        <main className="md:hidden relative h-[75vh] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 h-full overflow-y-auto pb-8"
            >
              {renderActiveTab()}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="hidden md:block mt-12 text-center text-sm text-zinc-500 pb-8">
          © {new Date().getFullYear()} Issa Habeeullah Oluwafemi. Built with React, Tailwind v4 & Framer Motion.
        </footer>
      </div>

        <DockNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </>
      )}
    </div>
  );
}

export default App;
