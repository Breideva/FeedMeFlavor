/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F5EDDE",
        blueBackground: "#888FB8",
        text: "#1B150D",
        primary: "#062BFF",
        secondary: "#061040",
        box: "#817c9b",
      },
      fontFamily: {
        martel: ["Martel", "sans-serif"],
      },
    },
  },
  plugins: [],
};
