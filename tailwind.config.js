/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
    ],
    theme: {
      extend: {
        colors: {
          purple: {
            500: '#8B5CF6',
            600: '#7C3AED',
            700: '#6D28D9',
            800: '#5B21B6',
            900: '#4C1D95',
          },
        },
      },
    },
    plugins: [],
  }