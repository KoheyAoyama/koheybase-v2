const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'title': ['"Noto Sans JP"', 'sans-serif']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#007BBB',
     }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
