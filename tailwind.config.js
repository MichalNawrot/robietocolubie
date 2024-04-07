const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        'sticky-nav': {
          '100%': {
            top: '0.5rem',
            right: '0.5rem',
            'backdrop-filter': 'blur(0.35rem)',
            color: 'var(--_textColorEnd)',
            backgroundColor: 'var(--_surfaceColorEnd)',
            boxShadow: 'inset 0 0 0.5rem hsla(0, 0%, 100%, 0.1), 0 0 0.75rem hsla(0, 0%, 0%, 0.3)',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'sticky-nav': 'sticky-nav 3s ease-in-out forwards',
      }
    },
  },
  plugins: [require('tailwind-hamburgers')],
}

