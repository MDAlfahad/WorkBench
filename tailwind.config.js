/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#9C0B00",
        "secondary":"#8C9C8D"

      }
    },
  },
  plugins: [],
}

