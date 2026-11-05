import type { Config } from 'tailwindcss';
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { forest: '#16382e', cream: '#f6f1e7', ink: '#203e33', olive: '#a0a98a' },
    },
  },
  plugins: [],
} satisfies Config;
