const path = require('path');
const merge = require('webpack-merge');

// 引用公共配置
const baseConfig = require('./webpack.base.js'); 

// 用于将组件的css打包成单独的文件输出到`lib`目录中
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 

const prodConfig = {
  // 生产模式
  mode: 'production', 

  // 项目入口，处理资源文件的依赖关系
  entry: [
    // '@babel/polyfill',
    path.join(__dirname, "../src/index.js")
  ],

  output: {
    path: path.join(__dirname, "../lib/"),
    filename: "index.js",

    // 采用通用模块定义
    libraryTarget: 'umd', 

    // 兼容 ES6 的模块系统、CommonJS 和 AMD 模块规范
    libraryExport: 'default', 

    // 加载资源时从根目录开始寻找，避免前进后退白屏
    publicPath: "/", 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader?modules'],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { 
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]-[local]-[hash:base64:5]'
              }
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [ 'file-loader' ],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        use: [ 'file-loader' ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.min.css" // 提取后的css的文件名
    })
  ],

  // 定义外部依赖，避免把react和react-dom打包进去
  externals: { 
    "react": {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  },
};

// 将 baseConfig 和 devConfig 合并为一个配置
module.exports = merge(prodConfig, baseConfig);