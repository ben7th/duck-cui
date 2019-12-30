import React from 'react'
import css from './MultiChoices.scss'
import buildCoverAble from '../../interfaces/buildCoverAble'
import FontIcon from '../../components/icons/FontIcon'
import _array from 'lodash/array'
import ClassNames from 'classnames/bind'

export default buildCoverAble({
  typeName: 'MultiChoices',
  events: ['send'],
  component: class extends React.Component {
    render () {
      let { selectedFlags, selectedItems } = this.state

      let _items = this.props.items.map((x, idx) => {
        let { label } = x
        let className = ClassNames.bind(css)({
          choice: true,
          selected: selectedFlags[idx] === true
        })

        return <button 
          className={ className } 
          key={ idx }
          onClick={ evt => this._toggleSelect(x, idx) }
        >{ label }</button>
      })

      return <div className={ css.MultiChoices }>
        <div className={ css.items }>
          { _items }
        </div>
        <div className={ css.sendbtn }>
          <button 
            className={ css.send }
            disabled={ selectedItems.length === 0 }
            onClick={ async evt => {
              let { selectedItems } = this.state
              await this._send({ selectedItems }) 
            } }
          ><FontIcon icon='send' /></button>
        </div>
      </div>
    }

    state = {
      selectedFlags: [],
      selectedIndexes: [],
      selectedItems: []
    }

    componentDidMount () {
      let { items } = this.props
      let selectedFlags = _array.fill(Array(items.length), false)
      this.setState({ selectedFlags })
    }

    async _toggleSelect (item, idx) {
      let { items } = this.props
      let { selectedFlags } = this.state
      selectedFlags[idx] = !selectedFlags[idx] // 取反

      let selectedIndexes = []
      let selectedItems = []
      selectedFlags.forEach((f, idx) => {
        if (f) { 
          selectedIndexes.push(idx)
          selectedItems.push(items[idx]) 
        }
      })

      this.setState({ selectedFlags, selectedIndexes, selectedItems })
    }
  }
})