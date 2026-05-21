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
        // ── THEME: Deep Burgundy + Champagne ──────────────────────
        navy: {
          50:  "#fef1f5",
          100: "#fce0e9",
          600: "#6b1535",
          700: "#4a0e26",
          800: "#2d0f1e",
          900: "#1a0811",
        },
        gold: {
          50:  "#fdf8f4",
          400: "#e2c9a0",
          500: "#d4b896",
          600: "#c4a47e",
        },
        // ── END THEME ─────────────────────────────────────────────

        // ── THEME 1 (Deep Purple + Teal) ──────────────────────────
        // purple: {
        //   50:  "#f5f3ff",
        //   100: "#ede9ff",
        //   600: "#3d2070",
        //   700: "#2d1560",
        //   800: "#1a0a38",
        //   900: "#0d0520",
        // },
        // teal: {
        //   50:  "#e6faf9",
        //   400: "#2dd4c8",
        //   500: "#00bfad",
        //   600: "#00a896",
        // },
        // ── END THEME 1 ───────────────────────────────────────────
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
