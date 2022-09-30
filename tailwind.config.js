/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        custom: {
          orange: "#F66B0E",
          black: "#112B3C",
          blue: "#205375",
          grey: "#EFEFEF",
        },
      },
    },
  },
  plugins: [],
};
