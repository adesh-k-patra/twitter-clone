/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "slate-50": "#181818",
        "slate-100": "#212327",
        "slate-200": "#757575",
        "slate-300": "#16181c",
        "slate-400": "#1d1f23",
        "slate-500": "#1f2c38",
        "slate-600": "#061019",
        "slate-700": "#0d1720",
        "slate-800": "#0c1a14",
        "slate-900": "#210c14",
        "blue-50": "#1d9bf0",
        "blue-100": "#198cd8",
      },
      textColor: {
        "slate-50": "#1d96e8",
        "slate-100": "#71767a",
        "slate-200": "#757575",
        "red-50": "#f91980",
      },
      textDecorationColor: {
        "slate-200": "#757575",
      },
      borderColor: {
        "slate-50": "#2f3336",
        "slate-100": "#1d9bf0",
      },
      thumbColor: {
        "slate-100": "#71767a",
      },
      fill: {
        "red-50": "#f91980",
      },
      stroke: {
        "slate-100": "#71767a",
      },
      strokeWidth: {
        1: "45",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
