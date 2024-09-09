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
        primary: "#0A4E5C", 
        secondary: "#062F37",
      },
      fontFamily: {
        tienne: ['Tienne', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

