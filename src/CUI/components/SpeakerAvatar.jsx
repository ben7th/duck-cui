import React from 'react'
import css from './SpeakerAvatar.scss'

export default class extends React.Component {
  render () {
    let { side, avatarURL } = this.props

    let _aimg = avatarURL ? 
      <img className={ css.avatar } src={ avatarURL } /> : 
      <div className={ `${ css.avatar } ${ css.noSpeaker }` }></div>

    let className = [
      css.avatarBox,
      css[`side-${side}`]
    ].join(' ')

    return <div className={ className }>
      { _aimg }
    </div>
  }
}