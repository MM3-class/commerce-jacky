/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      disabled: {
        cursor: 'not-allowed',
        opacity: '50',
      },
      colors: {
        "primary": "#363738",
        "secondary": "#DB4444",
        "text1": "#7D8184",
        "text2": "#000000",
        "button1": "#00FF66",
        "button2": "#DB4444",
        "hover-button": "#E07575",
        "dots": "#A5A6F6",
        "bg-btn": "#f5f5f5"
      },
    },
  },
  plugins: [],
}

