/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        foreground: '#fafafa',
        card: '#18181b',
        cardHover: '#27272a',
        accent: '#8b5cf6', // A nice neon purple
      }
    },
  },
  plugins: [],
}
