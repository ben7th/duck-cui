import React from 'react'

import { DocumentDemoPicker } from '../components/demos'
import Markdown from 'markdown-to-jsx'

const md = `
# Picker

Picker 用于在数据序列中选择数据。

以下是基本的使用例子：

<Demo />
`

export default class extends React.Component {
  render () {
    return <Markdown
      options={{
        overrides: { Demo: DocumentDemoPicker }
      }}
    >{ md }</Markdown>
  }
}