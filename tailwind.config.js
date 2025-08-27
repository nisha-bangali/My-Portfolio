/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class", // enables dark mode with body.classList.toggle("dark")
  theme: {
    extend: {
      colors: {
        primary: "#0A2540",
        secondary: "#FFFFFF",
        accent: "#0066FF",
        background: "#F7F9FC",
        surface: "#FFFFFF",
        success: "#00C48C",

        textLight: "#0A2540",
        textDark: "#FFFFFF",
        textMuted: "#6B7280",
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "2rem",
        lg: "4rem",
        xl: "8rem",
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        custom: "0 4px 12px rgba(0, 0, 0, 0.05)",
        card: "0 8px 24px rgba(0, 0, 0, 0.1)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      fontFamily: {
        sans: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
      },
      fontSize: {
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [],
};
