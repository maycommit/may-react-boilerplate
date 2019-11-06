const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'production',
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    publicPath: '/',
  },
  optimization: {
    namedModules: true,
    concatenateModules: true,
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: false,
      }),
    ],
  },
})