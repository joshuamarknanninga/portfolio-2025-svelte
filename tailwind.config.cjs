module.exports = {
    content: ["./src/**/*.{svelte,js,ts}", "./index.html"],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  
  // postcss.config.cjs
  module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  };
  