/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        carlson: ['"Carlson Script"', "cursive"],
        spartan: ["Spartan", "sans-serif"],
      },
      fontWeight: {
        spartan: {
          regular: "400",
          medium: "500",
          semibold: "600",
          bold: "700",
          black: "900",
        },
      },
      colors: {
        primary: {
          DEFAULT: "#8cc6e9",
          light: "#67b8d8",
          dark: "#8ACDEA",
        },
        secondary: {
          DEFAULT: "#FF1C66",
          light: "#e91a5d",
          dark: "#d91854",
        },
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "p, a": {
          fontFamily: "Spartan, sans-serif",
          fontWeight: "400",
        },
      });
    },
  ],
};
