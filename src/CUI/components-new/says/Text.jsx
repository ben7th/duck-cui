import SayAble from '../../interfaces/SayAble'
import React from 'react'
import css from './Text.scss'

export default class Text extends SayAble {
  component = class extends React.Component {
    render () {
      return <div className={ css.Text }>
        <span>{ this.props.text }</span>
      </div>
    }
  }

  constructor (props) {
    super()
    this.props = props
  }

  get typeName () {
    return 'Text'
  }
}