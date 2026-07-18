/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Anton', 'sans-serif']
      },
      colors: {
        ink: '#0d1220',
        navy: '#243b6b',
        navyHover: '#3557a6',
        ice: '#89a8ff',
        paper: '#f5f6fa'
      }
    }
  },
  plugins: []
};
