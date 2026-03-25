/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#F5F0EB',
        navy: '#173448',
        rei: '#B11F24',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'qr-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(177, 31, 36, 0.3)' },
          '50%': { boxShadow: '0 0 18px 6px rgba(177, 31, 36, 0.12)' },
        },
      },
      animation: {
        'qr-pulse': 'qr-pulse 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
