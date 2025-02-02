const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        istok: ['"Istok Web"', "sans-serif"],
        kavivanar: ['"Kavivanar"', "cursive"],
        jomhuria: ['"Jomhuria"', "cursive"],
        jejuGothic: ['"Jeju Gothic"', "sans-serif"],
        hinaMincho: ['"Hina Mincho"', "serif"],
        jetBrainsMono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
});
