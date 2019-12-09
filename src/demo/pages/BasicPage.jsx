import React from 'react'

import { Demo0Basic } from '../components/demos/index'
import Markdown from 'markdown-to-jsx'

const md = `
# 基本演示

duck cui 提供了 cui 所需的各种基本组件，开发者可以自由组合使用它们，并且可以灵活地根据实际需要控制它们的呈现与交互。  

利用 duck cui, 可以比较容易地实现类似下面这样的呈现效果。  
用到了 Loading, Text, Tip  

<Demo0Basic />
`

export default class Basic extends React.Component {
  render () {
    return <Markdown
      options={{
        overrides: { Demo0Basic }
      }}
    >{ md }</Markdown>
  }
}