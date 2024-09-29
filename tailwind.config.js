/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      red:"#e30613",
      black:"#4f5665",
      yellow:"#f9bd0e",
      green:"#36b600",
      grey:'#b7b7b7',
      lightgrey:'#f2f2f2',
      idle:'#eeeeee',
      header:"#fafafa"
    }
  },
  plugins: [],
}

