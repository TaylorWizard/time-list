const webpack = require('webpack')
const baseConfig = require('./base.js')

const devConfig = baseConfig
devConfig.devtool = 'cheap-module-eval-source-map'
devConfig.devServer = {
  disableHostCheck: true,
  port: 8888
}

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"develop"'
    }
  })
]

devConfig.plugins.push(...plugins)
module.exports = devConfig
