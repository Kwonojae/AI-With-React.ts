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
      }
    },
  },
  plugins: [],
}

