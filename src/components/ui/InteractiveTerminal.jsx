import React, { useState, useRef } from 'react';

export const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'output', text: '> MERN_Stack_Developer.init()' },
    { type: 'output', text: 'Loading profile...' },
    { type: 'output', text: 'Welcome. Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'input', text: `guest@har-beeb:~$ ${cmd}` }];
      
      switch(cmd) {
        case 'help':
          newHistory.push({ type: 'output', text: 'Available commands: about, skills, contact, clear, ai' });
          break;
        case 'about':
          newHistory.push({ type: 'output', text: 'Issa Habeeullah Oluwafemi. Fullstack dev with a knack for UX.' });
          break;
        case 'skills':
          newHistory.push({ type: 'output', text: 'React, Node, Python, Java, GraphQL, Agentic AI Workflows...' });
          break;
        case 'ai':
          newHistory.push({ type: 'output', text: 'I build alongside autonomous AI agents to 10x development speed, architect complex systems, and accelerate modern workflows.' });
          break;
        case 'contact':
          newHistory.push({ type: 'output', text: 'Email: Harbeeb.dev@gmail.com' });
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case '':
          break;
        default:
          newHistory.push({ type: 'error', text: `Command not found: ${cmd}` });
      }
      setHistory(newHistory);
      setInput('');
      // Scroll container to bottom safely without moving the whole page
      setTimeout(() => {
        if(containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, 50);
    }
  };

  return (
    <div ref={containerRef} className="flex-grow flex flex-col font-mono text-sm mt-4 bg-black/5 dark:bg-black/40 rounded-xl p-4 border border-black/10 dark:border-white/10 overflow-y-auto max-h-[200px]">
      {history.map((line, i) => (
        <div key={i} className={`mb-1 ${line.type === 'error' ? 'text-red-400' : line.type === 'input' ? 'text-accent' : 'text-zinc-500 dark:text-zinc-400'}`}>
          {line.text}
        </div>
      ))}
      <div className="flex items-center text-accent mt-2">
        <span className="mr-2">guest@har-beeb:~$</span>
        <input 
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent outline-none flex-grow text-foreground font-mono"
          spellCheck="false"
          autoFocus
        />
      </div>
      <div ref={inputRef} />
    </div>
  );
};
