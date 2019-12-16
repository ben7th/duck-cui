import React from 'react'

import css from './PhoneUI.scss'

export default class PhoneUI extends React.Component {
  render () {
    let size = this.props.size || 'normal'
    return <div className={ `${css.PhoneUI} ${css[size]}` }>
      <div className={ css.phoneinner }>{ this.props.children }</div>
    </div>
  }
}