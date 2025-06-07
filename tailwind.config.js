// export default {
//   content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       animation: {
//         'spin-slow': 'spin 20s linear infinite',
//       }      
//     },
//   },
//   // tailwind.config.js
// theme: {
//   extend: {
//     fontFamily: {
//       sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
//     },
//   },
// },

//   // plugins: [],
//   plugins: [
//     require("tailwindcss-animate"),
//     require("@tailwindcss/forms"),
//     require("@tailwindcss/typography"),
//     require('@tailwindcss/aspect-ratio'),
//   ]
  
// };

export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
