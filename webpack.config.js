const webpack = require('webpack');
const glob = require('glob');
const path = require('path');

var entryPoints = {};
glob.sync('./**/js/App.js').forEach((path) => {
  entryPoints[path.replace('App.js', 'bundle.js')] = path;
});

module.exports = {
  // entry: glob.sync('./**/js/App.js'),
  entry: entryPoints,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Components: path.resolve(__dirname, 'shared_components')
    }
    // modules: ["node_modules"]
  },
  output: {
    filename: '[name]',
    // path: path.resolve('./dist'),
    path: __dirname,
  },
  devServer: {
    port: 9000,
    host: "0.0.0.0",
    overlay: true,
    disableHostCheck: true
  },
  performance: {
    hints: false,
  },
  devtool: 'cheap-module-source-map'
};
