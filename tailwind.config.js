/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    backgroundImage:{
      'banner': 'url("assets/images/banner.webp")'
    },
    backgroundColor:{
      'btn-bg': 'rgba(51,51,51,0.5)'
    }
  },
  plugins: [],
};
