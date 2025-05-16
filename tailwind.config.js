/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      gridTemplateColumns: {
        "07": "repeat(7, 1fr)",
        "08": "repeat(8, 1fr)",
        "09": "repeat(9, 1fr)",
        "010": "repeat(10, 1fr)",
        bannerGrid_2Col: "auto 1fr",
      },
      gridTemplateRows: {
        customRow1: "auto 1fr auto",
        customRow3a: "repeat(3, 117px);",
        customRow3b: "repeat(3, 1fr);",
        customRow4a: "repeat(4, 117px);",
        customRow5a: "repeat(5, 117px);",
      },
      zIndex: {
        999: "999",
      },
      boxShadow: {
        customBoxShadow1: "#111 0px 0px 5px 0px",
      },
      animation: {
        animationLoader1: "pathRect 2s linear infinite;",
        "animate-spin": "animation: spin 1s linear infinite",
      },
      stroke: {
        strokeDasharrayLoader1: "360 160",
      },
      keyframes: {
        pathRect: {
          "25%": {
            strokeDashoffset: "130",
          },

          "50%": {
            strokeDashoffset: "260",
          },

          "75%": {
            strokeDashoffset: "390",
          },

          "100%": {
            strokeDashoffset: "520",
          },
        },
        spin: {
          "0%, 100%": {
            from: {
              transform: "rotate(0deg)",
            },
            to: {
              transform: "rotate(360deg)",
            },
          },
        },
      },
      colors: {
        flamingo: {
          DEFAULT: "#F03D3E",
          50: "#FDE7E8",
          100: "#FCD4D5",
          200: "#F9AFAF",
          300: "#F68989",
          400: "#F36364",
          500: "#F03D3E",
          600: "#E31213",
          700: "#AF0E0E",
          800: "#7B0A0A",
          900: "#470506",
          950: "#2D0304",
        },
        "french-rose": {
          DEFAULT: "#EC4899",
          50: "#FDEEF6",
          100: "#FBDCEB",
          200: "#F8B7D7",
          300: "#F492C2",
          400: "#F06DAE",
          500: "#EC4899",
          600: "#E4187D",
          700: "#B11261",
          800: "#7F0D45",
          900: "#4C0829",
          950: "#32051B",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
