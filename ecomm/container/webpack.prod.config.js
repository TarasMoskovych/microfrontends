const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'https://tarasmoskovych.github.io/microfrontends/ecomm/container/dist/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        products: 'products@https://tarasmoskovych.github.io/microfrontends/ecomm/products/dist/remoteEntry.js',
        cart: 'cart@https://tarasmoskovych.github.io/microfrontends/ecomm/cart/dist/remoteEntry.js',
        login: 'login@https://tarasmoskovych.github.io/microfrontends/ecomm/login/dist/remoteEntry.js',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // instead of style-loader
          'css-loader',
        ],
      },
      {
        test: /\.(js)$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          },
        },
      },
    ],
  },
};
