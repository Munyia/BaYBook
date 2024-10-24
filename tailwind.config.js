/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#E6DAFE',
        'pry': '#BC20FF',
        'pry1': '#AE8DF8',
        'dk-pry1': '#8318B4',
      },
      animation: {
        'bg-transition': 'bgTransition 5s infinite',
      },
      keyframes: {
        bgTransition: {
          '0%, 100%': { backgroundColor: '#8318B4' }, // Start and end at the same color
          '50%': { backgroundColor: '#BC20FF' }, // Midpoint
        },
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        play: ['Playfair Display', 'sans-serif'],
        edu: ['Edu Australia VIC WA NT Hand Guides', ''],
      },
      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.7)',
      },
      backdropFilter: {
        'blur-10': 'blur(10px)',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
