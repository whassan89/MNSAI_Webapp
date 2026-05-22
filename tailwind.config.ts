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
        // ── THEME: Warm Charcoal + Sage Green (Piktochart #10) ────
        // Palette: #767771 Charcoal · #E0D9D2 Linen · #9EB371 Sage · #E17878 Dusty Rose
        navy: {
          50:  "#f5f4f3",   // warm off-white tint
          100: "#e8e6e4",   // light warm grey
          600: "#767771",   // warm charcoal (exact swatch)
          700: "#5a5955",   // dark charcoal
          800: "#383838",   // deep charcoal — navbar / hero / dark sections
          900: "#252422",   // darkest — footer bg
        },
        gold: {
          50:  "#e0d9d2",   // warm linen (exact swatch) — light section bg tints
          400: "#b5ca8e",   // light sage — text labels on dark bg
          500: "#9eb371",   // sage green (exact swatch) — buttons & accents
          600: "#7d9059",   // dark sage — hover states
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
