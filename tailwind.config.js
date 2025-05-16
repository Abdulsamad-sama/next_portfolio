/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      bounceSlow: "bounce 3s infinte linear ease-in",
      color: {
        mainColor: "rgb(14 165 233)",
        textColor: "#bbb",
      },
    },
  },
  plugins: [],
};
