/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#ffe5d9",
        "soft-green": "#d8e2dc",
        "light-pink": "#ffcad4",
        "muted-plum": "#9d8189",
        "deep-purple": "#551a8b",
      },
      backgroundColor: {
        "bg-soft-green": "#d8e2dc",
        "bg-blush-pink": "#f4acb7",
      },
      borderColor: {
        "border-dark-gray": "#262626",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      letterSpacing: {
        wide: "3rem",
      },
      padding: {
        large: "100px",
        largeX: "50px",
      },
      maxWidth: {
        "custom-wide": "1200px",
      },
      fontSize: {
        large: "165px",
      },
      scale: {
        200: "2",
      },
    },
  },
  plugins: [],
}
