import ChatItemBuilder from './ChatItemBuilder'

import Scroll from 'react-scroll'
// https://www.npmjs.com/package/react-scroll

// import MarkdownIt from 'markdown-it'
// import Timeout from 'await-timeout'
import _array from 'lodash/array'

export default class CUIContext {
  constructor ({ $CUI, options = {} }) {
    this.$CUI = $CUI

    this.options = {}
    this.options.autoScrollBottom = !!options.autoScrollBottom
  }

  // 设置背景内容
  async setBackgroundContent ({ content }) {
    this.$CUI.setState({ _backgroundLayerContent: content })
  }

  // 添加说话人
  async addSpeaker (speaker) {
    let { _speakers } = this.$CUI.state
    _speakers[speaker.id] = speaker
    this.$CUI.setState({ _speakers })
  }

  // 添加 AppendAble 到 cui
  async append (appendAble) {
    await this.$CUI._append(appendAble)
    if (this.options.autoScrollBottom) {
      this._scrollToBottom()
    }
  }

  // 添加 CoverAble 到 cui
  async cover (coverAble) {
    let { coverItems } = this.$CUI.state
    coverItems.push(coverAble)
    this.$CUI.setState({ coverItems })
    return this
  }

  // 移除最后一个符合条件的 AppendAble 节点
  async removeLast ({ typeName }) {
    let { appendItems } = this.$CUI.state
    let idx = _array.findLastIndex(appendItems, (x) => {
      if (!typeName) { return true }
      return x.typeName === typeName
    })
    _array.pullAt(appendItems, idx)
    this.$CUI.setState({ appendItems })
  }

  // 移除所有符合条件的 AppendAble 节点
  async removeAll (condition) {
    let { appendItems } = this.$CUI.state

    if (condition) {
      let { typeName } = condition
      _array.remove(appendItems, (x) => {
        return x.typeName === typeName
      })
    }

    if (!condition) {
      appendItems = []
    }

    this.$CUI.setState({ appendItems })
  }

  // 等待一定的毫秒数
  async waitFor ({ duration }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, duration)
    })
  }

  // 移除一个 CoverAble 节点
  async removeCoverAble ({ typeName }) {
    let { coverItems } = this.$CUI.state
    let idx = _array.findLastIndex(coverItems, (x) => {
      if (!typeName) { return true }
      return x.typeName === typeName
    })
    _array.pullAt(coverItems, idx)
    this.$CUI.setState({ coverItems })
  }

  _scrollToBottom () {
    Scroll.animateScroll.scrollToBottom({
      containerId: 'MRI-Scroller',
      duration: 100
    })
  }
}