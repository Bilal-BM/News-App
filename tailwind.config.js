/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      // '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      // 'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      // 'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      md: {max: '767xpx'},
      // => @media (max-width: 767px) { ... }

      sm: {max: '435px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
