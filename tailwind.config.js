/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    fontFamily: {
      'pacifico' : ["Pacifico", 'cursive'],
      'quicksand' : ["Quicksand", 'sans-serif']
    }
  },
  plugins: [],
}

