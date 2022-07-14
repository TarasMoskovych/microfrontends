const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'todo',
      filename: 'remoteEntry.js',
      exposes: {
        './app': './src/app.js',
      },
    }),
  ],
};
