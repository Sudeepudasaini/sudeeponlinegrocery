// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//       "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/JSX files
//       "./public/index.html"
//     ],
//     theme: {
//       extend: {
//         colors: {
//           brand: {
//             500: "#6366f1", // Custom color example
//           }
//         }
//     },
//   },
//     plugins: [],
//   }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/JSX files
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#6366f1", // Custom color example
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
