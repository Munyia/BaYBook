/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pry': '#700b97',
        'pry1': '#8e05c2',
        'dk-pry': '#000000',
        'dk-pry1': '#3e065f',
      },
      animation: {
        'bg-transition': 'bgTransition 10s infinite',
      },
      keyframes: {
        bgTransition: {
          '0%': { backgroundColor: '#000000' },
          '25%': { backgroundColor: '#3e065f' },
          '50%': { backgroundColor: '#700b97' },
          '75%': { backgroundColor: '#8e052' },
          '100%': { backgroundColor: '#000000' },
        },
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        play: ['Playfair Display', 'sans-serif'],
        edu: ['Edu Australia VIC WA NT Hand Guides', ''],
      },
    },
  },
  plugins: [],
}
