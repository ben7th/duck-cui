import React from 'react'
import css from './ChatBubble.scss'

import classNames from 'classnames/bind'

export default ({ children, from, type }) => {
  let className = classNames.bind(css)({
    chatbubble: true,
    [`from-${ from }`]: true,
    [`type-${ type }`]: true
  })

  let _c = type === 'Loading' ? (
    <>
    <div className={ css.c1 }></div>
    <div className={ css.c2 }></div>
    <div className={ css.c3 }></div>
    </>
  ) : children

  return <div className={ className }>{ _c }</div>
}