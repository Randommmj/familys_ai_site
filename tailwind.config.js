/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006699',
        secondary: '#333333',
        accent: '#d5cac0',
        dark: "#222222",
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'Roboto', 'Arial', 'sans-serif'],
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      backgroundColor: {
        'light-accent': '#d5cac0',
        'dark-bg': '#222222',
      },
      textColor: {
        'light': '#ffffff',
      },
    },
  },
  plugins: [],
}
