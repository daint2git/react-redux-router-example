/**
 * Author: daint2@fsoft.com.vn
 * File: daint2.webpack.config.js
 */

const PATH = require('path');
const SRC_DIR = PATH.resolve(__dirname, 'src');
const PUBLIC_DIR = PATH.resolve(__dirname, 'public');

module.exports = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: PUBLIC_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015'],
        plugins: ['transform-class-properties']
      }
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      ActionsPath: SRC_DIR + '/actions',
      ComponentsPath: SRC_DIR + '/components',
      ConstantsPath: SRC_DIR + '/constants',
      ContainersPath: SRC_DIR + '/containers',
      ReducersPath: SRC_DIR + '/reducers',
      PagesPath: SRC_DIR + '/pages',
      TestDataPath: SRC_DIR + '/testdata',
      ApiPath: SRC_DIR + '/api'
    }
  },
  devServer: {
    contentBase: PUBLIC_DIR,
    port: 9999,
    historyApiFallback: true
  }
}