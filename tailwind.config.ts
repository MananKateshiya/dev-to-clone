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
        blogCard: "#FFFFFE",
        blogLinkColor: "#2F3AB2",
        tagColor: "#F2F2F3",
        bookmarkHover: "#E4E5E5",
        hoverBorderAccent: "#D3D3D3",
        hoverAccent2:'#F6F6F6',
        hoverAccentText: '#EBEDFC',
        chipsAccent: '#F5F5F4'

      },
      fontWeight: {
        thin2: "400",
        medium2: "600",
      },
      fontSize:{
        postTitleM: '20px',
        postTitleTop: '30px',
        postTitleOther: '24px'

      },
      aspectRatio:{
        'blogBanner': '1000/400'
      },

      keyframes: {
        "accordion-down": {
          from: { height: `${parseInt('0')}` },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: `${parseInt('0')}` },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
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
