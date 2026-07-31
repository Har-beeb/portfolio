import React from 'react';
import { Printer, ArrowLeft } from 'lucide-react';

export const CVPage = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-800 font-sans p-4 md:p-8 lg:p-12 overflow-x-hidden">
      
      {/* Top action bar - hidden when printing */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mb-8 print:hidden relative z-50">
        <a href="#" className="flex items-center gap-2 text-zinc-600 hover:text-black transition-colors">
          <ArrowLeft size={16} /> Back to Portfolio
        </a>
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-xl font-medium shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300"
        >
          <Printer size={16} /> Save as PDF
        </button>
      </div>

      {/* The CV Document */}
      <div className="max-w-5xl mx-auto bg-white border border-black/10 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden backdrop-blur-xl print:shadow-none print:p-0 print:m-0 print:border-none">
        
        {/* Decorative Tech Grid (Hidden on print) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none print:hidden" />
        
        {/* Glowing orb effect */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none print:hidden" />

        <div className="relative z-10">
          <header className="border-b border-black/10 pb-10 mb-10">
            <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tighter mb-3">Issa Habeeullah <span className="text-accent">Oluwafemi</span></h1>
            <h2 className="text-xl md:text-2xl text-zinc-600 font-medium mb-6">Software/Product Engineer</h2>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-700 font-medium">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Lagos, Nigeria
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Harbeeb.dev@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +234 811 807 2077
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                github.com/Har-beeb
              </span>
            </div>
          </header>

          <main className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            
            <div className="md:col-span-2 space-y-12">
              <section>
                <h3 className="text-xl font-bold text-black uppercase tracking-widest mb-4 flex items-center gap-3">
                  <span className="w-10 h-[2px] bg-accent"></span> Professional Summary
                </h3>
                <p className="leading-relaxed text-zinc-700">
                  Innovative Software and Product Engineer specializing in the MERN stack. Proven track record in building complex, scalable architectures and utility web applications that solve real-world problems. Passionate about bridging robust backend logic with seamless, intuitive user experiences and modern design paradigms.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-black uppercase tracking-widest mb-6 flex items-center gap-3">
                  <span className="w-10 h-[2px] bg-accent"></span> Selected Projects
                </h3>
                
                <div className="mb-8">
                  <div className="flex justify-between items-baseline mb-1 border-b border-black/10 pb-2">
                    <h4 className="text-lg font-bold text-black">BillReve</h4>
                    <span className="text-xs text-zinc-600 border border-zinc-300 px-2 py-1 rounded-full font-semibold tracking-wide">2023 - Present</span>
                  </div>
                  <p className="text-sm font-medium text-zinc-500 mb-3 mt-2">SaaS Invoice Management System</p>
                  <ul className="list-disc list-outside text-sm space-y-2 ml-4 text-zinc-800 marker:text-accent">
                    <li>Architected a scalable full-stack application using MongoDB, Express, React, and Node.js.</li>
                    <li>Implemented secure JWT authentication, stateful sessions, and role-based access control.</li>
                    <li>Integrated real-time database updates and robust, dynamic invoice generation logic tailored to business workflows.</li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <div className="flex justify-between items-baseline mb-1 border-b border-black/10 pb-2">
                    <h4 className="text-lg font-bold text-black">Smart Home Dashboard</h4>
                    <span className="text-xs text-zinc-600 border border-zinc-300 px-2 py-1 rounded-full font-semibold tracking-wide">2022</span>
                  </div>
                  <p className="text-sm font-medium text-zinc-500 mb-3 mt-2">IoT Automation Interface</p>
                  <ul className="list-disc list-outside text-sm space-y-2 ml-4 text-zinc-800 marker:text-accent">
                    <li>Developed an intuitive UI/UX for controlling IoT devices locally via customized DIY hardware setups.</li>
                    <li>Utilized React alongside hardware-level scripts for low-latency state synchronization.</li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="space-y-12">
              <section>
                <h3 className="text-xl font-bold text-black uppercase tracking-widest mb-6 flex items-center gap-3">
                  <span className="w-10 h-[2px] bg-accent"></span> Skills
                </h3>
                <div className="space-y-5">
                  <div>
                    <h4 className="text-sm font-bold text-black mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Frontend
                    </h4>
                    <p className="text-sm leading-relaxed text-zinc-700">JavaScript, React.js, Redux, Tailwind CSS, MaterialUI</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-black mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Backend
                    </h4>
                    <p className="text-sm leading-relaxed text-zinc-700">Node.js, Express.js, Python, REST APIs, JWT Auth</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-black mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Storage
                    </h4>
                    <p className="text-sm leading-relaxed text-zinc-700">MongoDB, Mongoose, Supabase, Cloudinary, Redis</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-black mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Tools
                    </h4>
                    <p className="text-sm leading-relaxed text-zinc-700">Git, Vite, Postman, Figma, UI/UX, Prompt Engineering</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-black uppercase tracking-widest mb-6 flex items-center gap-3">
                  <span className="w-10 h-[2px] bg-accent"></span> Education
                </h3>
                <div className="mb-5">
                  <h4 className="text-sm font-bold text-black">BSc Applied Physics & Electronics</h4>
                  <p className="text-sm text-zinc-700 mt-1">University of Lagos</p>
                </div>
                <div className="mb-5">
                  <h4 className="text-sm font-bold text-black">UI/UX Design Certification</h4>
                  <p className="text-sm text-zinc-700 mt-1">Coursera</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black">Full-stack Open</h4>
                  <p className="text-sm text-zinc-700 mt-1">University of Helsinki</p>
                  <div className="inline-block mt-2 bg-transparent border border-black/20 text-black text-xs font-semibold px-2 py-1 rounded">In Progress</div>
                </div>
              </section>
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};
