import React from 'react'

import { DocumentDemoAudio } from '../demos'
import DocumentMarkdown from '../demos/DocumentMarkdown'

const md = `
# CUI & CUIContext

CUI 是用于承载所有交互内容的基础组件。  
CUIContext 是用来控制所有交互内容的上下文对象。

## 布局样式

CUI 会填充其所在的容器，其宽高取决于容器宽高。

## 调用示例

\`\`\`jsx
class MyCUI extends React.Component {
  render () {
    return <CUI 
      ready={ context => this.cuic = context } 
      options={ {
        autoScrollBottom: true
      } }
    />
  }
}
\`\`\`

## Props

### ready

\`ready\` 属性会返回一个 CUIContext 上下文对象，开发者可以以这种方式获得该对象，从而实现对 CUI 交互和内容的控制

### options

\`options\` 属性可对 CUI 的一些基本交互行为做出设置，设置项如下：

|options 属性|默认值|说明|
|-|-|-|
|autoScrollBottom|false|append 内容时是否自动滚动到底|

## Methods

### append(...)

\`\`\`javascript
await this.cuic.append(new Tip({ text: '1' }))
\`\`\`

### cover(...)

\`\`\`js
let cs = new Choices({ items })
cs.on('select', async x => {
  await this.cuic.append(new Text({ text: x.label, speaker: 'slime' }))
})
await this.cuic.cover(cs)
\`\`\`

### waitFor(...)

等待指定的 duration 毫秒数。

### removeById(...)

根据组件 id 移除已经添加的组件。

\`\`\`js
await this.append(speakAble)
await this.waitFor({ duration })
await this.removeById(speakAble.id)
\`\`\`

### getSpeaker(...)

CUIContext 通过 getSpeaker 方法获得特定的，预先注册好的 Speaker 对象。  
Speaker 对象上提供了一些方法来控制 SpeakAble 对象。  

### speaker.speak(...)

以该 speaker 作为说话人来添加 SpeakAble 对象。  

### speaker.speakAndThenRemove(...)

以该 speaker 作为说话人来添加 SpeakAble 对象，并在指定的 duration 后移除该对象。

\`\`\`js
let duck = this.cuic.getSpeaker('duck')
await duck.speakAndThenRemove(new Loading(), { duration: 500 })
await duck.speak(new Text({ text }))
\`\`\`

### setBackgroundContent

设置一个 React.Component 类作为 CUI 的背景层。
`

export default class extends React.Component {
  render () {
    return <DocumentMarkdown
    >{ md }</DocumentMarkdown>
  }
}