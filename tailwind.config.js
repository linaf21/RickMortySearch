/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        principal: {
          0: "#FBFBFB", //Fondo pantalla
          50: "#FFFFFF", //Blanco general
          100: "#000000", //Negro general
          150: "#6E6E6E", //Gris iconos
          200: "#CCD532", //Verde claro boton registrarse
          250: "#135F2C", //Verde oscuro boton iniciar sesion
          300: "#616161", //Gris texto tarjetas negocios,
          350: "#E0E0E0", //bordes tarjetas,
          400: "#C7C7C7", //Fondo proximos eventos
          450: "#8B8B8B", //Gris flechas sliders
          500: "#65b32e", //Verde footer
          550: "#e17000", //Naranja bordes e icono login
          600: "#616161", //Gris Subtitulos
          650: "#808080", //Gris items beneficiarios
        },
      },
      spacing: {
        // Fractional values
        "1/10": "10%",
        "1/6": "16.666%",
        "1/5": "20%",
        "1/4": "25%",
        "3/10": "30%",
        "9/20": "45%",
        "49/100": "49%",
        "4/5": "80%",
        "4/5": "80%",
      },
    },
  },
  plugins: [],
};
