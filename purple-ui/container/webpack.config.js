module.exports = require('./webpack.common')({
  publicPath: 'http://localhost:8080/',
  remotes: {
    'auth': 'http://localhost:8081/remoteEntry.js',
  },
});
