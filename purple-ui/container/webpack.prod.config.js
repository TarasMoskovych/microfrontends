const domain = process.env.PRODUCTION_DOMAIN;

module.exports = require('./webpack.common')({
  publicPath: '/container/latest/',
  remotes: {
    'auth': `${domain}/auth/latest/remoteEntry.js`,
  },
});
