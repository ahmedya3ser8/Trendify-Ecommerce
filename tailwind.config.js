/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        "primary": "#8B5E35",
        "secondary": "#9B7E5C",
        "text": "#090F41",
        "muted": "#9D9DAA",
        "card": "#FFFFFF",
        "highlight": "#FFC000",
        "error": "#D00439",
        "footer": "#2E2E2E",
      }
    },
  },
  plugins: [],
}
