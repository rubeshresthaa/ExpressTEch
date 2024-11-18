/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'rd': '#3F3D56'
      },
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
      },
      gridTemplateColumns: {
        'col-divide': '1fr 1.7fr',
      },
    },
    
  },
  plugins: [],
})