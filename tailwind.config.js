/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': { 'raw': '(max-device-width: 605px)' },
      'tablet': { 'raw': '(min-device-width: 605px)' },
      'big': { 'raw': '(min-device-width: 1005px)' },
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}

