module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          'dark-navy': '#1C1E26',
          'navy': '#32445F',
          'dark-blue': '#0F4C75',
          'blue': '#3282B8',
          'light-blue': '#BBE1FA',
        },
        grey: {
          'muted': '#6c757d',
        }
      }
    }
  },
  plugins: [
  ],
}
// 'dark-navy': '#1C1E26',
// 'navy': '#32445F',
// 'dark-blue': '#0F4C75',
// 'blue': '#3282B8',
// 'light-blue': '#BBE1FA',
// 'muted': '#6c757d',