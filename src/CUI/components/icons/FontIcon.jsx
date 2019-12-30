import React from 'react'

import css from './iconfont.scss'

export default class Icon extends React.Component {
  render () {
    let { icon, className } = this.props
    let klass = `icon-${ icon }`
    let _className = [
      css.iconfont,
      css[klass],
      className
    ].join(' ')

    return <span className={ _className }></span>
  }
}