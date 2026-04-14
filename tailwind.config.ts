import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A2463",
          50:  "#EEF2FF",
          100: "#C7D2FE",
          200: "#A5B4FC",
          600: "#1E3A8A",
          700: "#0A2463",
          800: "#071A4A",
          900: "#040F2E",
        },
        gold: {
          DEFAULT: "#D4A853",
          light: "#F0CC7A",
          dark:  "#A67C35",
        },
        teal: {
          DEFAULT: "#14B8A6",
          light:   "#5EEAD4",
          dark:    "#0F766E",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up":  "fadeUp 0.6s ease forwards",
        "fade-in":  "fadeIn 0.5s ease forwards",
        "scale-in": "scaleIn 0.4s ease forwards",
        "float":    "float 6s ease-in-out infinite",
        "glow":     "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp:  { "0%": { opacity:"0", transform:"translateY(30px)" }, "100%": { opacity:"1", transform:"translateY(0)" } },
        fadeIn:  { "0%": { opacity:"0" }, "100%": { opacity:"1" } },
        scaleIn: { "0%": { opacity:"0", transform:"scale(0.9)" }, "100%": { opacity:"1", transform:"scale(1)" } },
        float:   { "0%,100%": { transform:"translateY(0)" }, "50%": { transform:"translateY(-12px)" } },
        glow:    { "0%,100%": { boxShadow:"0 0 20px rgba(20,184,166,0.3)" }, "50%": { boxShadow:"0 0 40px rgba(20,184,166,0.6)" } },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg,#0A2463 0%,#1E3A8A 40%,#0F766E 100%)",
        "card-gradient": "linear-gradient(135deg,#0A2463 0%,#1E3A8A 100%)",
        "gold-gradient": "linear-gradient(135deg,#D4A853 0%,#F0CC7A 100%)",
        "teal-gradient": "linear-gradient(135deg,#14B8A6 0%,#5EEAD4 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
