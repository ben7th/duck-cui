import CUI from '../CUI/CUI'

import ChatList from './ChatList'
import Replies from './Replies'
import MReplies from './MReplies'
import ConditionConfirm from './ConditionConfirm'

import Wheel from './Wheel'
import Bubble from './Bubble'

import bg from './assets/cui-sibbay.png'
import css from './MRI.scss'

const BG = () => (
  <div>
  <div className={ css.bg }></div>
  <div className={ css.topshadow }></div>
  <div className={ css.imgbg }>
    <img src={ bg } />
  </div>
  </div>
)

export default class extends React.Component {
  state = {
    chatitems: [],
    replies: [],

    // 多选
    mReplies: [],

    // 当前需要选择的预设条件
    currentCondition: null,

    // 拨轮
    wheel: null,

    // 气泡收取
    bubble: null
  }

  render () {
    return (
      <>
      <BG />
      <div className={ css.mri } id='MRI-Scroller'>
        <ChatList chatitems={ this.state.chatitems } />

        <Replies 
          replies={ this.state.replies }
          $MRI={ this }
        />

        <MReplies
          mReplies={ this.state.mReplies }
          $MRI={ this }
        />

        <ConditionConfirm 
          condition={ this.state.currentCondition }
          $MRI={ this }
        />

        <Wheel 
          wheel={ this.state.wheel }
          $MRI={ this }
        />

        <Bubble 
          bubble={ this.state.bubble }
          $MRI={ this }
        />
      </div>
      </>
    )
  }

  componentWillMount () {
    this.cui = new CUI({ $MRI: this })
  }
}