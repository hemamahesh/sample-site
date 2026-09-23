import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          50: '#f0f3f9',
          100: '#dde5ef',
          200: '#c0cce1',
          300: '#95abcd',
          400: '#6483b3',
          500: '#42649b',
          600: '#324e81',
          700: '#283f6a',
          800: '#233658',
          900: '#0F172A',
          950: '#141e33',
        },
        steel: {
          50: '#f6f7f9',
          100: '#eceff2',
          200: '#d5dce2',
          300: '#b1bec9',
          400: '#879eab',
          500: '#688293',
          600: '#52687a',
          700: '#475569',
          800: '#3c4755',
          900: '#343b46',
        },
        industrial: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdbaa',
          300: '#ffc175',
          400: '#ff9d3d',
          500: '#F97316',
          600: '#eb5907',
          700: '#c34108',
          800: '#9b330e',
          900: '#7c2c0f',
        }
      },
    },
  },
  plugins: [],
};
export default config;
