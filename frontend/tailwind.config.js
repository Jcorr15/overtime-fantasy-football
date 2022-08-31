/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      poppins: 'Poppins',
      kaushan: 'Kaushan Script',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
