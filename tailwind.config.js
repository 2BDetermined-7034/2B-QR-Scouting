module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rhr: ['"SF Sports Night"'],
        'rhr-ns': ['"SF Sports Night NS"'],
        eth: ['"Ethnocentric"'],
        'eth-it': ['"Ethnocentric it"'],
      },
      colors: {
        green: {ethnocentric: '#3d8b3d'},
        red: {ethnocentric: '#ef3340'},
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
