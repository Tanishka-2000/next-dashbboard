import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'body': '#0D0B21',
      'layer': '#15132B',
      'card': '#211A75',
      'black': '#000000',
      "transparent": "transparent",
      'white' : '#FFFFFF',
      'grey': '#C7C7C7',
      'dark-grey': '#1E1C3A',
      'disabled': '#464366',
      'active': '#7879F1',
      'purple': '#6418C3',
      'pink': '#E328AF',
      'cyan': '#5ECFFF',
      'yellow': '#FFAB2D',
      'green': '#38E25D',
      'orange': '#FF4A55',

    },
  },
  plugins: [],
}
export default config
