const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './layouts/**/*.{js,jsx}', './data/blogs/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
        secondary: colors.blue,
      },
    },
  },
  plugins: [],
}
