const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './layouts/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
      },
    },
  },
  plugins: [],
}
