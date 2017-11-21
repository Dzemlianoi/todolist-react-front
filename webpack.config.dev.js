/* eslint-env node */

const webpack = require('webpack')
const merge = require('webpack-merge')

const common = require('./webpack.config.common.js')

module.exports = merge(common, {
  devtool: 'cheap-eval-source-map',

  output: {
    filename: '[name].js'
  },

  devServer: {
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ttf|woff|woff2)$/,
        use: 'file-loader?name=[name].[ext]',
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
})
