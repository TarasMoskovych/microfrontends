const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const port = 8086;

const devConfig = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  devServer: {
    port,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};

module.exports = merge(commonConfig, devConfig);
