import React from 'react'

import { Demo4Audio } from '../components/demos'
import Markdown from 'markdown-to-jsx'

const md = `
# Audio

Audio 用于在对话流中显示和播放音频。点击对话气泡可以播放音频。

以下是基本的使用例子：

<Demo4Audio />
`

export default class extends React.Component {
  render () {
    return <Markdown
      options={{
        overrides: { Demo4Audio }
      }}
    >{ md }</Markdown>
  }
}