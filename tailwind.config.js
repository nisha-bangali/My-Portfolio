/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*/.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        gray: {
          950: "#0B0B0D",
        },
      },
    },
  },
  plugins: [],
}
