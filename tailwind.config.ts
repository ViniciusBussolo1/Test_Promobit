import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          700: '#5C16C5',
          800: '#2D0C5E',
        },
        gray: {
          0: '#FFFF',
          600: '#646464',
          700: '#323232',
        },
      },
    },
  },
  plugins: [],
}
export default config
