import React from 'react'

import { DocumentDemoAudio } from '../demos'
import DocumentMarkdown from '../demos/DocumentMarkdown'

const md = `
# 组件 CUINode

CUINode 用来实现 CUI 中所有的可显示，可交互的内容。  
CUINode 分为两类：\`AppendAble\` 和 \`CoverAble\`

## AppendAble

所有随 CUI 可滚动区域滚动的内容，即显示在对话流中的内容，称之为 AppendAble.  
AppendAble 经常被用来实现各种不同外观的可显示内容和统计内容。

### SpeakAble < AppendAble

SpeakAble 是一种特殊的 AppendAble. 所有 SpeakAble 均带有头像和对话气泡。  
从设计角度上来说，SpeakAble 用来表示所有的“由特定 Speaker 说出”的对话内容。

## CoverAble

所有固定/覆盖在 CUI 界面上的特定位置的内容，即游离在对话流之外的内容，称之为 CoverAble.  
CoverAble 经常被用来实现选项选择，文本输入等交互。

## Builder

通过 Builder 来实现组件的定义，Builder 是一些包装器，通过包装 React.Component 实现和 CUI 的适配。目前有以下几种 Builder, 分别用来包装上述几种 CUINode

- buildAppendAble
- buildCoverAble
- buildSpeakAble

### Builder 代码示例

TODO

## Methods 组件方法

### remove()

从 CUI 中移除该组件

## CUIContext 上的相关方法

CUIContext 对象上提供了一些方法用来添加和移除 CUINode.  
具体可参考 [CUI & CUIContext](/cuic)
`

export default class extends React.Component {
  render () {
    return <DocumentMarkdown
    >{ md }</DocumentMarkdown>
  }
}