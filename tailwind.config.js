// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class", // This is required for class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
  
  extend: {
  animation: {
    'spin-slow': 'spin 8s linear infinite',
  },
}

 

};
