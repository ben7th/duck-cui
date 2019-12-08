import React from 'react'
import avatar from './assets/duck-avatar.png'
import css from './SibbayAvatar.scss'

export default class extends React.Component {
  render () {
    return (
      <img className={ css.sibbayAvatar } src={ avatar } />
    )
  }
}