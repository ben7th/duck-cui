import React from 'react'
import css from './Replies.scss'
import Reply from './Reply'
import classNames from 'classnames/bind'

export default ({ replies, $MRI }) => {
  let children = replies.map((x, idx) => {
    let _t = Reply[x.type]
    return <_t key={ idx } choice={ x } $MRI={ $MRI } />
  })

  let className = classNames.bind(css)({
    replies: true,
    empty: children.length === 0
  })

  return (
    <div className={ className }>
      { children }
    </div>
  )
}