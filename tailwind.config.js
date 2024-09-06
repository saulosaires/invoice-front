/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "retro","dracula","aqua","winter"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

