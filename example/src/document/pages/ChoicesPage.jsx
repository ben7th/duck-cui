import React from 'react'

import { DocumentDemoChoices } from '../demos'
import Markdown from 'markdown-to-jsx'

const md = `
# Choices

Choices 用于显示浮动的单选选项，可用来支持在对话中提供预设的选择。

以下是基本的使用例子：

<Demo />
`

export default class extends React.Component {
  render () {
    return <Markdown
      options={{
        overrides: { Demo: DocumentDemoChoices }
      }}
    >{ md }</Markdown>
  }
}