import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '4rem'
      }
    },
    fontFamily: {
      sans: [
        'var(--font-inter)',
        'sans-serif'
      ]
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px'
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
