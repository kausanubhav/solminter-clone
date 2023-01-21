/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480xpx',
      md: '768px',
      lg: '976px',
    },
    extend: {
      colors: {
        contentBgColor: ' rgba(240,235,244,1)',
        connectBtnBgColor: ' rgb(75,29,84)',
        connectBtnBorderColor: ' rgb(177,51,207)',
        btnHoverColor: ' rgb(247,234,249)',
        iconColor: 'rgba(247,234,249,1)',
      },
    },
  },
  plugins: [],
}
