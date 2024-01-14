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
      },
      colors: {
        primary: {
          100: '#2752E7',
          80: '#5275EC',
          60: '#7D97F1',
          40: '#D0DBFF',
          20: '#F5F8FE',
        },
        base: {
          100: '#2C3131',
          80: '#626262',
          60: '#A9A9A9',
          40: '#CACACA',
          20: '#E3E3E3',
          0: '#FFFFFF',
        },
        success: {
          100: '#53D258',
          80: '#75DB79',
          60: '#98E49B',
          40: '#BAEDBC',
          20: '#DDF6DE',
        },
        error: {
          100: '#E25C5C',
          80: '#E87D7D',
          60: '#EE9D9D',
          40: '#F3BEBE',
          20: '#F9DEDE',
        },
      }
    },
  },
  plugins: [],
}

