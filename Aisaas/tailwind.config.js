/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(172deg, rgba(78, 3, 174, 1) 0%, rgba(48, 4, 112, 1) 50%, rgba(15, 6, 44, 1) 100%)',
        'custom-btn': 'linear-gradient(22deg, rgba(88, 89, 218, 1) 25%, rgba(238, 130, 238, 1) 64%, rgba(255, 255, 0, 1) 100%)', // moved 'custom-btn' here
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
