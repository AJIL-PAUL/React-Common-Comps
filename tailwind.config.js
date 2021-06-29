// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  corePlugins: {
    preflight: true,
  },
  purge: {
    content: ["./src/**/*.jsx", "./src/**/*.js"],
  },
  theme: {
    aspectRatio: {
      // defaults to {}
      none: 0,
      square: [1, 1], // or 1 / 1, or simply 1
      "16/9": [16, 9], // or 16 / 9
      "4/3": [4, 3], // or 4 / 3
      "21/9": [21, 9], // or 21 / 9
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
      spacing: {
        "1/2": "50%",
        "9/16": "56.25%",
        "3/4": "75%",
        full: "100%",
        "11/10": "110%",
        "6/5": "120%",
        "7/5": "140%",
      },
      fontSize: {
        xs: ".8rem",
        xxs: ".75rem",
        xxxs: ".65rem",
      },
      transitionProperty: {
        "max-height": "max-height",
      },
      width: {
        18: "4.5rem",
      },
      height: {
        98: "28rem",
      },
      maxHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      maxWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        "7xl": "80rem",
        "8xl": "88rem",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
        "-30": "-30",
        "-40": "-40",
        "-50": "-50",
      },
      colors: {
        "light-blue": colors.lightBlue,
        "sky-100": "#E0F2FE",
        "true-gray": colors.trueGray,
        "warm-gray": colors.warmGray,
        "primary-blue": "#0b6aaa",
        "primary-light": "#9ac6d3",
        "line-blue": "#DAE8E6",
        "landing-page1": "#4695be",
        "landing-page2": "#126991",
        "secondary-blue": "#a7ccd8",
      },
      screens: {
        "md-lg": "992px",
        // => @media (min-width: 992px) { for header collapse }
        xs: "410px",
        // => @media (min-width: 500px) { upto xs for mobiles }
      },
      borderRadius: {
        "6xl": "3rem",
      },
      boxShadow: {
        top: "4px 4px 0 -1px rgba(0, 0, 0, 0.1), 3px 2px 0 -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  variants: {
    aspectRatio: ["responsive"], // defaults to ['responsive']
  },
};
