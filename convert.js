const fs = require('fs');
let c = fs.readFileSync('src/pages/CVPage.jsx', 'utf8');

c = c.replace(/bg-\\[#09090b\\]/g, 'bg-zinc-50')
     .replace(/text-zinc-300/g, 'text-zinc-700')
     .replace(/bg-zinc-900\/40/g, 'bg-white')
     .replace(/border-white\/10/g, 'border-black/10')
     .replace(/text-white/g, 'text-black')
     .replace(/text-zinc-400/g, 'text-zinc-600')
     .replace(/border-white\/5/g, 'border-black/5')
     .replace(/bg-accent\/20/g, 'bg-accent/10')
     .replace(/bg-\\[linear-gradient\\(rgba\\(255,255,255,0.03\\)/g, 'bg-[linear-gradient(rgba(0,0,0,0.03)')
     .replace(/rgba\\(255,255,255,0.03\\)/g, 'rgba(0,0,0,0.03)')
     .replace(/print:text-black/g, '')
     .replace(/print:text-zinc-800/g, '')
     .replace(/print:bg-white/g, '')
     .replace(/print:border-black\/10/g, '')
     .replace(/print:text-zinc-600/g, '')
     .replace(/print:bg-black/g, '')
     .replace(/print:text-zinc-500/g, '')
     .replace(/print:border-zinc-300/g, '')
     .replace(/print:text-zinc-700/g, '')
     .replace(/print:border/g, '')
     .replace(/print:border-black\/20/g, '')
     .replace(/print:bg-transparent/g, '')
     .replace(/print:border-none/g, '')
     .replace(/print:shadow-none/g, '')
     .replace(/print:p-0/g, '')
     .replace(/print:m-0/g, '');

fs.writeFileSync('src/pages/CVPage.jsx', c);
console.log("Replaced");
