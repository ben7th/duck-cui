import CoverAble from '../../interfaces/CoverAble'
import React from 'react'
import css from './Choices.scss'

export default class Choices extends CoverAble {
  component = class extends React.Component {
    render () {
      let _items = this.props.items.map((x, idx) => {
        return <button 
          className={ css.choice } 
          key={idx}
          onClick={ evt => this.callOnSelect(x) }
        >{ x }</button>
      })

      return <div className={ css.Choices }>
        { _items }
      </div>
    }

    async callOnSelect (x) {
      let { _onSelect } = this.props._object
      if (_onSelect) {
        await _onSelect(x)
      }
    }

    async componentDidMount () {
      this.props._object.$context = this
    }
  }

  constructor (props) {
    super()
    this.props = props
    this.props._object = this
  }

  get typeName () {
    return 'Choices'
  }

  onSelect (func) {
    this._onSelect = func
    return this
  }
}