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
        dark: '#000000',
        'dark-secondary': '#111111',
        'dark-tertiary': '#1a1a1a',
        accent: '#ffffff',
        'accent-dark': '#e5e5e5',
        'accent-light': '#f5f5f5',
        gold: '#cccccc',
        'success': '#4ade80',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-down': 'slideDown 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' },
          '50%': { textShadow: '0 0 40px rgba(255, 255, 255, 0.5)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 255, 255, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}
