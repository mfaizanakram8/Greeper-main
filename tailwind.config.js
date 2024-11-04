/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#01190F',
        lightGreen: '#B4FB85',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(178.32deg, #B4FB85 -139.34%, #01190F 108.13%)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [],
}
