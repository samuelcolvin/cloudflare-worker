const webpack = require('webpack')

module.exports = {
  entry: './index.js',
  mode: 'production',
  optimization: {
    minimize: false
  },
  target: 'node',
  devtool: 'source-map',
  performance: {
    hints: false
  },
  output: {
    path: __dirname + '/dist',
    publicPath: 'dist',
    filename: 'worker.js',
    sourceMapFilename: 'worker.js.map',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.RAVEN_DSN': JSON.stringify(process.env.RAVEN_DSN),
      'process.env.RELEASE': JSON.stringify(process.env.RELEASE),
    })
  ]
}
