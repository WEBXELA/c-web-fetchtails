/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF6ED',
          100: '#FFE8CC',
          200: '#FFD199',
          300: '#FFB966',
          400: '#FFA233',
          500: '#FF7A00',
          600: '#E66D00',
          700: '#CC6000',
          800: '#B35300',
          900: '#994600',
        },
        secondary: {
          50: '#F8F6F3',
          100: '#EFE9E0',
          200: '#DFD3C1',
          300: '#CFBDA2',
          400: '#BFA783',
          500: '#785A42',
          600: '#6B4F3A',
          700: '#5E4432',
          800: '#51392A',
          900: '#442E22',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 