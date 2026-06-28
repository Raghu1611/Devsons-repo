/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D0D0D", // Deep black background
        secondary: "#1A1A1A", // Dark Grey for cards/boxes
        accent: "#D4AF37", // Devson's Gold
        'accent-dark': "#8B6F3D", // Bronze
        offwhite: "#F5F5F5",
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Montserrat', 'sans-serif'],
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
