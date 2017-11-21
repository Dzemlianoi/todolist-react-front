/* eslint-env node */

const webpack = require('webpack')
const merge = require('webpack-merge')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const common = require('./webpack.config.common.js')

module.exports = merge(common, {
  devtool: 'cheap-module-source-map',

  output: {
    filename: '[name].[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([
      'build'
    ]),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      parallel: true
    }),

    new ExtractTextWebpackPlugin({
      filename: '[name].[contenthash].css'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
})
