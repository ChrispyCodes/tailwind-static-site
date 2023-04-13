/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
export default {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        indigo: colors.indigo,
        sky: colors.sky,
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
