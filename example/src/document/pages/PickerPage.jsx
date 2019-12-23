import React from 'react'

import { DocumentDemoPicker } from '../demos'
import DocumentMarkdown from '../demos/DocumentMarkdown'

const md = `
# Picker

Picker 用于在数据序列中选择数据。

## Props

|Prop|Type|Description|
|-|-|-|
|\`data\`|\`Array<Object>\`|数据列表|

## 数据列表结构示例

\`\`\`js
const data = [
  [
    { label: '矿泉水/纯净水', value: '1' },
    { label: '可乐', value: '2' },
    { label: '柠檬茶', value: '3' },
    { label: '咖啡', value: '4', selected: true},
    { label: '茶叶', value: '5' },
    { label: '果汁', value: '6' },
    { label: '酒', value: '7' },
  ]
]
\`\`\`

<Demo />
`

export default class extends React.Component {
  render () {
    return <DocumentMarkdown
      overrides={ { Demo: DocumentDemoPicker } }
    >{ md }</DocumentMarkdown>
  }
}