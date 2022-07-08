module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        poorStory: ["Poor Story", "cursive"],
        DMsans: ["DM Sans", "sans-serif"],
      },
      colors: {
        solidHeading: "#42446E",
        lightContent: "#A7A7A7",
      },
    },
  },
  plugins: [],
};
