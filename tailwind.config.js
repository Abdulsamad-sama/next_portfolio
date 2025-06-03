/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "rgb(14 165 233)",
        textColor: "#bbb",
      },
      animation: {
        "bounce-slow": "bounce 3s infinite linear",
        "gradient-move": "textGradient 3s ease infinite",
      },
      keyframes: {
        "gradient-move": {
          "0%": {
            "background-position": "200% 0",
          },
          "100%": {
            "background-position": "0 0",
          },
        },
      },
    },
  },
  plugins: [],
};
