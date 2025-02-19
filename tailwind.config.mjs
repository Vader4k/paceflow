/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shade: '#334155'
      },
      backgroundImage: {
        "grid-bg": "url('/grid.svg')",
        'colors': "url('/colorsbg.svg')",
        'steps': "url('/steps.png')"
      },
      fontFamily: {
        roboto: 'var(--font-roboto-sans)',
        jarkata: 'var(--font-plus-Jarkata)'
      }
    },
  },
  plugins: [],
};

export default config;
