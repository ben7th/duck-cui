import React from 'react'

import css from './DemoPage.scss'

import CUI from '../CUI/CUI'
import Timeout from 'await-timeout'

export default class DemoPage extends React.Component {
  render () {
    return <div className={ css.DemoPage }>
      <div className={ css.phone }>
        <div className={ css.phoneinner }>
          <CUI ref={ $node => this.cuic = $node.cui }/>
        </div>
      </div>
      <div className={ css.control }>
        <button onClick={ evt => this.appendText() }>增加文本节点</button>
        <button onClick={ evt => this.appendMDText() }>增加 markdown 文本节点</button>
        <button onClick={ evt => this.appendLoading() }>增加 Loading 节点</button>
        <button onClick={ evt => this.removeLast() }>移除最后一个节点</button>
        <button onClick={ evt => this.removeAllLoading() }>移除所有 Loading 节点</button>
        <br />
        <button onClick={ async (evt) => { await this.demo1() } }>demo1</button>
      </div>
    </div>
  }

  appendText () {
    this.cuic.appendAIText('hello')
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
    cuic.clearAllNodes()

    await loadingAndSay({ cuic, text: '你好' })
    await loadingAndSay({ cuic, text: '我是小白' })
    await loadingAndSay({ cuic, text: '很高兴认识你' })
  }
}

const loadingAndSay = async ({ cuic, text }) => {
  cuic.appendLoading()
  await Timeout.set(1000)
  cuic.removeLoading().appendAIText(text)
}