const webpack = require('webpack');
const paths = require('./paths');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.base.js');

config.module.rules.push({
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    use: [
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ],
    fallback: 'style-loader'
  }),
  exclude: /node_modules/
},{
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    use: [
      'css-loader',
      'postcss-loader'
    ],
    fallback: 'style-loader'
  }),
  exclude: /node_modules/
});

config.plugins.push(
  new CleanWebpackPlugin(['build'], {
    verbose: true,
    root: paths.appROOT
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }),
  new webpack.LoaderOptionsPlugin({minimize: true}),
  new ExtractTextPlugin({
    filename: 'static/css/[name]-[hash].css',
    allChunks: true,
    ignoreOrder: true
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.appIndexHTML
  })
);

module.exports = config;
