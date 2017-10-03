const webpack = require('webpack');
const paths = require('./paths');


module.exports = {
  context: paths.appSrc,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    index: paths.appIndexJS
  },
  output: {
    path: paths.appBuildPath,
    publicPath: '/',
    filename: 'static/js/[name]-[hash].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'static/images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/font-woff',
              name: 'static/fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:
        [
          {
            loader: 'file-loader',
            options:
            {
              limit: 8192,
              mimetype: 'application/font-woff',
              name: 'static/fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: []
}
