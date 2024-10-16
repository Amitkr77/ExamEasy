/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        ripple: "ripple 3400ms ease infinite",
      },
      keyframes: {
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
      },

      colors: {
        'dark-blue': '#1c3d5a',
        'light-blue': '#d1e7f8',
        'yellow': '#f0c041',
        'white': '#ffffff',
      },

    },
  },
  plugins: [],
}

