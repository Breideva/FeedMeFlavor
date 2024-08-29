/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#302F37", 
        backgroundLight: "rgba(67, 66, 77, 0.3)",
        text: "#E6FDFF", 
        primary: "#0B5563", 
        secondary: "#18BCDC",
      },
      fontFamily: {
        tienne: ['Tienne', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

