export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.08)',
      },
      colors: {
        surface: '#f7fafc',
        accent: '#2563eb',
        accentSoft: '#e0f2fe',
        slateSoft: '#0f172a',
        glass: 'rgba(255,255,255,0.72)',
      },
    },
  },
  plugins: [],
};
