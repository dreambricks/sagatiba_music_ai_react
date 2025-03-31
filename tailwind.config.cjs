/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx}",  // Inclui todos os arquivos HTML, JS, TS, e TSX dentro do diretório src
  ],
  theme: {

      extend: {
        fontFamily: {
          'gopher': ['Gopher-Bold', 'sans-serif'], // Adicionando a fonte personalizada
        },
        colors: {
          orangeCustom: '#EF5B30', // Adicionando a cor customizada
          begeCustom: '#F9F5ED',
        },
    },
  },
  plugins: [],
}