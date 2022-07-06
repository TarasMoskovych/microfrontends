const DefinePlugin = require('webpack/lib/DefinePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { VueLoaderPlugin } = require('vue-loader');
const packageJson = require('./../package.json');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.scss|\.css$/,
        use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new DefinePlugin({ PRODUCT_SERVICE_URL: JSON.stringify(process.env.PRODUCT_SERVICE_URL || 'http://localhost:3001') }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './mount': './src/mount'
      },
      shared: packageJson.dependencies,
    }),
    new VueLoaderPlugin(),
  ],
};
