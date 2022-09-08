/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "992px",
      xl: "1440px",
      xxl: "2048px",
    },
    fontFamily: {
      Questrial: ["Questrial", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "0.5rem",
        "2xl": "1rem",
        "4xl": "2rem",
      },
      fontFamily: {
        Questrial: ["Questrial", "sans-serif"],
      },
    },
  },
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themes: [
      "night",
      "business",
      "luxury",
      "retro",
      "cyberpunk",
      "coffee",
      "halloween",
      "valentine",
      "lofi",
      "synthwave",
      "garden",
      {
        mytheme: {
          primary: "#2a466c",
          secondary: "#F000B8",
          accent: "#E8E6E6",
          neutral: "#303030",
          "base-100": "#FFFFFF",
          info: "#36D399",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
