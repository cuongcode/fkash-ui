/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter']
      },
      fontSize: {
        h1: '58px',
        h2: '48px',
        h3: '40px',
        h4: '32px',
        h5: '24px',
        p1: '20px',
        p2: '18px',
        p3: '16px',
        p4: '14px',
        p5: '12px',
        p6: '10px',
      }
    },
  },
  plugins: [],
}

