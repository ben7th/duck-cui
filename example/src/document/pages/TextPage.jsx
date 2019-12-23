import React from 'react'

import { DocumentDemoText, DocumentDemoMarkdownText } from '../demos'
import DocumentMarkdown from '../demos/DocumentMarkdown'

const md = `
# Text

Text 是一种常用的对话气泡。当场景业务逻辑上需要“说”一些信息，或者用户输入了一些信息，要显示在对话之中，可以根据需要显示 Text 气泡。

## Props

|Prop|Type|Description|
|-|-|-|
|\`text\`|\`String\`|要显示的文本内容|
|\`markdown\`|\`String\`|要显示的 markdown 富文本内容<br/>\`markdown\` 和 \`text\` 两参数只能二选一|

## Methods

|Method|Description|
|-|-|
|\`setSide(side)\`|设置对话气泡出现的方位|

<Demo />

# Markdown Text

Text 支持传入并显示 markdown 格式文本并按照预设的样式显示。在一些需要显示富文本的场合下，这种特性能提供帮助。

目前 markdown 语法支持多级标题，粗斜体，删除线，引用，多级无序/有序列表，表格。未来计划支持代码高亮，数学公式，图表等 markdown 扩展语法。

由于 duck-cui 已经自带 Image 对话气泡，一般情况下不建议在 markdown 里面内嵌图片。

<Demo1 />
`

export default class LoadingDemo extends React.Component {
  render () {
    return <DocumentMarkdown
      overrides={ { Demo: DocumentDemoText, Demo1: DocumentDemoMarkdownText } }
    >{ md }</DocumentMarkdown>
  }
}