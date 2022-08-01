const DefinePlugin = require('webpack/lib/DefinePlugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const { dependencies } = require('./package.json');
const path = require('path');
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = ({ publicPath }) => ({
  output: {
    uniqueName: 'angular',
    publicPath,
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new DefinePlugin({ NG_VERSION: JSON.stringify(dependencies['@angular/core']) }),
    new ModuleFederationPlugin({
      library: { type: 'module' },
      name: 'angular',
      filename: 'remoteEntry.js',
      exposes: {
        './remoteEntry': './src/app/app.component.ts',
      },
      shared: share({
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        ...sharedMappings.getDescriptors()
      })
    }),
    sharedMappings.getPlugin(),
  ],
});

