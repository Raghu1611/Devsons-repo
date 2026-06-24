/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        accent: "#FF0000",
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'ticker': 'ticker 20s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
