export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        'dark-section': 'hsl(var(--dark-section))',
      },
      fontFamily: {
        'din-condensed': ['DIN Condensed', 'Arial Narrow', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      perspective: {
        '1000': '1000px',
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}