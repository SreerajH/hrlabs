import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#F8F7F5",
        navy: "#0F1F3D",
        "navy-dark": "#0B1930",
        "blue-mid": "#1B4FD8",
        "blue-light": "#EEF2FF",
        slate: "#4B5563",
        border: "#E5E7EB",
        gold: "#C9A84C",
        cream: "#FAF7F2",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["72px", "80px"],
        "h2": ["42px", "50px"],
        "h3": ["28px", "36px"],
        "h4": ["20px", "28px"],
        body: ["17px", "27px"],
        small: ["14px", "20px"],
        label: ["12px", "16px"],
      },
      spacing: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "48px",
        xl: "80px",
        "2xl": "120px",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.05)",
        hover: "0 4px 12px rgba(0,0,0,0.12), 0 16px 40px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
