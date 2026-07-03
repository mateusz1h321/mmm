import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bitcoin: '#F7931A',
        premium: {
          black: '#050505',
          gold: '#F6C453',
          dark: '#0a0a0a'
        }
      },
      animation: {
        'floating': 'floating 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'breathe': 'breathe 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite'
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(246, 196, 83, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(246, 196, 83, 0.8)' }
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow': '0 0 20px rgba(246, 196, 83, 0.3)',
        'glow-strong': '0 0 40px rgba(246, 196, 83, 0.5)'
      }
    }
  },
  plugins: []
};

export default config;
