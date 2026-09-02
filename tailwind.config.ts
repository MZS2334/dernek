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
        sage: {
          50: "#f7f4f1",
          100: "#ede5dd",
          200: "#d9c9b8",
          300: "#c4a88f",
          400: "#a68b6e",
          500: "#8b6f4e",
          600: "#6f563b",
          700: "#5a4530",
          800: "#4a3a28",
          900: "#3e3228",
        },
        cream: {
          50: "#faf7f2",
          100: "#f5f0e8",
          200: "#ebe2d4",
          300: "#dccfc0",
          400: "#c9b8a5",
          500: "#b5a08a",
        },
        lavender: {
          50: "#f6f4f5",
          100: "#ede9eb",
          200: "#ddd5d9",
          300: "#c8bcc2",
          400: "#b0a0a8",
          500: "#9d8b95",
          600: "#8a7682",
          700: "#73616c",
          800: "#5f4f59",
          900: "#4e4049",
        },
        teal: {
          50: "#f7f3f0",
          100: "#f0e6df",
          200: "#e0ccc0",
          300: "#cdaa98",
          400: "#b8856a",
          500: "#a06d52",
          600: "#875840",
          700: "#6f4733",
          800: "#5a3a2a",
          900: "#4a3023",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.7s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
