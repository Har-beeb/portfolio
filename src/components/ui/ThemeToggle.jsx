import React from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = ({ theme, toggleTheme }) => (
  <button 
    onClick={toggleTheme}
    className="fixed top-6 right-6 z-50 p-3 rounded-full bg-card border border-black/10 dark:border-white/10 shadow-lg hover:scale-110 transition-transform text-foreground"
  >
    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);
