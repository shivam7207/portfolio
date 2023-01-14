/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    /* components */
    "./src/components/cards/ArticleCard.jsx",
    "./src/components/carousel/Slides.jsx",
    "./src/components/Footer/Footer.jsx",
    "./src/components/Header/Header.jsx",
    /* pages */
    "./src/pages/Blogs/Blogs.jsx",
    "./src/pages/Home/Home.jsx",
    "./src/pages/Store/Store.jsx",
    "./src/pages/Tools/Tools.jsx",
    /* src */
    "./src/App.jsx",
    "./src/main.jsx",
  ],
  theme: {
    extend: {
      maxHeight:{
        'carousel-fit': "calc(100vh - var(--header-height))"
      },
      paddingTop: {
        'custom-top-p': "var(--header-height)"
      }
    },
  },
  plugins: [],
}
