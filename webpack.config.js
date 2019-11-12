const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    port: 3000,
  },
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
  optimization: {
    namedModules: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    alias: {
      core: path.resolve(__dirname, './src/core'),
      modules: path.resolve(__dirname, './src/modules'),
      routes: path.resolve(__dirname, './src/routes'),
    },
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [['@babel/preset-env', { modules: false }]],
          }
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|woff|woff2|ttf|eot|jpg)/,
        use: 'file-loader',
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Boilerplate',
      template: './src/index.html',
      favicon: './src/core/assets/img/favicon.ico',
      config: process.env.CONFIG_FILE || 'config',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
    new CompressionPlugin({
      test: /\.js$|\.css$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
    })
  ]
}
