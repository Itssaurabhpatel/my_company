/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'slide-left': 'slide left 25s linear infinite',
      },
         fontFamily: {
        tt: ['"Poppins"'],
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-30px)' },
          '50%': { transform: 'translateX(30px)' },
          '100%': { transform: 'translateX(-30px)' },
        },
      },
    },
  },
  plugins: [],
};
