/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "Inter",
        "body-font": "Libre Baskerville",
      },
      colors: {
        primary: {
          50: "#0c1d33",
          100: "#070d19",
        },
        accent: "#91dded",
      },
    },
  },
  plugins: [],
};
