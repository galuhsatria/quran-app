/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        primary: "#03AA77",
        secondary: "#8789A3",
      },
    },
    fontFamily: {
      arabic: "Noto Sans Arabic",
    },
  },
  plugins: [],
};
