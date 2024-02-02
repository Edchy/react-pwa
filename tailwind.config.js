/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],

  theme: {
    extend: {
      gridTemplateColumns: {
        "autofit-250": "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
