/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F15A24',
          'orange-hover': '#D94917',
          'orange-light': '#FFF1EC',
          teal: {
            900: '#061C20',
            800: '#0A252B',
            700: '#0E3139',
            600: '#14414B',
          },
          cream: '#FAF7F0',
          'cream-card': '#F5EFE6',
          dark: '#111827',
          muted: '#6B7280',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
        script: ['"Caveat"', 'cursive'],
        title: ['"Syne"', '"Playfair Display"', 'sans-serif'],
        condensed: ['"Oswald"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0,0,0,0.08)',
        'card': '0 14px 34px -10px rgba(0,0,0,0.12)',
        'glow': '0 8px 25px -4px rgba(241, 90, 36, 0.45)',
      }
    },
  },
  plugins: [],
}
