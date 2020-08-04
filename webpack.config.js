const path = require('path')
module.exports = {
  entry: './src/index.js',
  mode: 'production',
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
