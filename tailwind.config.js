/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        nexoclx061: {
          bg: '#f2f2f7',
          accent: '#a8323a',
          accentDark: '#8f2630',
          danger: '#d70015',
          success: '#168a55',
          warning: '#b7791f',
          info: '#0a84ff',
        },
      },
    },
  },
  plugins: [],
};
