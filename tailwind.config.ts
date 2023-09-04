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
        focusblue: '#3B49DE',
        buttonHover: '#3A48DF',
        btnFontColor:'#3B49DF',
        hoverAccent:'#2f3ab2',
      },
      fontFamily:{
        'logo': ['Unispace'],
        'btnFont': ['Segoe UI'],
      }
    },

  },
  plugins: [],
};
export default config;
