/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Rubik", "sans-serif"],
        secondary: ["Lato", "sans-serif"],
        extra: ['Inter', 'sans-serif']
      },
      colors: {
        primary: "#45120F",
        secondary: "#D96D46",
        tertiry: "#eb0029",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
