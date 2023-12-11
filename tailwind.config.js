/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "550px",
    },
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(240px, 1fr))",
      },
      boxShadow: {
        cards: "0 0 1rem 0 #000",
        buttons: "-0.1rem 0.1rem 0.3rem #3e3e3e",
      },
    },
  },
  plugins: [],
};
