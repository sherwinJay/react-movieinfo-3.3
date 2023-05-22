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
        'customRow3a': 'repeat(3, 117px);',
        'customRow3b': 'repeat(3, 1fr);'
      },
      zIndex: {
        '999': '999',
      },
      boxShadow: {
        'customBoxShadow1': '#111 0px 0px 5px 0px'
      },
      animation: {
        'animationLoader1': 'pathRect 2s linear infinite;',
      },
      stroke: {
        'strokeDasharrayLoader1': '360 160',
      },
      keyframes: {
        pathRect: {
          '25%': {
            strokeDashoffset: '130'
          },
        
          '50%': {
            strokeDashoffset: '260'
          },
        
          '75%': {
            strokeDashoffset: '390'
          },
        
          '100%': {
            strokeDashoffset: '520'
          },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}