/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d9488', // Teal 600
        secondary: '#0f766e', // Teal 700
        accent: '#14b8a6', // Teal 500
      }
    },
  },
  plugins: [],
}
