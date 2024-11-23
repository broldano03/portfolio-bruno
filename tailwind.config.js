/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Archivos dentro de /src
    "./*.{html,js}"         // Archivos en la raíz
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
