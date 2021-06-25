module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        spin1: "spin1 5s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        bounce1: "bounce1 2s ease-in infinite",
        UpD: "UpD 2s ease-in infinite",
      },
    },

    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },

      spin1: {
        from : {transform: "rotate(0deg)"},
        to: {transform: "rotate(360deg)"},
      },

      bounce1: {
        "0%, 100%": { transform: "scale(0.9)" },
        "50%": { transform: "scale(1.1)" },
      },
      UpD: {
        "0%, 100%": { transform: "translateY(-25%)" },
        "50%": {transform: "translateY(0)"},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
