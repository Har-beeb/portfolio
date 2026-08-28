import { billreve, insighta, habitTracker, invoice, blog } from "../assets";

export const PROJECTS = [
  {
    id: "billreve",
    title: "BillReve SaaS",
    desc: "A comprehensive SaaS platform for businesses to manage quotes, invoices, and clients.",
    tags: ["React", "Supabase", "Zustand", "Vercel"],
    link: "https://billreve.app",
    image: billreve,
    details:
      "Built as a Monorepo with a cloud-native serverless architecture. Features PostgreSQL, Supabase Auth, Deno Edge Functions, and Row Level Security for secure multi-tenant data isolation.",
  },
  {
    id: "blog",
    title: "Spectrum Fullstack Blog App",
    desc: "A comprehensive blogging platform.",
    tags: ["React", "Node.js", "MaterialUI"],
    link: "https://spectrum-roan.vercel.app/",
    image: blog,
    details:
      "Spectrum: A fullstack application which includes rich text editing, comments, and robust user authorization.",
  },
  {
    id: "insighta",
    title: "Insighta Labs Suite",
    desc: "A powerful CLI and Web interface to securely fetch, filter, and export user profiles.",
    tags: ["TypeScript", "React", "CLI"],
    link: "https://https://insighta-web-tau.vercel.app/",
    image: insighta,
    details:
      "Engineered both a robust Command Line Interface and a responsive Web Dashboard, demonstrating full-stack versatility and strong API design principles.",
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker",
    desc: "Full-stack, offline-first PWA with secure authentication and Playwright E2E testing.",
    tags: ["Next.js", "PWA", "Playwright"],
    link: "https://habit-tracker-haxdev.vercel.app/dashboard",
    image: habitTracker,
    details:
      "Built with a focus on reliability, allowing users to track habits completely offline. Syncs securely when back online using service workers and Next.js API routes.",
  },
  {
    id: "invoice",
    title: "Invoice App",
    desc: "Pixel-perfect mobile-first design with dynamic status filtering and SVG architecture.",
    tags: ["React", "Tailwind CSS"],
    link: "https://invoice-app-haxdev.vercel.app/",
    image: invoice,
    details:
      "Focuses heavily on precise Figma-to-code translation, featuring dark mode, dynamic status colors, and completely responsive form handling.",
  },
  {
    id: "ai-summarizer",
    title: "AI Summarizer",
    desc: "An intelligent web application that distills lengthy articles into concise summaries.",
    tags: ["React", "Tailwind CSS", "OpenAI", "Vite"],
    link: "https://github.com/Har-beeb/ai_summarizer",
    image: "",
    details:
      "Leverages modern AI APIs to process and summarize complex text data. Built with a sleek, responsive UI focused on reading experience and quick content ingestion.",
  },
];

export const THOUGHTS = [
  {
    id: 1,
    date: 'Jun 29, 2026',
    content: 'Just discovered how powerful Zustand is compared to Redux for lightweight state management. Definitely adopting this for future utility apps.'
  },
  {
    id: 2,
    date: 'Jul 25, 2026',
    content: 'Working on optimizing the new AI Summarizer algorithm. LLMs are changing the way we approach basic string processing tasks.'
  },
  {
    id: 3,
    date: 'Aug 20, 2026',
    content: 'Refactoring the UI for BillReve. Sometimes taking a step back and simplifying the DOM structure solves 90% of styling bugs.'
  }
];
