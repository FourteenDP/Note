/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
