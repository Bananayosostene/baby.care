import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
<<<<<<< Updated upstream
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
=======
      screens: {
        sm: "3px",
        md: "6px",
        lg: "8px",
        xl: "16px",
        "2xl": "24px",
      },
      colors: {
        bg: {
          primary: "#F9F9FB",
          secondary: "#1A1A1A",
          third: "#000000",
          fourth: "#1E1E1E",
          fifth: "#2D2D2D",
        },
        tx: {
          primary: "#FFFFFF",
          secondary: "#808080",
          third: "#000000",
          success: "#00BA7C",
          success2: "#FF9B4B",
        },
        bo: {
          default: "#383838",
          active: "#454545",
        },
        bt: {
          primary: "#2962FF",
          primary2: "#4B9CFF",
          secondary: "#383838",
          btnHover: "#293547",
          btnHoverBlue: "#3B82F6",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Monaco", "Consolas", "monospace"],
>>>>>>> Stashed changes
      },
    },
  },
  plugins: [],
} satisfies Config;
