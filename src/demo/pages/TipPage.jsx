import React from 'react'

import { Demo1Tip } from '../components/demos/index'
import Markdown from 'markdown-to-jsx'

const md = `
# Tip

Tip 用来显示一些简短信息。可用于系统提示等场合。

<Demo1Tip />
`

export default class extends React.Component {
  render () {
    return <Markdown
      options={{
        overrides: { Demo1Tip }
      }}
    >{ md }</Markdown>
  }
}