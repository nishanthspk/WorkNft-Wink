/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customStart: "#06061E",
        customStart1: "#009EE5",
        customEnd: "#2070F4",
        customEnd2: "#A36EFD",
        customBorder: '#2070F4',
        customGrayFill: "#1F2138",
        customGrayStroke: "#384160",
        customFontColor: "#D8E4FD",
        customButtonStroke: "#2070F4"
      },
    },
  },
  plugins: [],
}

