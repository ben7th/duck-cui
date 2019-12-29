import React from 'react'

import { DocumentDemoMultiChoices } from '../demos'
import DocumentMarkdown from '../demos/DocumentMarkdown'

const md = `
# MultiChoices

MultiChoices 用于显示浮动的多选选项，可用来支持在对话中提供预设的选择。

## Props

|Prop|Type|Description|
|-|-|-|
|\`items\`|\`Array<String>\`|多选选项|

<Demo />
`

export default class extends React.Component {
  render () {
    return <DocumentMarkdown
      overrides={ { Demo: DocumentDemoMultiChoices } }
    >{ md }</DocumentMarkdown>
  }
}