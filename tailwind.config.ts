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
        '01': '#181818',
        '02': '#1B1B1B',
        '03': '#282828',
        '04': '#303030',
        '05': '#373737',
        '06': '#3F3F3F',
        '07': '#4A4A4A',
        '08': '#606060',
        '09': '#6E6E6E',
        '10': '#818181',
        '11': '#B1B1B1',
        '12': '#EEEEEE',
        '01-light': '#FCFCFC',
        '02-light': '#F9F9F9',
        '03-light': '#F1F1F1',
        '04-light': '#EBEBEB',
        '05-light': '#E4E4E4',
        '06-light': '#DDDDDD',
        '07-light': '#D4D4D4',
        '08-light': '#BBBBBB',
        '09-light': '#8D8D8D',
        '10-light': '#808080',
        '11-light': '#646464',
        '12-light': '#202020'
      }
    },
  },
  plugins: [],
}
export default config
