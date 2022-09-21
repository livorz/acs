/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", 
            "./src/**/*.{js,jsx,ts,tsx}",
            "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        SBlue: "#0091cf",
        SCBlue: "#67c1e0" 
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
                  "primary": "#eeeeee",
                  "secondary": "#661228",
                  "accent": "#a8764a",
                  "neutral": "#983433",
                  "base-100": "#ffffff",
                  "info": "#3ABFF8",
                  "success": "#36D399",
                  "warning": "#FBBD23",
                  "error": "#F87272",
                  },
                },
              ],
            },
  plugins: [
            require("daisyui"),
            require('flowbite/plugin') 
          ],
}