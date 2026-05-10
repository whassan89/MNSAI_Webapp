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
        // ── ORIGINAL THEME (Navy + Gold) ──────────────────────────
        // navy: {
        //   50:  "#f0f4ff",
        //   100: "#dbe4ff",
        //   600: "#1e3a5f",
        //   700: "#162d4a",
        //   800: "#0f1f35",
        //   900: "#0a1628",
        // },
        // gold: {
        //   50:  "#fdf8e7",
        //   400: "#d4af37",
        //   500: "#c9a227",
        //   600: "#b8901f",
        // },
        // ── END ORIGINAL THEME ────────────────────────────────────

        // ── THEME 1 (Deep Purple + Teal) ──────────────────────────
        purple: {
          50:  "#f5f3ff",
          100: "#ede9ff",
          600: "#3d2070",
          700: "#2d1560",
          800: "#1a0a38",
          900: "#0d0520",
        },
        teal: {
          50:  "#e6faf9",
          400: "#2dd4c8",
          500: "#00bfad",
          600: "#00a896",
        },
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
