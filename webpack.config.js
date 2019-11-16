const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    App: path.resolve(__dirname, 'src/index.tsx'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: 'https://jesuswisord.github.io/Pokedex/',
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.ts|tsx$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
        ],
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 9000,
          },
        },
      },
    ],
  },
  resolve: { extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'] },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
    new HtmlWebpackPlugin({
      // eslint-disable-next-line no-undef
      template: path.resolve(__dirname, './index.html'),
    }),
    new webpack.DllReferencePlugin({
      manifest: './modules-manifest.json',
    }),
  ],
};
