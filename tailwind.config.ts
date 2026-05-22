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
        // ── THEME: Steel Blue + Emerald Green (Adobe Color) ───────
        // Palette: #284F70 Steel Blue · #D9DB7F Lime · #FFFFFF White · #36B54A Emerald · #F2EBE1 Warm Cream
        navy: {
          50:  "#e8f0f7",   // very light steel blue tint
          100: "#c5d7e8",   // light steel blue
          600: "#2d5f85",   // medium steel blue
          700: "#1e3d57",   // dark steel blue
          800: "#284F70",   // Steel Blue (exact swatch) — navbar / hero / dark sections
          900: "#162d42",   // darkest — footer bg & button text
        },
        gold: {
          50:  "#F2EBE1",   // Warm Cream (exact swatch) — light section bg tints
          400: "#D9DB7F",   // Lime Yellow-Green (exact swatch) — labels on dark bg
          500: "#36B54A",   // Emerald Green (exact swatch) — buttons & accents
          600: "#2a9039",   // dark emerald — hover states
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
