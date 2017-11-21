/* eslint-env node */

const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',

    vendor: [
      'react',
      'react-dom'
    ]
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules')
    ],
    extensions: [
      '.js', '.jsx'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'build')
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Application',
      template: 'public/index.html'
    }),

    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'runtime' }),

    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
