const webpack = require('webpack');
const paths = require('./paths');
const config = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

config.devServer = {
  historyApiFallback: true,
  overlay: true,
  stats: 'errors-only',
  contentBase: paths.appSrc,
  inline: true,
  hot: true,
  publicPath: '/'
};

config.module.rules.push({
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'postcss-loader',
    'sass-loader'
  ],
  exclude: /node_modules/
},{
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader',
    'postcss-loader'
  ],
  exclude: /node_modules/
},{
  test: /.jsx?$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [paths.appSrc],
  options: {
    formatter: require('eslint-friendly-formatter')
  }
});

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.SourceMapDevToolPlugin({
    filename: '[file].map',
    exclude: ['vendor.js']
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.appIndexHTML,
  }),
  new FriendlyErrorsPlugin()
);

module.exports = config;