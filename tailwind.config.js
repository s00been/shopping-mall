module.exports = {
    darkMode: "class",
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
    theme: {
      extend: {
        fontSize: {
          xxs: "11px",
          xs: "12px",
          sm: "14px",
          md: "16px",
          lg: "18px",
        },
        colors: {
          slate: {
            50: "#FAFAFA", // Background Color
          },
          gray: {
            100: "#ABAFBE",
            200: "#EBEBEB", // Line Color
            250: "#F5F5F8", // input active border
            300: "#D8D8D8",
            350: "#C8C9D6",
            400: "#D1D7DB", // message BG
            500: "#ABB1C0", // disable answer
            600: "#81878D", // input active border
          },
          neutral: {
            100: "#81878D", // Sub Text
            200: "#494B50", // border
            900: "#1C1C1D", // Main Text
          },
          pink: {
            // [#] Main colors
            700: "#FF6F98",
            800: "#FA547A",
            900: "#F53D62",
          },
          blue: {
            600: "#4B96F1", // Info Text
          },
        },
      },
    },
  };
  