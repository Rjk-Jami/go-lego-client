/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#D1C1D7",
        
"secondary": "#F6CBD1",
        
"accent": "#B4E9D6",
        
"neutral": "#70ACC7",
        
"base-100": "#FFFFFF",
        
"info": "#fde047",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
  
  plugins: [require("daisyui")],
}

