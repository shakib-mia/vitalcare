/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "768px",
        lg: "992px",
        xl: "1140px",
      },
    },
    colors: {
      primary: "#0067FF",
      button: "#00A3FF",
      white: "#FFFFFF",
      dark: "#333333",
      gray: {
        DEFAULT: "#D9D9D9",
        dark: "#797979",
        light: "#F4F4F4",
      },

      transparent: "#00000000",
    },
    extend: {
      fontSize: {
        "4xl": "60px", // heading 1
        "3xl": "40px", // heading 2
        "2xl": "36px", // heading 3
        xl: "28px", // heading 4
        lg: "20px",
        md: "18px",
        base: "16px",
        sm: "14px",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
