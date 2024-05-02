/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        joblue: "#022366",
      },
      fontFamily: {
        mukta: ["mukta", "pt-serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};
