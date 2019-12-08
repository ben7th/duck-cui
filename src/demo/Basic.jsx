import React from 'react'

import css from './Basic.scss'

import Choices from '../CUI/components-new/says/Choices'
import CoverChoices from '../CUI/components-new/covers/Choices'

import { Demo0 } from './components/demos'

export default class Basic extends React.Component {
  render () {
    return <div className={ css.Basic }>
      <h1>基本演示</h1>
      <p>duck cui 提供了 cui 所需的各种基本组件，开发者可以自由组合使用它们，并且可以灵活地根据实际需要控制它们的呈现与交互。</p>
      <p>利用 duck cui, 可以比较容易地实现类似下面这样的呈现效果：</p>
      <Demo0 />
    </div>
  }

  appendMDText () {
    this.cuic.appendAIMarkdownText({ markdownText: '## 大家好'})
  }

  appendLoading () {
    this.cuic.appendLoading()
  }

  removeLast () {
    this.cuic.removeLastNode()
  }

  removeAllLoading () {
    this.cuic.removeLoading()
  }

  async demo1 () {
    let cuic = this.cuic
    console.log({ cuic })
    cuic.clearAllNodes()

    await loadingAndSay({ cuic, text: '你好' })
    await loadingAndSay({ cuic, text: '我是小白' })
    await loadingAndSay({ cuic, text: '很高兴认识你' })
  }

  async clear () {
    await this.cuic.clearAllNodes()
  }

  async appendChoices () {
    let choices = new Choices().setSide('remote')
    await this.cuic.append(choices)
  }

  async appendCoverChoices () {
    let choices = new CoverChoices()
    await this.cuic.cover(choices)
  }
}