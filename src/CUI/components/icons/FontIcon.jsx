import React from 'react'

import css from './iconfont.scss'

export default class Icon extends React.Component {
  render () {
    let { icon } = this.props
    let klass = `icon-${ icon }`

    return <span className={ `${ css.iconfont } ${ css[klass] }` }></span>
  }
}