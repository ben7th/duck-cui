import React from 'react'

import css from './PhoneUI.scss'

export default class PhoneUI extends React.Component {
  render () {
    return <div className={ css.PhoneUI }>
      <div className={ css.phoneinner }>{ this.props.children }</div>
    </div>
  }
}