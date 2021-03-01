const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#4C7941',
          500: '#406A36',
          600: '#345B2A',
        },
        warmGray: colors.warmGray,
      },
      minWidth: {
        'screen-xl': '1280px',
      },
    },
  },
};
