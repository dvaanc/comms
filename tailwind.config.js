module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          'saturated-navy': '#2E303E',
          'dark-navy': '#1C1E26',
          'navy': '#32445F',
          'dark-blue': '#0F4C75',
          'blue': '#3282B8',
          'light-blue': '#BBE1FA',
        },
        grey: {
          'muted': '#6c757d',
        },
        custom: {
          'heading': '#25b2bc',

        },
        input: {
          'bg': '#232530',
          'border': 'rgba(0, 0, 0, 0.3)',
          'hover': '#040405',
          'focus': 'hsl(197, 100%, 47.8%)',
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