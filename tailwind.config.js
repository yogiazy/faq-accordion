/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/app.js'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        purple: 'hsl(259, 100%, 65%)',
        light_pink: 'hsl(275, 100%, 97%)',
        gray_purple: 'hsl(292, 16%, 49%)',
        dark_purple: 'hsl(292, 42%, 14%)'
      }
    },
  },
  plugins: [],
}