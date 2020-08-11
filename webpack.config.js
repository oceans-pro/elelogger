const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'cnblog'
    }),
    new MiniCssExtractPlugin()
  ],
  entry: './src/index.js',
  mode: 'production',
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    }
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
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: 'sass-loader' // 将 Sass 编译成 CSS
          }
        ]
      },
      // old-version
      // 样式和脚本混杂，用户体验不好，应该一上来就加载CSS
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: 'style-loader' // 将 JS 字符串生成为 style 节点
      //     },
      //     {
      //       loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
      //     },
      //     {
      //       loader: 'sass-loader' // 将 Sass 编译成 CSS
      //     }
      //   ]
      // },
    ]
  }
}
