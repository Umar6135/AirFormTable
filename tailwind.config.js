/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./newproduct-form.html",
    "./success-form.html",
    "existing-record-form.html",
    "update-success.html",
    "index.html"],
  theme: {
    colors: {
      'white': '#ffffff',
      'blue': '#275DEA',
      'black': '#000000',
      'dark': "#151515",
      'dark-100': "#101010",
      'grey': '#BBB'
    },
    fontFamily: {
      fontMain: ['Inter', 'sans-serif'],
      fontSecondary: ['Aeonik']
    },
    extend: {},
  },
  plugins: [],
}

