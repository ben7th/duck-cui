import SayAble from '../../interfaces/SayAble'
import React from 'react'
import css from './Choices.scss'

export default class Choices extends SayAble {
  component = class extends React.Component {
    render () {
      return <div className={ css.Choices }>
        <button className={ css.choice }>选项一</button>
        <button className={ css.choice }>选项二</button>
        <button className={ css.choice }>选项三</button>
      </div>
    }
  }

  constructor (props) {
    super()
    this.props = props
  }

  get name () {
    return 'Choices'
  }
}