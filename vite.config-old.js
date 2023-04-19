const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'main.js'),
      name: 'algolia_colect_middleware',
      fileName: (format) => `algolia_colect_middleware.${format}.js`
    }
  }
});