var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: {
   main: ['./rx_exercises/main.js'],
 // final: ['./rx_final/no-arch.js']
  },

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'bundles'),
    publicPath: '/bundles/',
    filename: '[name].js'
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },

  resolve: {
    root: path.resolve(__dirname),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  }
};
