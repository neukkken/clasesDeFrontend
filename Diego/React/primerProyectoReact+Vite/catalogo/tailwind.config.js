/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azulpa': '#1B91F2',
        'fondoCoso': '#0A2A94'
      }
    },
  },
  plugins: [],
}
