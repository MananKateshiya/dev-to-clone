import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color_light: "#505050",
        color_dark: "#404040",
        focusblue: "#3B49DE",
        buttonHover: "#3A48DF",
        btnFontColor: "#3B49DF",
        hoverAccent: "#E6E7F6",
      },
      fontWeight: {
        thin2: "400",
        medium2: "600",
      },
    },
    fontFamily: {
      logo: ["Unispace"],
      btnFont: ["Segoe UI"],
      basefont: ["Segoe UI"],
    },
  },
  plugins: [],
};
export default config;
