import React from 'react'

import { DocumentDemoVideo } from '../demos'
import DocumentMarkdown from '../demos/DocumentMarkdown'

const md = `
# Video

Video 用于在对话流中显示和播放视频。点击对话气泡可以播放视频。

## Props

|Prop|Type|Description|
|-|-|-|
|\`url\`|\`String\`|要播放的视频地址，支持 mp4 格式|

## Methods

|Method|Description|
|-|-|
|\`setSide(side)\`|设置对话气泡出现的方位|

<Demo />
`

export default class extends React.Component {
  render () {
    return <DocumentMarkdown
      overrides={ { Demo: DocumentDemoVideo } }
    >{ md }</DocumentMarkdown>
  }
}