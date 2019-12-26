import React from 'react'

import css from './AppendAbleItem.scss'

import SpeakerAvatar from './SpeakerAvatar'

export default class AppendAbleItem extends React.Component {
  render () {
    let x = this.props.data

    if (x.base === 'AppendAble') {
      // let { typeName } = x

      return <div className={ `${css.AppendAble}` }>
        { React.createElement(x.component, x.props) }
      </div>
    }

    if (x.base === 'SpeakAble') {
      let { typeName } = x
      let speakers = this.props.speakers
      let speaker = speakers[x.speaker]
      
      let side = speaker ? speaker.side : 'left'
      let avatarURL = speaker ? speaker.avatarURL : null

      let className = [
        css.SpeakAble,
        css[`side-${side}`],
        css[`type-${typeName}`]
      ].join(' ')
      
      return <div className={ className }>
        <SpeakerAvatar side={ side } avatarURL={ avatarURL } />
        <div className={ css.box } onClick={ evt => this.boxClick() }>
          { React.createElement(x.component, { ...x.props, ref: (node) => {
            this.$boxChild = node
          } }) }
        </div>
      </div>
    }
  }

  boxClick () {
    if (this.$boxChild.handleBoxClick) {
      this.$boxChild.handleBoxClick()
    }
  }
}