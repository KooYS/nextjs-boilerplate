// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

const pxToRem = (px, base = 16) => `${px / base}rem`;

const range = (m, n) => {
  return Array.from(Array(n + 1 - m).keys())
    .map((v) => v + m)
    .map((v) => v);
};

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors,
    screens: {
      mobile: '360px', // @media (min-width: 360px)
      foldable: '523px', // @media (min-width: 523px)
      tablet: '768px', // @media (min-width: 768px)
    },
    spacing: {
      ...range(1, 100).reduce((acc, px) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {}),
    },
    extend: {},
  },
  plugins: [],
};
