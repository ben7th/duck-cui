import React from 'react'

import { DocumentDemoWeather } from '../demos'
import Markdown from 'markdown-to-jsx'

const md = `
# 综合演示：天气查询

这是一个调用 [和风天气](https://www.heweather.com/) API 实现的简单聊天互动。

<Demo />
`

export default class extends React.Component {
  render () {
    return <Markdown
      options={{
        overrides: { Demo: DocumentDemoWeather }
      }}
    >{ md }</Markdown>
  }
}