/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "Libre Baskerville",
        "body-font": "Poppins",
      },
      colors: {
        primary: {
          50: "#0c1d33",
          100: "#070d19",
        },
        accent: "#91dded",
        pinkish: "#ff6f81",
      },
    },
  },
  plugins: [],
};
