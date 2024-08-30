/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Arial', 'sans-serif'],
      },
      colors: {
        'github-dark': '#24292e',
        'github-light': '#f6f8fa',
      },
    },
  },
  plugins: [],
}