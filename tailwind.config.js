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
        dark: '#0f0f0f',
        'dark-secondary': '#1a1a1a',
        'dark-tertiary': '#2a2a2a',
        accent: '#00d4ff',
        'accent-dark': '#00a8cc',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(0, 212, 255, 0.5)' },
          '50%': { textShadow: '0 0 40px rgba(0, 212, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
