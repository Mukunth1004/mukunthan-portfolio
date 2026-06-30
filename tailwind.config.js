/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark:     '#020617',
        surface:  '#070f1f',
        accent:   '#6366f1',
        'accent-light': '#818cf8',
        'accent-soft':  'rgba(99,102,241,0.12)',
        'accent-glow':  'rgba(99,102,241,0.25)',
        apurple:  '#8b5cf6',
      },
      animation: {
        'float':         'float 5s ease-in-out infinite',
        'shimmer':       'shimmer-slide 4s linear infinite',
        'spin-slow':     'spin-slow 20s linear infinite',
        'pulse-accent':  'pulse-accent 2.5s ease-in-out infinite',
      },
      keyframes: {
        'shimmer-slide': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-accent': {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(99,102,241,0.4)' },
          '50%': { boxShadow: '0 0 0 6px rgba(99,102,241,0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'accent-gradient': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      },
    },
  },
  plugins: [],
}
