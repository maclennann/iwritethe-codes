var webpack = require('webpack')

module.exports = {
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = false
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        IWTC_VERSION: process.env.IWTC_VERSION
      }
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}