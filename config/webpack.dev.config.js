const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js'); // 引用公共配置

const devConfig = {
  mode: 'development', // 开发模式
  entry: [
    '@babel/polyfill',
    path.join(__dirname, "../example/src/app.js")
  ], // 项目入口，处理资源文件的依赖关系
  output: {
    path: path.join(__dirname, "../example/src/"),
    filename: "bundle.js", // 使用webpack-dev-sevrer启动开发服务时，并不会实际在`src`目录下生成bundle.js，打包好的文件是在内存中的，但并不影响我们使用。
    publicPath: "/", // 加载资源时从根目录开始寻找，避免前进后退白屏
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.min\.css$/,
        loader: ['style-loader','css-loader?modules'],
      },
      {
        test: /\.min\.css$/,
        loader: ['style-loader','css-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /\.min\.css$/,
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
        test: /\.(png|jpg|gif)$/,
        use: [ 'file-loader' ],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        use: [ 'file-loader' ],
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../example/src/'),
    compress: true,
    port: 8000, // 启动端口为 8000 的服务
    open: false, // 不自动打开浏览器
    historyApiFallback: true, // If you are using the HTML5 history API you probably need to serve your index.html in place of 404 responses, which can be done by setting historyApiFallback: true
  },
};
module.exports = merge(devConfig, baseConfig); // 将 baseConfig 和 devConfig 合并为一个配置