import React from 'react'

import { DocumentDemoAudio } from '../demos'
import DocumentMarkdown from '../demos/DocumentMarkdown'

const md = `
# Audio

Audio 用于在对话流中显示和播放音频。点击对话气泡可以播放音频。

## Props

|Prop|Type|Description|
|-|-|-|
|\`url\`|\`String\`|要播放的音频地址，支持 mp3 格式|

## Methods

|Method|Description|
|-|-|
|\`setSide(side)\`|设置对话气泡出现的方位|

<Demo />
`

export default class extends React.Component {
  render () {
    return <DocumentMarkdown
      overrides={ { Demo: DocumentDemoAudio } }
    >{ md }</DocumentMarkdown>
  }
}