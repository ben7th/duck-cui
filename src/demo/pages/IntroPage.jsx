import React from 'react'

import Markdown from 'markdown-to-jsx'

const md = `
# Duck CUI

一个 CUI 支持框架。提供多种 CUI 所需要的能力。  
使用极其简洁的代码和编程方式，帮助 CUI 快速适配业务逻辑，实现所需场景。

## 使用方法

### 安装引用

### 在网页中使用

### 在微信小程序中使用

## 兼容性说明

## 用到的库，感谢！

- [lodash](https://www.lodashjs.com/)  
- [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx)
`

export default class extends React.Component {
  render () {
    return <Markdown>{ md }</Markdown>
  }
}