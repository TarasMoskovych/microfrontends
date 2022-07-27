module.exports = require('./webpack.common')({
  publicPath: 'http://localhost:8080/',
  remotes: {
    'auth': 'http://localhost:8081/remoteEntry.js',
    'users': 'http://localhost:8084/remoteEntry.js',
  },
});
