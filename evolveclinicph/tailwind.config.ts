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
          DEFAULT: '#31a99e',
          lightlyshaded: '#229191',
          shaded: '#1c7878',
          light: '#67f2e3',
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
} satisfies Config;
