import React from 'react'
import css from './ChatList.scss'
import ChatItem from './ChatItem'

export default ({ chatitems }) => {
  let children = chatitems.map((x, idx) => {
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