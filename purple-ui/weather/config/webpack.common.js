const DefinePlugin = require('webpack/lib/DefinePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
  },
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
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
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new DefinePlugin({ MFE_SERVICE_URL: JSON.stringify(process.env.MFE_SERVICE_URL || 'http://localhost:3001') }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'weather',
      filename: 'remoteEntry.js',
      exposes: {
        './mount': './src/mount',
      },
      shared: [
        {
          'rxjs': {
            singleton: true,
          },
        },
      ],
    }),
  ],
};
