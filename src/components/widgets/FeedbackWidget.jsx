import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, Trash2, KeyRound } from 'lucide-react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../lib/supabase';

export const FeedbackWidget = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [startIndex, setStartIndex] = useState(0);

  const [showAdmin, setShowAdmin] = useState(false);
  const [showAdminSuccess, setShowAdminSuccess] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [adminAttempts, setAdminAttempts] = useState(0);

  // Load feedbacks from Supabase or fallback
  useEffect(() => {
    const loadFeedback = async () => {
      try {
        const { data, error } = await supabase
          .from('feedback')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        if (data && data.length > 0) {
          // Map to match our local object structure
          const formattedData = data.map(item => ({
            id: item.id,
            name: item.name || "Anonymous",
            text: item.message
          }));
          setFeedbacks(formattedData);
          localStorage.setItem('portfolio_feedback', JSON.stringify(formattedData));
          return;
        }
      } catch (err) {
        console.error("Supabase fetch failed, falling back to local storage.", err);
      }
      
      // Fallback
      const saved = localStorage.getItem('portfolio_feedback');
      if (saved) {
        try {
          setFeedbacks(JSON.parse(saved));
        } catch (e) {
          console.error("Failed to parse local feedbacks", e);
        }
      } else {
        setFeedbacks([
          { id: 1, name: "Visitor", text: "Love the Living OS design! Keep it up." },
          { id: 2, name: "Tech Enthusiast", text: "The rope physics are incredible, very organic feeling." },
          { id: 3, name: "Recruiter", text: "Impressive attention to detail." }
        ]);
      }
    };
    
    loadFeedback();
  }, []);

  // Auto-scroll logic for the marquee
  useEffect(() => {
    if (feedbacks.length <= 3) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [feedbacks]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newFeedback = {
      id: Date.now(),
      name: name.trim() || "Anonymous",
      text: message.trim()
    };

    // Optimistic UI update
    const updated = [newFeedback, ...feedbacks];
    setFeedbacks(updated);
    setMessage('');
    setName('');
    setStartIndex(0);

    try {
      await supabase.from('feedback').insert([
        { name: name.trim() || "Anonymous", message: message.trim() }
      ]);
    } catch (err) {
      console.error("Failed to save feedback to database", err);
      localStorage.setItem('portfolio_feedback', JSON.stringify(updated));
    }
  };

  const handleClearTrigger = () => {
    setShowAdmin(true);
    setAdminAttempts(0);
    setAdminPassword('');
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const adminPass = import.meta.env.VITE_ADMIN_PASSWORD?.toLowerCase() || 'fathia';
    
    if (adminPassword.trim().toLowerCase() === adminPass) {
      setShowAdminSuccess(true);
      setAdminAttempts(0);
    } else {
      setAdminAttempts(prev => prev + 1);
    }
  };

  const executeClear = async () => {
    setFeedbacks([]);
    localStorage.removeItem('portfolio_feedback');
    setStartIndex(0);
    setShowAdmin(false);
    setShowAdminSuccess(false);

    try {
      await supabase.from('feedback').delete().neq('id', 0); // Delete all
    } catch (err) {
      console.error("Failed to clear database", err);
    }
  };

  // Get exactly 3 visible feedbacks for the scrolling effect
  const visibleFeedbacks = [];
  if (feedbacks.length > 0) {
    for (let i = 0; i < Math.min(2, feedbacks.length); i++) {
      visibleFeedbacks.push(feedbacks[(startIndex + i) % feedbacks.length]);
    }
  }

  return (
    <SpotlightCard className="col-span-1 md:col-span-2 lg:col-span-3 h-full group p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8 h-full items-center">
        
        {/* Header Segment */}
        <div className="md:col-span-1 lg:col-span-3 flex flex-col gap-3">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
            <MessageSquare size={20} />
          </div>
          <div>
            <h3 className="font-bold text-xl">Leave Feedback</h3>
            <p className="text-sm text-zinc-500 mt-1">Tips, thoughts, or just say hi!</p>
          </div>
        </div>

        {/* Form Segment */}
        <form onSubmit={handleSubmit} className="md:col-span-1 lg:col-span-4 flex flex-col gap-3 relative z-10">
          <input 
            type="text" 
            placeholder="Your Name (Optional)" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
          />
          <div className="relative">
            <textarea 
              placeholder="Write something..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-3 py-3 text-sm h-24 resize-none focus:outline-none focus:border-accent transition-colors pr-10"
              required
            />
            <button 
              type="submit"
              className="absolute bottom-2 right-2 p-1.5 bg-accent text-white rounded-md hover:opacity-90 transition-opacity"
            >
              <Send size={14} />
            </button>
          </div>
        </form>

        {/* Display Segment (Auto-scrolling) */}
        <div className="md:col-span-1 lg:col-span-5 flex flex-col overflow-hidden h-64 border-t md:border-t-0 md:border-l border-black/10 dark:border-white/10 pt-6 md:pt-0 md:pl-8 min-w-0">
          <div className="flex flex-wrap justify-between items-start gap-y-2 gap-x-2 mb-3 min-h-[3rem]">
            <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mt-1">Live Feedback</span>
            
            {/* Admin Clear Logic */}
            {feedbacks.length > 0 && !showAdmin && !showAdminSuccess && (
              <button onClick={handleClearTrigger} className="flex items-center gap-1 text-xs text-zinc-400 hover:text-red-500 transition-colors">
                <Trash2 size={12} /> Clear
              </button>
            )}
            
            {showAdmin && !showAdminSuccess && (
              <form onSubmit={handleAdminSubmit} className="flex flex-col items-end gap-1 relative z-10">
                <div className="flex items-center gap-2">
                  <input 
                    type="password"
                    placeholder="Admin Password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    className="w-24 sm:w-32 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded px-2 py-1 text-xs focus:outline-none focus:border-red-500 transition-colors"
                    autoFocus
                  />
                  <button type="submit" className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors">
                    <KeyRound size={12} />
                  </button>
                  <button type="button" onClick={() => setShowAdmin(false)} className="text-xs text-zinc-500 hover:text-zinc-700">✕</button>
                </div>
                {adminAttempts >= 2 && (
                  <span className="text-[10px] text-red-500 italic">Hint: His lover's name is the password</span>
                )}
              </form>
            )}

            {showAdminSuccess && (
              <div className="flex flex-col items-end gap-2 bg-black/5 dark:bg-white/5 p-2 rounded-lg border border-accent/20 w-full ml-4">
                <span className="text-[11px] text-zinc-600 dark:text-zinc-300 italic text-right leading-tight">"It's our little secret, promise not to say a word"</span>
                <button onClick={executeClear} className="text-[11px] font-bold bg-accent text-white px-3 py-1 rounded hover:bg-accent/80 transition-colors">
                  I Accept
                </button>
              </div>
            )}
          </div>
          
          <div className="flex flex-col gap-3 relative flex-grow">
            <AnimatePresence mode="popLayout">
              {visibleFeedbacks.map((fb) => (
                <motion.div 
                  key={fb.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-black/5 dark:bg-white/5 p-4 rounded-xl text-sm border border-black/5 dark:border-white/5 shadow-sm"
                >
                  <span className="font-semibold text-accent block mb-1">{fb.name}</span>
                  <span className="text-zinc-600 dark:text-zinc-300 leading-relaxed line-clamp-2">{fb.text}</span>
                </motion.div>
              ))}
            </AnimatePresence>
            {feedbacks.length === 0 && (
              <div className="text-sm text-zinc-500 italic mt-4 text-center">No feedback yet. Be the first!</div>
            )}
          </div>
        </div>

      </div>
    </SpotlightCard>
  );
};
