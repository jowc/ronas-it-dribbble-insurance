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
          50: "#1f283d",
          100: "#0b0f17",
        },
        accent: "#84d7e9",
        pinkish: "#ff6476",
      },
      borderRadius: {
        "4xl": "3.0rem",
      },
    },
  },
  plugins: [],
};
