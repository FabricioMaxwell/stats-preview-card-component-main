/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'main-background': 'hsl(233, 47%, 7%)',
        'card-background': 'hsl(244, 38%, 16%)',
        'main-paragraph': 'hsla(0, 0%, 100%, 0.75)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        'stat-headings': 'hsla(0, 0%, 100%, 0.6)'
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        'Lexend-Deca': ['Lexend Deca', 'sans-serif']
      }
    },
  },
  plugins: [],
}

