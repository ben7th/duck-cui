import React from 'react'

import { DocumentDemoText } from '../demos'
import Markdown from 'markdown-to-jsx'

const md = `
# Text

Text 是一种常用的对话气泡。当场景业务逻辑上需要“说”一些信息，或者用户输入了一些信息，要显示在对话之中，可以根据需要显示 Text 气泡。

以下是基本的使用例子：

<Demo />
`

export default class LoadingDemo extends React.Component {
  render () {
    return <Markdown
      options={{
        overrides: { Demo: DocumentDemoText }
      }}
    >{ md }</Markdown>
  }
}