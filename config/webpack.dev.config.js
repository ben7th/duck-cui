const path = require('path');
const merge = require('webpack-merge');

// 引用公共配置
const baseConfig = require('./webpack.base.js'); 

const devConfig = {
  // 开发模式
  mode: 'development', 

  // 项目入口，处理资源文件的依赖关系
  entry: [
    '@babel/polyfill',
    path.join(__dirname, "../document/app.js")
  ], 

  output: {
    path: path.join(__dirname, "../document/"),

    // 使用 webpack-dev-sevrer 启动开发服务时，并不会实际在 `src` 目录下生成bundle.js，打包好的文件是在内存中的，但并不影响我们使用。
    filename: "bundle.js", 

    // 加载资源时从根目录开始寻找，避免前进后退白屏
    publicPath: "/", 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.min\.css$/,
        loader: ['style-loader', 'css-loader?modules'],
      },
      {
        test: /\.min\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
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
  devServer: {
    contentBase: path.join(__dirname, '../document/'),
    compress: true,

    // 启动端口为 3000 的服务
    port: 3000, 

    // 不自动打开浏览器
    open: false, 

    // If you are using the HTML5 history API you probably need to serve your index.html in place of 404 responses, which can be done by setting historyApiFallback: true
    historyApiFallback: true, 
  },
};

// 将 baseConfig 和 devConfig 合并为一个配置
module.exports = merge(devConfig, baseConfig); 