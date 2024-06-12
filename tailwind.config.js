/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'iqbal-yellow': {
        '50': '#fdfdef',
        '100': '#fcfce0',
        '200': '#fbfac1',
        '300': '#f8f693',
        '400': '#f6f265',
        '500': '#fdffe2',  // Original color
        '600': '#cfcf71',
        '700': '#98984e',
        '800': '#60602e',
        '900': '#38381b',
        '950': '#1d1d0d',
      },
      'iqbal-blue': {
        '50': '#ebf3ff',
        '100': '#d6e6ff',
        '200': '#b0caff',
        '300': '#8ab4ff',  // Original color
        '400': '#5a72a0',  // Original color
        '500': '#5a72a0',  // Repeat to create a balanced scale
        '600': '#40598c',
        '700': '#2b3e66',
        '800': '#182341',
        '900': '#0e162b',
        '950': '#070d1a',
      },
      'iqbal-dark-blue': {
        '50': '#e9eaeb',
        '100': '#d2d4d7',
        '200': '#a6a8af',
        '300': '#7a7c87',
        '400': '#4d515f',
        '500': '#1a2130',  // Original color
        '600': '#151a27',
        '700': '#10141e',
        '800': '#0b0e14',
        '900': '#070a0e',
        '950': '#030506',
      },
    },
  },
  plugins: [daisyui],
}

