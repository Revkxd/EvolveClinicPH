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
          lighterdefault: '#799f9f',
          lightlyshaded: '#229191',
          shaded: '#1c7878',
          light: '#67f2e3',
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
