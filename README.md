# duck cui

## 迭代记录

### 2019-12-29

- 简化 Cover 类型组件的自定义事件声明方式

### 2019-12-27

- 实现 MultiChoices

### 2019-12-26

- 验证第三方前端集成能力

### 2019-12-25

- 添加 favicon, 使用 <https://www.pixilart.com/> 绘制
- 调整 cui context 获取方式为 callback 方式
- 增加 BackgroundLayer
- 增加文档代码高亮

### 2019-12-24

- 打包问题相关讨论  
  <https://github.com/webpack/webpack/issues/7353>

### 2019-12-23

- 拆分 demo 打包和组件库打包
  - 目的：隔离引用路径，简化引用，解耦
- 给各个组件撰写参数和方法说明

### 2019-12-22

- 调整 Picker 体验，重写样式
- 实现 Video 和视频播放控制

### 2019-12-19

- 添加第三方库引用清单 <https://github.com/ben7th/duck-cui/wiki/listOf3rd>
- 重构 Demo TOC
- 优化 Audio 以显示不同长度的音频
- 重构接口类，改为 builder
- 通过 rmc-picker 实现 Picker

### 2019-12-18

- 实现 Choices
- 拆分工程

### 2019-12-16

- 尝试集成 [react-player](https://cookpete.com/react-player/)
- 实现了 Audio 组件
- 开源方式的思考：
  - support sibbay 的部分按照 sibbay 的社区规则来做：
    - 方式：fork 代码到 sibbay org，前期手动管理代码同步，直到代码足够解耦后，把和 sibbay 支持相关的部分都转化为独立打包的插件形式；
    - sibbay mri 所有用到的组件的实现；
    - 仿真工具支持，静态 web 工具支持，微信小程序支持；
    - 左手医生的对接支持；
  - 非 support sibbay 的部分，考虑，安排，沟通，单独去做，暂时在 ben7th 的 repo 上管理
    - 和第三方 API，数据库的对接；
    - 和 hubot, discord 等工具的对接；
    - 实现其他社区或其他用户需求；
  - 介绍，文档与示例维护，推广，单独进行，建立网站，将 sibbay 等标记为被支持的客户。
    - 会将 sibbay 的支持作为示例来介绍，但不会涉及 sibbay 的技术细节
    - 通过 fans 捐赠，众筹等途径维护开发成本。例如 <https://github.com/sponsors> <https://afdian.net/>
- 开发的思考：
  - 先把基于无状态 http 请求的场景支持彻底，再开始考虑长连接的场景

### 2019-12-15

- 实现 Input
- 引入 react-textarea-autosize
- 引入 iconfont, 调整 webpack 配置，增加 `/\.(eot|woff|woff2|ttf|svg)$/` 的打包
- 实现和风天气的 demo
- 初步实现了基本的 markdown 支持
- markdown-to-jsx 没有正确处理多行 quote 的问题，而 markdown-it 处理的是正确的，所以后者需要保留

### 2019-12-09

- 在继承体系下逐个实现组件，在此过程中撰写文档的示例页面和优化代码结构
- 引入函数库 [lodash](https://www.lodashjs.com/) 来简化代码
- 引入 [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx) 来简化文档撰写
- 已知问题：chrome 在开启硬件加速时，存在动画与 setTimeout 冲突的问题。具体表现为在 setTimeout 期间，动画有时不渲染
- 重构了 Loading, Text, Image, Tip
- 完善了 demo 索引页面
- 进一步修正了 demo 页面刷新的问题
- 引入 react-router-dom 组件，参考：<https://github.com/mrdulin/blog/issues/42>  
  文档：<https://www.jianshu.com/p/97e4af32811a>
- 调整 webpack 配置，以 fix 路径刷新加载和前进回退问题
- 实现了一个 demo 索引页面

### 2019-12-06

- 增加接口描述文档，添加了 AppendAble 和 CoverAble 的描述
- 实现 AppendAble 和 CoverAble 的基础代码

### 2019-12-05

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
  