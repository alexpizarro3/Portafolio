/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",     // si usas carpeta 'app'
    "./components/**/*.{js,ts,jsx,tsx}", // si tienes componentes separados
    "./pages/**/*.{js,ts,jsx,tsx}",      // por si tienes pages
    "./src/**/*.{js,ts,jsx,tsx}",        // mantiene src por si acaso
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
}
