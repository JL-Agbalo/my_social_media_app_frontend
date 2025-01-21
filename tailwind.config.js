module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        socialBg: "#F5F7Fb",
        socialBlue: "#218DFA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
