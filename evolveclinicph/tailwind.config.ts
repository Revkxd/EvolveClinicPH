import type { Config } from "tailwindcss";

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
        turq: {
          DEFAULT: '#588289',
          text: '#31a99e',
          light: '#739ea5',
          lighterdefault: '#92b4b9',
          lightlyshaded: '#5a858c',
          shaded: '#46676d',
          shaded2: '#324a4e',
        },
      },
      fontFamily: {
        sans: ['var(--font-lexend-deca)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
} satisfies Config;
