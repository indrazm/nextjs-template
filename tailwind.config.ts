import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
        1.5: '1.5px',
      },
    },
  },
  plugins: [],
};
export default config;
