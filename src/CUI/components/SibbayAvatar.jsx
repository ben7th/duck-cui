import React from 'react'
import avatar from './assets/sibbay-avatar.png'
import css from './SibbayAvatar.scss'

export default class extends React.Component {
  render () {
    return (
      <img className={ css.sibbayAvatar } src={ avatar } />
    )
  }
}