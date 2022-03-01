module.exports = {
  mode: 'jit',
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
          'hyperlink-blue': '#0898D2',
        },
        grey: {
          'muted': '#6c757d',
        },
        custom: {
          'heading': '#25b2bc',
          'serverList': '#202225',
          'server-button': '#36393f',

        },
        input: {
          'bg': '#232530',
          'hover': '#040405',
          'focus': '#00aff4',
        },
        pink: {
          'hot-pink': '#E95678',
        },
      },
      boxShadow: {
        "bottom": '0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05), 0 2px 0 rgba(4,4,5,0.05)'
      },
      keyframes: {
        loadFormContainer: {
          '0%': {
            transform: 'scale(1.1) translateY(-60px) translateZ(20px)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateY(15px)',
            opacity: '0.7',
          },
          '100%': {
            transform: 'scale(1) translateY(0px) translateZ(0px)',
            opacity: '1',
          },
        },
      },
      animation: {
        'loadFormContainer': 'loadFormContainer 0.35s 0s both'
      },
    }
  },
  plugins: [],
}

// keyframes: {
//   loadFormContainer: {
//     '0%': {
//       transform: 'scale(1.1) translateY(-60px) translateZ(20px)',
//       opacity: '0'
//     },
//     '50%': {
//       transform: 'translateY(15px)',
//       opacity: '0.7',
//     },
//     '100%': {
//       transform: 'scale(1) translateY(0px) translateZ(0px)',
//       opacity: '1',
//   },
// },