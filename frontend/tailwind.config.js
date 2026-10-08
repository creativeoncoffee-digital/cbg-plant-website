/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // TO USE RUBIK: Keep this line active
        sans: ['Rubik', 'sans-serif'], 
        
        // TO USE YOUR OLD FONT: Comment out the line above (//), and uncomment the line below
        // sans: ['Inter', 'system-ui', 'sans-serif'], 
      },
      // ... your other colors and settings
    },
  },
  plugins: [],
}