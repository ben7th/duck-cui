import React from 'react'

import css from './DemoPage.scss'

import CUI from '../CUI/CUI'
import Timeout from 'await-timeout'

import Tip from '../CUI/components-new/appends/Tip'
import Text from '../CUI/components-new/says/Text'
import Choices from '../CUI/components-new/says/Choices'
import CoverChoices from '../CUI/components-new/covers/Choices'

export default class DemoPage extends React.Component {
  render () {
    return <div className={ css.DemoPage }>
      <div className={ css.phone }>
        <div className={ css.phoneinner }>
          <CUI ref={ $node => this.cuic = $node.cuic }/>
        </div>
      </div>
      <div className={ css.control }>
        <button onClick={ evt => this.appendMDText() }>增加 markdown 文本节点</button>
        <button onClick={ evt => this.appendLoading() }>增加 Loading 节点</button>
        <button onClick={ evt => this.removeLast() }>移除最后一个节点</button>
        <button onClick={ evt => this.removeAllLoading() }>移除所有 Loading 节点</button>
        <br />
        <button onClick={ async (evt) => { await this.demo1() } }>demo1</button>
        <br />

        <button onClick={ async (evt) => { await this.clear() } }>clear</button>
        <button onClick={ async (evt) => { await this.appendTip() } }>append Tip</button>
        <button onClick={ evt => this.appendTextFromRemote() }>append Text from remote</button>
        <button onClick={ evt => this.appendTextFromLocal() }>append Text from local</button>
        <button onClick={ evt => this.appendChoices() }>append Choices</button>
        <button onClick={ evt => this.appendCoverChoices() }>append Cover Choices</button>
      </div>
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

  async appendTip () {
    let tip = new Tip({ text: 'a tip' })
    await this.cuic.append(tip)
  }

  async appendTextFromRemote () {
    let text = new Text({ text: 'a remote text node' }).setSide('remote')
    await this.cuic.append(text)
  }

  async appendTextFromLocal () {
    let text = new Text({ text: 'a local text node' }).setSide('local')
    await this.cuic.append(text)
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

const loadingAndSay = async ({ cuic, text }) => {
  cuic.appendLoading()
  await Timeout.set(1000)
  cuic.removeLoading().appendAIText(text)
}