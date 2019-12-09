import SayAble from '../../interfaces/SayAble'
import React from 'react'
import css from './Loading.scss'

export default class Loading extends SayAble {
  component = class extends React.Component {
    render () {
      return <div className={ css.Loading }>
        <div className={ css.c1 }></div>
        <div className={ css.c2 }></div>
        <div className={ css.c3 }></div>
      </div>
    }
  }

  constructor (props) {
    super()
    this.props = props
  }

  get typeName () {
    return 'Loading'
  }
}