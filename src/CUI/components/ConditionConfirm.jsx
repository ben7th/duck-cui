import React from 'react'
import css from './ConditionConfirm.scss'
import classNames from 'classnames/bind'

export default class extends React.Component {
  yes () {
    let { $MRI, condition } = this.props
    $MRI.cui.player.sendCondition({ condition, confirm: true })
  }

  no () {
    let { $MRI, condition } = this.props
    $MRI.cui.player.sendCondition({ condition, confirm: false })
  }

  render () {
    let { condition } = this.props

    let className = classNames.bind(css)({
      cc: true,
      empty: !condition
    })

    return condition ? <div className={ className }>
      <div className={ css.desc }>{ condition.desc }</div>
      <div className={ css.sels }>
        <div className={ css.sel } onClick={ evt => this.yes() }>是</div>
        <div className={ css.sel } onClick={ evt => this.no() }>否</div>
      </div>
    </div> : <div className={ className }></div>
  }
}