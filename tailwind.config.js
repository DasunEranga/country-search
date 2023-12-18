/** @type {import('tailwindcss').Config} */
module.exports = {
  // Paths to all of components so Tailwind can tree-shake unused styles in production builds
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    backgroundImage: {
      close: "url('./images/close.svg')",
      'gradient-radial': 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,240,255,0) 100%);',
    },
    extend: {},
  },
  plugins: [],
}

