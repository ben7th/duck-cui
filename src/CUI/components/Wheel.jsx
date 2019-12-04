import React from 'react'
import css from './Wheel.scss'
import classNames from 'classnames/bind'

export default class extends React.Component {
  render () {
    let { wheel } = this.props

    let className = classNames.bind(css)({
      wheel: true,
      empty: !wheel
    })

    return <div className={ className }>
      <div className={ css.wheelbox }>
        <div className={ css.wel }>
          <div className={ css.wheader }></div>
          <div className={ css.wbody }>数据录入拨轮</div>
          <div className={ css.wfooter }></div>
        </div>
        <div className={ css.btn }
          onClick={ evt => this.send() }
        >确定</div>
      </div>
    </div>
  }

  async send () {
    let { $MRI } = this.props
    await $MRI.cui.player.sendWheel()
  }
}