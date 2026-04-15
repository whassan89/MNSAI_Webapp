import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4ff",
          100: "#dbe4ff",
          600: "#1e3a5f",
          700: "#162d4a",
          800: "#0f1f35",
          900: "#0a1628",
        },
        gold: {
          50:  "#fdf8e7",
          400: "#d4af37",
          500: "#c9a227",
          600: "#b8901f",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
