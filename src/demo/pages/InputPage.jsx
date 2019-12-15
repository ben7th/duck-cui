import React from 'react'

import { DemoAInput } from '../components/demos/index'
import Markdown from 'markdown-to-jsx'

const md = `
# Input

Input 用来支持文字输入。此组件固定在屏幕下方出现，组件显示时的尺寸会随着输入文字内容而变化。

可在下面的界面上输入一些文字，点击发送按钮来进行测试。

<DemoAInput />
`

export default class extends React.Component {
  render () {
    return <Markdown
      options={{
        overrides: { DemoAInput }
      }}
    >{ md }</Markdown>
  }
}