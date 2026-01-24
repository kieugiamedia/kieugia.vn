import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0f172a",
        gold: "#d4af37",
        "gold-soft": "#f2d27b",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(212,175,55,0.25), 0 24px 60px -30px rgba(212,175,55,0.65)",
      },
    },
  },
  plugins: [],
};

export default config;
