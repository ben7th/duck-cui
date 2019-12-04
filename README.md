# duck cui

## 迭代记录

### DAY1

- 打包方式，参考 <https://webpack.docschina.org/loaders/sass-loader/>
- 自己进行了一些修改，引入了：
  - sass-loader
  - filer-loader, 参考 <https://webpack.js.org/guides/asset-management/>
  - 调整了 css-loader 的 localIdentName 配置，参考 <https://www.npmjs.com/package/css-loader>
  - 增加了 @babel/plugin-proposal-class-properties, 以支持 class 下的 static 语法
- 包装了控制器层 cuic，以便对 CUI 实现精细的控制
- 包装了若干 cuic 上的控制方法
- 实现了一个测试页
- 思考：
  - 把聊天过程当成一种特殊的演示文档结构去对待（也许类似 PPT）
  - 文档如何展示，即聊天如何进行
  - 是要往外面包东西，不是往里面添东西
  - 先解耦，如果做到后面某一层可以换成第三方库，完全可以考虑
  