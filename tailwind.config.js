/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '07': 'repeat(7, 1fr)',
      },
      gridTemplateRows: {
        'customRow1': 'auto 1fr auto',
        'customRow3a': 'repeat(3, 130px);',
        'customRow3b': 'repeat(3, 1fr);'
      },
      zIndex: {
        '999': '999',
      },
      boxShadow: {
        'customBoxShadow1': '#111 0px 0px 5px 0px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}