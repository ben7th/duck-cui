import React from 'react'

import { Demo5Video } from '../components/demos'
import Markdown from 'markdown-to-jsx'

const md = `
# Video

Video 用于在对话流中显示和播放视频。点击对话气泡可以播放视频。

以下是基本的使用例子：

<Demo5Video />
`

export default class extends React.Component {
  render () {
    return <Markdown
      options={{
        overrides: { Demo5Video }
      }}
    >{ md }</Markdown>
  }
}