const DefinePlugin = require('webpack/lib/DefinePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./../package.json');

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
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
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './mount': './src/mount'
      },
      shared: packageJson.dependencies,
    }),
  ],
};
