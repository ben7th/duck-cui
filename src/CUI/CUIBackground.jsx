import React from 'react'

import css from './CUIBackground.scss'

export default class CUIBackground extends React.Component {
  render () {
    return <div className={ css.CUIBackground }>
      <div className={ css.bg }></div>
      <div className={ css.topshadow }></div>
      <div className={ css.imgbg }>
        {/* <img src={ bg } /> */}
      </div>
    </div>
  }
}