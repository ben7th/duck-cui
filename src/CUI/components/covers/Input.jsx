import React from 'react'
import css from './Input.scss'

import TextareaAutosize from 'react-textarea-autosize'
import FontIcon from '../../components/icons/FontIcon'

import buildCoverAble from '../../interfaces/buildCoverAble'

export default buildCoverAble({
  typeName: 'Input',
  events: ['send'],
  component: class extends React.Component {
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
                let { value } = this.state
                await this._send({ value })
              }
            }}
          />
        </div>
        <div className={ css.btnarea }>
          <button 
            disabled={ this.state.value.length === 0 }
            className={ css.send }
            onClick={ async evt => {
              let { value } = this.state
              await this._send({ value })
            } }
          ><FontIcon icon='send' /></button>
        </div>
      </div>
    }

    state = {
      value: ''
    }

    async clear () {
      this.setState({ value: '' })
    }
  }
})