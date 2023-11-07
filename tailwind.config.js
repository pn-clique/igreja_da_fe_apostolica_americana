/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "poppins",
        poppins_medium: "poppins_medium",
        poppins_semibold: "poppins_semibold",
        poppins_bold: "poppins_bold",
      },
      colors: {
        primaryColor: "#E5A814",
        secondaryColor: "#1e1e1e",
        primaryFont: "#404040",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
