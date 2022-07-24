module.exports = {
  content: [
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
    './src/**/*.tsx',
    './src/index.html'
  ],
  theme: {
    extend: {
      color: {
        'blueGray': {
          '100': '#f1f5f9',
          '500': '#748899'
        },
      },
    }
  },
  plugins: []
};
