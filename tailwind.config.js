/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Advercase"', 'Georgia', 'serif'],
        body: ['"Advercase"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cream: {
          50:  '#fdf8f2',
          100: '#f9f0e3',
          200: '#f2e0c8',
          300: '#e8cba8',
        },
        coffee: {
          100: '#d4a96a',
          200: '#b8864a',
          300: '#8b5e2e',
          400: '#6b3f1a',
          500: '#4a2810',
          600: '#2e1a0a',
        },
        espresso: '#1e0f05',
      },
      animation: {
        'fade-up':     'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in':     'fadeIn 0.5s ease forwards',
        'glow-pulse':  'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%':      { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}