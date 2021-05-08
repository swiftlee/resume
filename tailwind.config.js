module.exports = {
  darkMode: "class",
  purge: {
    layers: ['base', 'components'],
    content: ['./src/**/*.{js,ts,tsx}', './public/index.html']
  },
  theme: {
    extend: {
      colors: {
        primary: 'rgba(96, 165, 250, 0.8)',
        "primary-1": 'rgba(96, 165, 250, 0.1)',
        "primary-2": 'rgba(96, 165, 250, 0.2)',
        "primary-3": 'rgba(96, 165, 250, 0.3)',
        "primary-4": 'rgba(96, 165, 250, 0.4)',
        "primary-5": 'rgba(96, 165, 250, 0.5)',
        "primary-6": 'rgba(96, 165, 250, 0.6)',
        "primary-7": 'rgba(96, 165, 250, 0.7)',
        "primary-9": 'rgba(96, 165, 250, 0.9)',
        "primary-full-opacity": 'rgba(96, 165, 250, 1)'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    }
  },
  plugins: [],
};
