import React from 'react'

import { DocumentDemoChoices } from '../demos'
import DocumentMarkdown from '../demos/DocumentMarkdown'

const md = `
# Choices

Choices 用于显示浮动的单选选项，可用来支持在对话中提供预设的选择。

## Props

|Prop|Type|Description|
|-|-|-|
|\`items\`|\`Array<String>\`|单选选项|

<Demo />
`

export default class extends React.Component {
  render () {
    return <DocumentMarkdown
      overrides={ { Demo: DocumentDemoChoices } }
    >{ md }</DocumentMarkdown>
  }
}