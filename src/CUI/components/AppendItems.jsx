import React from 'react'
import css from './AppendItems.scss'
import AppendAbleItem from './AppendAbleItem'

export default ({ speakers, appendItems }) => {
  let children = appendItems.map((x, idx) => {
    return <AppendAbleItem 
      speakers={ speakers } 
      data={ x } key={ idx } 
    />
  })

  return (
    <div className={ css.AppendItems }>
      { children }
      <div className={ css._anchor } id='_reply_anchor'></div>
    </div>
  )
}