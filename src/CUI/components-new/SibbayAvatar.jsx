import React from 'react'
import avatarRemote from './assets/duck-avatar.png'
import avatarLocal from './assets/slime-avatar.jpg'
import css from './SibbayAvatar.scss'

export default class extends React.Component {
  render () {
    let { side } = this.props
    let avatar = side === 'remote' ? avatarRemote : avatarLocal

    return (
      <img className={ `${css.sibbayAvatar} ${css[`side-${side}`]}` } src={ avatar } />
    )
  }
}