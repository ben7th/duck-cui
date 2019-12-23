import React from 'react'

import { DocumentDemoTip } from '../components/demos'
import Markdown from 'markdown-to-jsx'

const md = `
# Tip

Tip 用来显示一些简短信息。可用于系统提示等场合。

<Demo />
`

export default class extends React.Component {
  render () {
    return <Markdown
      options={{
        overrides: { Demo: DocumentDemoTip }
      }}
    >{ md }</Markdown>
  }
}