/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    boxShadow:{
      'custom-light':' 0px 0px 3px 0 white',
      'custom-dark':'5px 5px 10px #0a0c0e, -5px -5px -10px #14161c'
    },
    extend: {
      colors: {
        dark:{
          DEFAILT:'#00f260',
          100:'#0a0b1e',
          200:'#16181d',
          500:'#0f1115',
          700:'rgba(254, 254, 254, 0.096)'
        }
      }
    },
  },
  variants:{
    extend:{
      boxShadow:['dark']
    }

  },
  plugins: [],
  darkMode: 'class',


}

