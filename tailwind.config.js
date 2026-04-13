/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cores extraídas diretamente da logo oficial Alfa Care
        primary: {
          50:  '#f0fafc',
          100: '#d0eff5',
          200: '#a0deed',
          300: '#6dcae0',
          400: '#50B4C8',
          500: '#3da0b5',
          600: '#2d8a9e',
          700: '#1e6e80',
          800: '#145461',
          900: '#0a3840',
        },
        cream: '#F5F5F5',
        dark:  '#2a2a2a',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['DM Mono', 'monospace'],
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
