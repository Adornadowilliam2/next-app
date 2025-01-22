/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        animate: "animate 10s ease-in-out",
      },
      keyframes: {
        animate: {
          "0%": {
            transform: "rotateX(-30deg) rotateY(-30deg)",
          },
          50: {
            transform: "rotateX(-210deg) rotateY(-210deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
