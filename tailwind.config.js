const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      teal: {
        light: '#8BF5E3',
        primary: '#1CDBBC',
        medium: '#0A838A',
        dark: '#063636',
      },
      gray: {
        1: '#F7F5F5',
        2: '#EAE9E8',
        3: '#D5D5D5',
        4: '#C2C2C2',
        5: '#ABABAB',
        6: '#6F6F6F',
      },
      green: {
        light: '#50B257',
        dark: '#14801D',
      },
      red: {
        light: '#E0595A',
        dark: '#C31112',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-aeonik)', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      listStyleType: {
        roman: 'lower-roman',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
