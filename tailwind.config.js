
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Circular Std", "sans-serif"], 
      },
       fontSize: {
        '70px': '70px', 
        '24px': '24px', 

      },
      lineHeight: {
        '88px': '88.56px', // Custom line-height
        '30px': '30.36px', // Custom line-height
      },
    },
  },
  plugins: [],
};

