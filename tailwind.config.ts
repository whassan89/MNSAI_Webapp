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
        // ── THEME: Stravise Dark Forest Green + Warm Gold ──────────
        // Palette: #192929 Forest · #F4D39A Warm Gold · #C2F380 Lime · #015941 Deep Green · #131F1F Darkest
        navy: {
          50:  "#E8EEEE",   // very light forest tint
          100: "#C5D5D5",   // light forest
          600: "#253D3D",   // medium forest green
          700: "#1F3333",   // dark forest green
          800: "#192929",   // main dark — navbar / hero / dark sections
          900: "#131F1F",   // darkest — footer bg / stats bg
        },
        gold: {
          50:  "#FAF7F2",   // warm cream — light section bg tints
          300: "#9ECC6A",   // darker lime — button hover state
          400: "#C2F380",   // lime green — buttons & primary accent
          500: "#F4D39A",   // warm gold — accent labels on dark bg
          600: "#D4A85C",   // darker gold — hover states for gold labels
        },
        // ── END THEME ─────────────────────────────────────────────
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Marcellus", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
