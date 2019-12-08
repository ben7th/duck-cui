import React from 'react'

import css from './Button.scss'

export default class Button extends React.Component {
  render () {
    return <button className={ css.Button } { ...this.props }>{ this.props.children }</button>
  }

  componentDidMount () {
    console.log(this.props)
  }
}