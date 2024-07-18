/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
     
      backgroundImage: {
        'featured-image': "url('/src/assets/home/featured.jpg')",
        'menu-image': "url('/menu/banner3.jpg')",
        'shop-image': "url('/shop/banner2.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

