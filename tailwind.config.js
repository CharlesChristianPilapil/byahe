/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif',
        rubik: '"Rubik", sans-serif'
      },

      colors: {
        dark: '#323648',
        light: '#707579',
        yellow: '#da9d40'
      }
    },
  },
  plugins: [],
}

