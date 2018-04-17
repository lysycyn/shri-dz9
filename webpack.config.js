const path = require('path');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const javascript = require('./webpack/scripts');
const devserver = require('./webpack/devserver');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'public'),
};

const isDevelopment = process.env.NODE_ENV;

const common = merge([
  {
    devtool:
      isDevelopment === 'development' ? 'inline-source-map' : 'source-map',
    entry: {
      index: `${PATHS.source}/index.js`,
    },
    output: {
      path: PATHS.build,
      filename: '.index.js',
      publicPath: '/',
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'index',
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index'],
        template: PATHS.source + '/index.html'
      }),
      new CleanWebpackPlugin('public'),
    ],
  },
  javascript(isDevelopment),
]);

const config = isDevelopment === 'development' ?
  merge([ common, devserver() ]) : common;

module.exports = config;
