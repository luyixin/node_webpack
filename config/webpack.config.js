const webpack = require('webpack');
const fs = require('fs')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const __dir = path.resolve(__dirname, '..')

const nodeModules = {};
fs.readdirSync('node_modules').filter(function(x) {
  return ['.bin'].indexOf(x) === -1;
}).forEach(function(mod) {
  nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = {
  entry: __dir + '/app.js',
  output: {
    path: __dir + '/dist',
    filename: 'dist.js'
  },
  target: 'node',
  externals: nodeModules,
  context: __dirname,
  node: {
    __filename: false,
    __dirname: false
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJSPlugin({
      sourceMap: false
    })
  ]
}
