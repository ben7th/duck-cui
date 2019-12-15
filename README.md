# duck cui

## 迭代记录

### DAY10

### DAY6

- 初步实现了基本的 markdown 支持
- markdown-to-jsx 没有正确处理多行 quote 的问题，而 markdown-it 处理的是正确的，所以后者需要保留

### DAY5

- 在继承体系下逐个实现组件，在此过程中撰写文档的示例页面和优化代码结构
- 引入函数库 [lodash](https://www.lodashjs.com/) 来简化代码
- 引入 [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx) 来简化文档撰写
- 已知问题：chrome 在开启硬件加速时，存在动画与 setTimeout 冲突的问题。具体表现为在 setTimeout 期间，动画有时不渲染
- 重构了 Loading, Text, Image, Tip

### DAY4

- 完善了 demo 索引页面
- 进一步修正了 demo 页面刷新的问题

### DAY3

- 引入 react-router-dom 组件，参考：<https://github.com/mrdulin/blog/issues/42>  
  文档：<https://www.jianshu.com/p/97e4af32811a>
- 调整 webpack 配置，以 fix 路径刷新加载和前进回退问题
- 实现了一个 demo 索引页面

### DAY2

- 增加接口描述文档，添加了 AppendAble 和 CoverAble 的描述
- 实现 AppendAble 和 CoverAble 的基础代码

### DAY1

- 打包方式，参考 <https://juejin.im/post/5d6760b3e51d453b8b5fa60b>
- 自己进行了一些修改，引入了：
  - sass-loader <https://webpack.docschina.org/loaders/sass-loader/>
  - filer-loader, 参考 <https://webpack.js.org/guides/asset-management/>
  - 调整了 css-loader 的 localIdentName 配置，参考 <https://www.npmjs.com/package/css-loader>
  - 增加了 @babel/plugin-proposal-class-properties, 以支持 class 下的 static 语法
  - 引入 polyfill, 参考 <https://github.com/babel/babel/issues/8829>
- 包装了控制器层 cuic，以便对 CUI 实现精细的控制
- 包装了若干 cuic 上的控制方法
- 实现了一个测试页
- 思考：
  - 把聊天过程当成一种特殊的演示文档结构去对待（也许类似 PPT）
  - 文档如何展示，即聊天如何进行
  - 是要往外面包东西，不是往里面添东西
  - 先解耦，如果做到后面某一层可以换成第三方库，完全可以考虑
  