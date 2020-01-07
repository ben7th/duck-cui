import React from 'react'

import { DocumentDemoInput } from '../demos'
import DocumentMarkdown from '../demos/DocumentMarkdown'

const md = `
# Input

Input 用来支持文字输入。此组件固定在屏幕下方出现，组件显示时的尺寸会随着输入文字内容而变化。

可在下面的界面上输入一些文字，点击发送按钮来进行测试。

## Props

|Prop|Type|Default|Description|
|-|-|-|-|
|\`placeholder\`|\`String\`|""|输入框显示的占位文字|
|\`maxRows\`|\`Integer\`||最大行数（超过后会滚动）|

## 默认键盘快捷键

### 发送填写内容

\`Ctrl\` + \`Enter\` 或者 \`Command\` + \`Enter\`

<Demo />
`

export default class extends React.Component {
  render () {
    return <DocumentMarkdown
      overrides={ { Demo: DocumentDemoInput } }
    >{ md }</DocumentMarkdown>
  }
}