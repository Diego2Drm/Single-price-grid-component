/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: theme => ({
      ...theme('color'),
      'Cyan': '#29b3b0',
      'Bright-Yellow': '#c0df34',
      'Light-Gray': 'rgb(229, 239, 245)',
      'Grayish-Blue': '#98a6bd',
    }),
    textColor: {
      'Cyan': '#29b3b0',
      'Bright-Yellow': '#c0df34',
      'Light-Gray': 'rgb(229, 239, 245)',
      'Grayish-Blue': '#98a6bd',
    },
    fontFamily: {
      karla: ['Karla',' sans-serif'],
    }
  },
  },
  plugins: [],
}

