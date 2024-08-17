/** @type {import('tailwindcss').Config} */
export default {
      content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
            extend: {
                  fontFamily: {
                        'poppins': ['Poppins', 'sans-serif'],
                        'satisfy': ['Satisfy', 'cursive'],
                        'roboto': ['Roboto', 'sans-serif'],
                        'roboto-slab': ['Roboto Slab', 'serif'],
                        'eb-garamond': ['EB Garamond', 'serif'],
                  },
                  colors: {
                        'primary': '#0f172a',
                        'secondary': '#94a3b8',
                        'accent': '#FFCC00',
                        'bg': '#030b1bed',
                        'bg2': '#ac5d05',
                  },
                  boxShadow: {
                        '3xl': '0 0 3px 3px #94a3b8',
                        '5xl': '0 0 6px 5px #030b1bed',
                        'xl': '0 0 6px 5px #030b1bed inset',
                  },
            },
      },
      plugins: [],
}