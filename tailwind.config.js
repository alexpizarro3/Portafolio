/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ← asegúrate de incluir todos tus componentes
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // importante para modo oscuro manual
  plugins: [],
}
