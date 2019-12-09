import SayAble from '../../interfaces/SayAble'
import React from 'react'
import css from './Image.scss'

export default class Image extends SayAble {
  component = class extends React.Component {
    render () {
      return <div className={ css.Image }>
        <img src={ this.props.src } />
      </div>
    }
  }

  constructor (props) {
    super()
    this.props = props
  }

  get typeName () {
    return 'Image'
  }
}