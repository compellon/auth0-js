const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'compellon-auth0-js.js',
    path: path.resolve(__dirname, 'dist')
  }
};
