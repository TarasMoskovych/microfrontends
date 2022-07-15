const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/weather/latest/',
    clean: true,
  },
};

module.exports = merge(commonConfig, prodConfig);
