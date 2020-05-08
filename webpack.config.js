const path = require('path');
const BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
  entry: {
    'auth0.js': './src/index.js',
    'auth0.min.js': './src/index.js'
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new BabiliPlugin(
      {},
      {
        test: /\.min\.js$/
      }
    )
  ]
};

// const path = require('path');
//
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'auth0.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// };
