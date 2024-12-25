import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-rubik)', ...fontFamily.sans],
      },
      boxShadow: {
        froasted: `5px 5px rgba(59, 130, 246, 0.4), 
          10px 10px rgba(99, 102, 241, 0.3), 
          15px 15px rgba(139, 92, 246, 0.2), 
          20px 20px rgba(168, 85, 247, 0.1), 
          25px 25px rgba(192, 38, 211, 0.05)`,
        masere: `0 8px 32px rgba(0, 0, 0, 0.1), 
  inset 0 -2px 6px rgba(255, 255, 255, 0.6);`,
      },
    },
  },
  plugins: [],
} satisfies Config;
