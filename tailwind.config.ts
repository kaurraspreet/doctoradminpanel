import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xxs: "0.688rem /*11px*/",
        xs: "0.813rem /*13px*/",
        sm: "1rem /*16px*/",
        base: "1.188rem /*19px*/",
        md: "1.438rem /*23px*/",
        lg: "1.75rem /*28px*/",
        xl: "2.063rem /*33px*/",
        xxl: "2.5rem /*40px*/",
        "2xl": "2.375rem /*48px*/",
      },
      colors: {
        brown: {
          "50": "#fffefa",
          "100": "#fffbef",
          "200": "#fff9e8",
          "500":"#FFF2CC"
        },
      },
    },
  },
  plugins: [],
};
export default config;
