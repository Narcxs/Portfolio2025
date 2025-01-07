/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Garde les chemins comme ils sont
  theme: {
    extend: {
      fontFamily: {
        sans: ["GeneralSans-Regular", "ui-sans-serif", "system-ui"], // Police principale
        extralight: ["GeneralSans-Extralight", "ui-sans-serif"], // Variante extralight
        light: ["GeneralSans-Light", "ui-sans-serif"], // Variante light
        medium: ["GeneralSans-Medium", "ui-sans-serif"], // Variante medium
        semibold: ["GeneralSans-Semibold", "ui-sans-serif"], // Variante semibold
        bold: ["GeneralSans-Bold", "ui-sans-serif"], // Variante bold
      },
      colors: {
        black950: "#121212",
        black900: "#1A1A1A",
        black850: "#242424",
        black800: "#3D3D3D",
        gray600: "#5D5D5D",
        gray400: " #888888",
        white50: "#F6F6F6",
        graysidebar: "#000000",
        active: "#00e362",
      },
    },
  },
  plugins: [],
};
