/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  purge: ['./public/index.html'],
  theme: {
    extend: {},
    colors: {
      red: 'hsl(0, 100%, 74%)',
      green: 'hsl(154, 59%, 51%)',
      blue: 'hsl(248, 32%, 49%)',
      darkBlue: 'hsl(249, 10%, 26%)',
      grayishBlue: 'hsl(246, 25%, 77%)',
      white: 'hsl(0, 100%, 100%)',
      noColor: 'hsla(0, 0%, 0%, 0)',
    },
    fontWeight: {
      400: '400',
      500: '500',
      600: '600',
      700: '700',
    },
  },
  plugins: [],
};
