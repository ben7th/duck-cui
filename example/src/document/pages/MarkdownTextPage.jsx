import React from 'react'

import { DocumentDemoMarkdownText } from '../demos'
import Markdown from 'markdown-to-jsx'

const md = `
# Text

## Markdown Text

Text 支持传入并显示 markdown 格式文本并按照预设的样式显示。在一些需要显示富文本的场合下，这种特性能提供帮助。

目前 markdown 语法支持多级标题，粗斜体，删除线，引用，多级无序/有序列表，表格。未来计划支持代码高亮，数学公式，图表等 markdown 扩展语法。

由于 duck-cui 已经自带 Image 对话气泡，一般情况下不建议在 markdown 里面内嵌图片。

<Demo />
`

export default class LoadingDemo extends React.Component {
  render () {
    return <Markdown
      options={{
        overrides: { Demo: DocumentDemoMarkdownText }
      }}
    >{ md }</Markdown>
  }
}