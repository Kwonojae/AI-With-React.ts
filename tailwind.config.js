/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Noto" : ["Noto Sans KR", 'sans-serif'],
        "Dongle" : ["Dongle","sans-serif"],
        "Gothic" : ["Gothic A1", "sans-serif"]
      },
      backgroundImage: {
        'mainpage': "url('./public/assets/images/diane-theresa-hendrick-fTtKfpmn03c-unsplash.jpg')"
      }
    },
  },
  plugins: [],
}

