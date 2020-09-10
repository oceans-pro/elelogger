const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'eleLogger'
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
    },
    extensions: ['.ts', '.js'],
  },
  externals: {
    // key 包名
    // value 全局变量名
    jquery: 'jQuery', // 因为博客园已经默认引入了jQuery@2.2.0
    vue: 'Vue'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            // 开启babel缓存
            // 第二次构建时，会读取之前的缓存
            cacheDirectory: true,
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
    ],
  }
}
