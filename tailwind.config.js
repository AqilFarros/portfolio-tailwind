/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        lineHome: {
          '0%, 100%': { left: "0%" },
          '50%': { left: "84%" }
        },
      }
    },
    fontFamily: {
      "name": ["Bebas Neue"]
    }
  },
  plugins: [],
}