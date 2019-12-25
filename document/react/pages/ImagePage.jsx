import React from 'react'

import { DocumentDemoImage } from '../demos'
import DocumentMarkdown from '../demos/DocumentMarkdown'

const md = `
# Image

Image 用于在对话流中显示图片。图片显示在对话流中时是缩略状态。可以使用 ImagePreviewer 为其赋予预览交互。  

## Props

|Prop|Type|Description|
|-|-|-|
|\`src\`|\`String\`|要显示的图片网址|

## Methods

|Method|Description|
|-|-|
|\`setSide(side)\`|设置对话气泡出现的方位|

<Demo />
`

export default class LoadingDemo extends React.Component {
  render () {
    return <DocumentMarkdown
      overrides={ { Demo: DocumentDemoImage } }
    >{ md }</DocumentMarkdown>
  }
}