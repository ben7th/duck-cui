import React from 'react'
import css from './ChatList.scss'
import ChatItem from './ChatItem'

import SibbayAvatar from '../components/SibbayAvatar'

export default ({ chatitems }) => {
  let children = chatitems.map((x, idx) => {
    if (x.base === 'AppendAble') {
      return <div className={ css.AppendAble } key={ idx }>
        { React.createElement(x.component, x.props) }
      </div>
    }

    if (x.base === 'SayAble') {
      return <div className={ `${css.SayAble} ${css[`side-${x.side}`]}` } key={ idx }>
        <SibbayAvatar />
        <div className={ css.box }>
          { React.createElement(x.component, x.props) }
        </div>
      </div>
    }

    let _t = ChatItem[x.from][x.type]
    return <_t key={ idx } data={ x } />
  })

  return (
    <div className={ css.chatlist }>
      {children}
      <div className={ css._anchor } id='_reply_anchor'></div>
    </div>
  )
}