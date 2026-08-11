/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom wedding invitation colors
        primary: {
          DEFAULT: '#183B63', // Navy Blue from desain.md
          light: '#435f78',
          dark: '#0f2540',
        },
        surface: '#faf9fb',
        'surface-container': '#eeedf0',
        'on-surface': '#1a1c1d',
        'on-surface-variant': '#43474d',
        outline: '#73777d',
        'outline-variant': '#c3c7cd',
        tertiary: {
          DEFAULT: '#536229',
          light: '#8c9a5c',
        },
        secondary: '#5f5e5b',
      },
      fontFamily: {
        'label-caps': ['Montserrat', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
        'body': ['Montserrat', 'sans-serif'],
        'script': ['Great Vibes', 'cursive'],
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg-mobile': ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        'headline-md': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'headline-sm': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', letterSpacing: '0.01em', fontWeight: '300' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-caps': ['12px', { lineHeight: '1.0', letterSpacing: '0.15em', fontWeight: '600' }],
      },
      spacing: {
        'stack-sm': '16px',
        'stack-md': '32px',
        'stack-lg': '64px',
        'margin-mobile': '20px',
        'gutter': '24px',
        'container-max': '1200px',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      animation: {
        'fade-up': 'fadeUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}