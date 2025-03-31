module.exports = {
    theme: {
      extend: {
        keyframes: {
          "fade-down": {
            "0%": { opacity: 0, transform: "translateY(-20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        },
        animation: {
          "fade-down": "fade-down 0.5s ease-out",
        },
      },
    },
    plugins: [],
  };
  