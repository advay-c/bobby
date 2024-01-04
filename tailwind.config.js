/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brnd': {
          '50': '#e5efff',
          '100': '#d0e2ff',
          '200': '#abc7ff',
          '300': '#79a1ff',
          '400': '#4469ff',
          '500': '#1b32ff',
          '600': '#000cff',
          '700': '#000fff',
          '800': '#000dde',
          '900': '#040bba',
          '950': '#030463',
      },
      'background': '#08081a'

      
      }
      
    },
  },
  plugins: [],
}