import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        emerald: {
          '50': '#edfff7',
          '100': '#d5ffee',
          '200': '#aeffde',
          '300': '#70ffc6',
          '400': '#2bfda7',
          '500': '#00dc82',
          '600': '#00c06d',
          '700': '#009658',
          '800': '#067549',
          '900': '#07603e',
          '950': '#003721',
        },
        shark: {
          '50': '#f7f7f8',
          '100': '#efeef0',
          '200': '#dbd9de',
          '300': '#bab8c1',
          '400': '#95929e',
          '500': '#787483',
          '600': '#615e6b',
          '700': '#4f4d57',
          '800': '#44424a',
          '900': '#3c3a40',
          '950': '#1c1b1e',
        },
      },
    },
  },
  plugins: [],
};
