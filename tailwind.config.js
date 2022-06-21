module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navBg: '#e2e8f0',
        navText: '#1e293b',
      },
    },
    fontFamily: {
      inter: "'Inter', sans-serif",
    },
    screens: {
      xs: '575px',
      sm: '640px',
      md: '768px',
      xmd: '900px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
