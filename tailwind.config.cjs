/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      colors: {
        site: {
          1: "#58a2da", //blue
          2: "green", // green
          3: "#212121", // black
          4: "#ffd839", // yellow
          5: "#f5f5f5", // gray
        },
      },
    },
  },
  plugins: [],
};
