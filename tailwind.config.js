/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F14',
        surface: '#111826',
        surface2: '#161F2E',
        line: '#22303F',
        ink: '#E8ECF1',
        muted: '#8592A3',
        accent: '#E3B23C',
        accent2: '#4FD1C5',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(11,15,20,0) 0%, #0B0F14 90%)',
      },
      keyframes: {
        trace: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        trace: 'trace 2.4s ease-out infinite',
        blink: 'blink 1s steps(1) infinite',
        rise: 'rise 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
