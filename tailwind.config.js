const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['roboto', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gray-radial-gradient': 'radial-gradient(180% 180% at right -65% top -65%, transparent 99%, #1f2937)',
        'blue-radial-gradient': 'radial-gradient(180% 180% at right -65% top -65%, transparent 99%, #3b82f6)',
      },
    },
  },
  plugins: [],
}