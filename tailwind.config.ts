import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "Helvetica", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
