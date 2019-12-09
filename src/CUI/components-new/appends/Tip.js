import AppendAble from '../../interfaces/AppendAble'
import React from 'react'
import css from './Tip.scss'

export default class Tip extends AppendAble {
  component = class extends React.Component {
    render () {
      return <div className={ css.Tip }>
        <span>{ this.props.text }</span>
      </div>
    }
  }

  constructor (props) {
    super()
    this.props = props
  }

  get typeName () {
    return 'Tip'
  }
}