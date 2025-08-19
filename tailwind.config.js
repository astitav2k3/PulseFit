/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2fbff",
          100: "#e6f7ff",
          200: "#bfeeff",
          300: "#99e5ff",
          400: "#33d2ff",
          500: "#00b7f0",
          600: "#0090c2",
          700: "#006a8f",
          800: "#00465f",
          900: "#022c3a",
          950: "#051821",
        }
      },
      boxShadow: {
        glow: "0 0 0 3px rgba(0,183,240,0.25)",
      }
    },
  },
  plugins: [],
}
