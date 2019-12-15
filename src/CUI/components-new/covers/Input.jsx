import CoverAble from '../../interfaces/CoverAble'
import React from 'react'
import css from './Input.scss'

import TextareaAutosize from 'react-textarea-autosize'
import FontIcon from '../../components-new/icons/FontIcon'

export default class Input extends CoverAble {
  component = class extends React.Component {
    render () {
      let { placeholder, maxRows } = this.props

      return <div className={ css.Input }>
        <div className={ css.inputarea }>
          <TextareaAutosize
            placeholder={ placeholder }
            maxRows={ maxRows }
            value={ this.state.value }
            onChange={ evt => this.setState({ value: evt.target.value }) }
            onKeyDown={ async evt => {
              if (evt.keyCode === 13 && (evt.ctrlKey || evt.metaKey)) {
                await this.callOnSend()
              }
            }}
          />
        </div>
        <div className={ css.btnarea }>
          <button 
            disabled={ this.state.value.length === 0 }
            className={ css.send }
            onClick={ async evt => await this.callOnSend() }
          ><FontIcon icon='send' /></button>
        </div>
      </div>
    }

    state = {
      value: ''
    }

    async callOnSend () {
      let { _onSend } = this.props._object
      if (_onSend) {
        await _onSend({ value: this.state.value })
      }
    }

    async componentDidMount () {
      this.props._object.$context = this
    }

    async clear () {
      this.setState({ value: '' })
    }
  }

  constructor (props) {
    super()
    this.props = props
    this.props._object = this
  }

  get typeName () {
    return 'Input'
  }

  onSend (func) {
    this._onSend = func
    return this
  }
}