const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const port = 8082;

const devConfig = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  devServer: {
    port,
    historyApiFallback: true,
  },
};

module.exports = merge(commonConfig, devConfig);
