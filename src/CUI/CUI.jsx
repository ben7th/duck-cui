import React from 'react'
import css from './CUI.scss'

import CUIBackground from './CUIBackground'

// 需要重构
import ChatList from './components/ChatList'
import Replies from './components/Replies'
import MReplies from './components/MReplies'
import ConditionConfirm from './components/ConditionConfirm'
import Wheel from './components/Wheel'
import Bubble from './components/Bubble'

// 需要重构
import CUIC from '../CUIC/CUIC'

export default class CUI extends React.Component {
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
    return <>
      <CUIBackground />
      <div className={ css.CUI } id='MRI-Scroller'>
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
  }

  componentWillMount () {
    this.cui = new CUIC({ $MRI: this })
  }
}