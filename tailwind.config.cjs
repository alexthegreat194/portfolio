const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      gray: colors.gray,
      red: colors.red
    }
  },
  plugins: []
};
