import React from 'react'
import css from './Bubble.scss'
import classNames from 'classnames/bind'

export default class extends React.Component {
  render () {
    let { bubble } = this.props

    let className = classNames.bind(css)({
      bubble: true,
      empty: !bubble
    })

    return <div className={ className }>
      <div className={ css.wheelbox }>
        <div className={ css.area }>
          这里是收气泡区域
        </div>
        <div className={ css.continue }
          onClick={ evt => this.send() }
        >继续</div>
      </div>
    </div>
  }

  async send () {
    let { $MRI } = this.props
    await $MRI.cui.player.sendBubble()
  }
}