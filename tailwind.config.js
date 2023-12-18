/** @type {import('tailwindcss').Config} */
module.exports = {
  // Paths to all of components so Tailwind can tree-shake unused styles in production builds
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    backgroundImage: {
      close: "url('./images/close.svg')",
    },
    extend: {},
  },
  plugins: [],
}

