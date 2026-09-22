/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        harvest: {
          50: "#F7F4EC",
          100: "#EFE9D8",
          200: "#E3DAC0",
        },
        forest: {
          DEFAULT: "#1C4A32",
          50: "#EAF1EC",
          100: "#CFE0D6",
          400: "#2F6B49",
          600: "#1C4A32",
          700: "#153824",
          900: "#0D2417",
        },
        maize: {
          DEFAULT: "#F2A900",
          400: "#F5BE33",
          500: "#F2A900",
          600: "#D69200",
        },
        mavred: {
          DEFAULT: "#C41E2D",
          600: "#A5121F",
          700: "#821018",
        },
        ink: {
          DEFAULT: "#231F16",
          600: "#413B2C",
          400: "#6B6250",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Work Sans'", "sans-serif"],
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};
