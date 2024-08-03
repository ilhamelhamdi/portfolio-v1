/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        clash: "Clash Display Variable",
      },
      colors: {
        "dark-blue": "#162936",
        tosca: "#2f6568",
        rose: "#f2ccc0",
        salmon: "#e57e5e",
        cream: "#F4EDE6",
      },
    },
  },
  plugins: [],
};
