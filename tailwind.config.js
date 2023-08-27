/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        greycliff: ["Greycliff"],
      },
      colors: {
        primary: {
          50: "#FFFFFF",
          100: "#000000",
          150: "#EEE3FF",
          200: "#8054C7",
          250: "#5A3696",
          300: "#63D838",
          350: "#3B8520",
          400: "#9CA3AF",
          450: "#F3F4F6",
          500: "#6B7280",
          550: "#D1D5DB",
          600: "#E5E7EB",
          650: "#F9F9F9",
          700: "#111827",
          750: "#1F2937",
          800: "#2563EB",
          850: "#8054C70D",

        },
      },
      spacing: {
        '358': '22.375rem',
        // Fractional values
        "1/10": "10%",
        "1/6": "16.666%",
        "1/5": "20%",
        "1/4": "25%",
        "3/10": "30%",
        "9/20": "45%",
        "49/100": "49%",
        "13/20": "65%",
        "7/10": "70%",
        "3/4": "75%",
        "4/5": "80%",
      },
    },
  },
  plugins: [],
};
