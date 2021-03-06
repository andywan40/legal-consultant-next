const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        title: ["Rakkas", "cursive"],
        content: ["Cantarell", "sans-serif"],
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      height: {
        "5vh": "5vh",
        "8vh": "8vh",
        "10vh": "10vh",
        "20vh": "20vh",
        "25vh": "25vh",
        "30vh": "30vh",
        "35vh": "35vh",
        "40vh": "40vh",
        "70vh": "70vh",
        "75vh": "75vh",
        "80vh": "80vh",
      },
      minHeight: {
        "20vh": "20vh",
        "30vh": "30vh",
        "25vh": "25vh",
        "70vh": "70vh",
        "75vh": "75vh",
      },
      maxHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        80: "80%",
        full: "100%",
        "85vh": "85vh",
        footer: "5vh",
      },
      brightness: {
        35: ".35",
        40: ".40",
        60: ".60",
      },
      lineHeight: {
        0.5: "0.5",
        0.6: "0.6",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
        xs: { max: "490px" },
        xxs: { max: "376px" },
      },
      fontSize: {
        xxs: "0.5rem",
        "2xl": "2rem",
        "3xl": "3rem",
        "4xl": "4rem",
        "5xl": "5rem",
        "6xl": "6rem",
        "7xl": "7rem",
        "10xl": "10rem",
        "12xl": "12rem",
        "14xl": "14rem",
        "15xl": "15rem",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
    extend: {},
  },
  plugins: [],
};
