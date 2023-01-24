/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-normal": "#452A5A",
        "primary-dark": "#111827",
        "secondary-yellow": "#ff8a00",
        "secondary-green": "#2dd841",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(90.12deg, #111827 -9.01%, #452A5A 92.09%);",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
