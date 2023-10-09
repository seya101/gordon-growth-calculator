/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily:{
      mada: "'Mada', sans-serif",
    },
    extend: {
      colors: {
        'regal-blue': '#3B4664',
      }
    },
  },
  plugins: [],
}
