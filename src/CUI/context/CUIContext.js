import ChatItemBuilder from './ChatItemBuilder'
import ReplyBuilder from './ChatReplyBuilder'

import Scroll from 'react-scroll'
// https://www.npmjs.com/package/react-scroll

import MarkdownIt from 'markdown-it'

export default class CUIC {
  constructor ({ $MRI }) {
    this.$MRI = $MRI
  }

  // 添加 AppendAble 到 cui
  async append (appendAble) {
    let { chatitems } = this.$MRI.state
    chatitems.push(appendAble)
    this.$MRI.setState({ chatitems })
  }

  // 添加 CoverAble 到 cui
  async cover (coverAble) {
    let { coverItems } = this.$MRI.state
    coverItems.push(coverAble)
    this.$MRI.setState({ coverItems })
  }

  // 显示 loading 节点
  appendLoading () {
    let { chatitems } = this.$MRI.state
    chatitems.push(ChatItemBuilder.AI.Loading())
    this.$MRI.setState({ chatitems })
    this._scrollToBottom()
  }

  // 移除所有 loading 节点
  removeLoading () {
    let { chatitems } = this.$MRI.state
    chatitems = chatitems.filter(x => x.type !== 'Loading')
    this.$MRI.setState({ chatitems })
    return this
  }

  // 移除最后一个节点
  removeLastNode () {
    let { chatitems } = this.$MRI.state
    chatitems.pop()
    this.$MRI.setState({ chatitems })
    this._scrollToBottom()
  }

  // 移除所有节点
  clearAllNodes () {
    this.$MRI.setState({ chatitems: [] })
    this._scrollToBottom()
    return this
  }

  _appendChatItems (chatItem) {
    let { chatitems } = this.$MRI.state
    chatitems.push(chatItem)
    this.$MRI.setState({ chatitems })
    this._scrollToBottom()
  }

  _scrollToBottom () {
    let scroller = Scroll.animateScroll
    console.log(scroller)
    scroller.scrollToBottom({
      containerId: 'MRI-Scroller'
    })
  }

  // 显示文本节点
  appendAIText (text) {
    this._appendChatItems(ChatItemBuilder.AI.Text(text))
  }

  // 显示 markdown 文本节点
  appendAIMarkdownText ({ markdownText }) {
    let md = new MarkdownIt()
    let text = md.render(markdownText)
    this._appendChatItems(ChatItemBuilder.AI.MDText(text))
  }

  // 逐字显示文本节点
  async appendAITextEachChar (text) {
    await this._appendChatItems(ChatItemBuilder.AI.TextEachChar(text))
  }

  // 显示音频节点
  appendAIAudio (url) {
    this._appendChatItems(ChatItemBuilder.AI.Audio(url))
  }

  // 显示动态图节点
  appendAIGif (url) {
    this._appendChatItems(ChatItemBuilder.AI.Gif(url))
  }

  // 显示图片节点
  appendAIImg (url) {
    this._appendChatItems(ChatItemBuilder.AI.Img(url))
  }

  // 显示视频节点
  appendAIVideo (url) {
    this._appendChatItems(ChatItemBuilder.AI.Video(url))
  }

  appendAIWebCard ({ title, desc, icon, url }) {
    this._appendChatItems(ChatItemBuilder.AI.WebCard({ title, desc, icon, url }))
  }

  appendAIMsgPrompt ({ content }) {
    this._appendChatItems(ChatItemBuilder.AI.MsgPrompt({ content }))
  }

  // 显示“我”的文本节点
  appendMEText (text) {
    let { chatitems } = this.$MRI.state
    chatitems.push(ChatItemBuilder.ME.Text(text))
    this.$MRI.setState({ chatitems })
  }

  // 显示“我”的 RPC 节点
  appendMERPC (text) {
    let { chatitems } = this.$MRI.state
    chatitems.push(ChatItemBuilder.ME.RPC(text))
    this.$MRI.setState({ chatitems })
  }

  // 显示 loading 节点，并等待耗时操作结束
  // 耗时操作结束后，移除 loading 节点
  loadingUntilThen ({ waitFunc = () => {}, duration = 1000 }) {
    this.appendLoading()

    let f1 = new Promise(resolve => {
      setTimeout(() => {
        resolve('ok')
      }, duration)
    })

    let f2 = waitFunc()

    return new Promise(resolve => {
      Promise.all([f1, f2]).then(res => {
        this.removeLoading()
        resolve(res[1])
      })
    })
  }

  // 显示下方选项
  showChoices ({ choices }) {
    let replies = choices.map(x => ReplyBuilder.choice(x))
    this.$MRI.setState({ replies })
  }

  // 显示 demo 选项
  showDemoChoices ({ demoChoices }) {
    let replies = demoChoices.map(x => ReplyBuilder.demoChoice(x))
    this.$MRI.setState({ replies })
  }

  // 清除下方选项或输入框
  clearReplies () {
    this.$MRI.setState({ replies: [] })
  }

  // 发送选项的时候，展示的动画
  // 选中的节点飞上去
  // 其他节点飞下去消失
  async sendChoiceAnimation (choice) {
    let { replies } = this.$MRI.state
    this.$MRI.setState({ replies })
    replies.forEach(x => {
      x.runAnimation = 'fadedown'
      if (x == choice) {
        x.runAnimation = 'flyup'
      }
    })

    this.$MRI.setState({ replies }) 

    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 300)
    })
  }

  // 显示预设条件选项
  showConditionChoices (conditionNode) {
    console.log('showConditionChoices', conditionNode)
    this.$MRI.setState({ currentCondition: conditionNode })
    // let replies = choices.map(x => ReplyBuilder.choice(x))
    // this.$MRI.setState({ replies })
  }

  clearConditionChoices () {
    this.$MRI.setState({ currentCondition: null })
  }

  // 显示多选选项
  showDemoMChoices ({ demoChoices }) {
    let mReplies = demoChoices.map(x => ReplyBuilder.demoMChoice(x))
    this.$MRI.setState({ mReplies })
  }

  refreshMReplies () {
    let { mReplies } = this.$MRI.state
    console.log('refreshMReplies', mReplies)
    this.$MRI.setState({ mReplies })
  }

  clearMReplies () {
    this.$MRI.setState({ mReplies: [] })
  }

  // 拨轮
  showWheel (cmdNode) {
    this.$MRI.setState({ wheel: cmdNode })
  }

  clearWheel () {
    this.$MRI.setState({ wheel: null })
  }

  // 气泡
  showHealthBubble (cmdNode) {
    this.$MRI.setState({ bubble: cmdNode })
  }

  clearBubble () {
    this.$MRI.setState({ bubble: null })
  }
}