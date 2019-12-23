import React from 'react'

import { DocumentDemoTip } from '../demos'
import DocumentMarkdown from '../demos/DocumentMarkdown'

const md = `
# Tip

Tip 用来显示一些简短信息。可用于系统提示等场合。

## Props

|Prop|Type|Description|
|-|-|-|
|\`text\`|\`String\`|要显示的文本内容|

<Demo />
`

export default class extends React.Component {
  render () {
    return <DocumentMarkdown
      overrides={ { Demo: DocumentDemoTip } }
    >{ md }</DocumentMarkdown>
  }
}