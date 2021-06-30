module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width : {
        'i' : '250px',
      },
      height : {
        'i' : '600px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
