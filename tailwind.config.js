const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#E8F5E5',
          200: '#BFD5BA',
          300: '#99B792',
          400: '#4C7941',
          500: '#406A36',
          600: '#345B2A',
          700: '#345B2A',
          800: '#274C1F',
          900: '#193A11',
        },
        warmGray: colors.warmGray,
      },
      minWidth: {
        'screen-xl': '1280px',
      },
      maxWidth: {
        56: '14rem',
      },
      spacing: {
        0.25: '0.0625rem',
        128: '32rem',
      },
    },
  },
};
