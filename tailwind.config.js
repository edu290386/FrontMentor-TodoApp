/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin-sans': ['"Josefin Sans"', 'sans-serif'],
      },
      colors: {
        'bright-blue': 'hsl(220, 98%, 61%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
        'light-grayish-blue-lt': 'hsl(233, 11%, 84%)',
        'dark-grayish-blue-lt': 'hsl(236, 9%, 61%)',
        'very-dark-grayish-blue-lt': 'hsl(235, 19%, 35%)',
        'very-dark-blue': 'hsl(235, 21%, 11%)',
        'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
        'light-grayish-blue': 'hsl(234, 39%, 85%)',
        'light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
        'dark-grayish-blue': 'hsl(234, 11%, 52%)',
        'very-dark-grayish-blue': 'hsl(233, 14%, 35%)',
        'very-dark-grayish-blue-hover': 'hsl(237, 14%, 26%)',
        'grad-first': 'hsl(192, 100%, 67%)',
        'grad-second': 'hsl(280, 87%, 65%)',
      },
      backgroundImage: {
        'mountain-mobile-light': "url('./assets/bg-mobile-light.jpg')",
      }
    },
  },
  plugins: [],
}

