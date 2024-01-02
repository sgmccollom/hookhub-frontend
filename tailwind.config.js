/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova"],
        mono: ["Input Mono Narrow"],
      },
      colors: {
        gray: {
          200: "#EDF0F5",
          300: "#E6E9F0",
          400: "#D7DCE9",
          500: "#818287",
          900: "#0D0629",
        },
        primary: {
          100: "#F8F5FF",
          400: "#A565F5",
          500: "#5839E5",
        },
        blue: {
          500: "#1170C7",
        },
        cyan: {
          400: "#25B0D0",
          500: "#339AD3",
        },
      },
      borderRadius: {
        md: "5px",
      },
    },
  },
  plugins: [],
};