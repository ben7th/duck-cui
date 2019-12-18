import React from 'react'
import css from './Choices.scss'
import buildCoverAble from '../../interfaces/buildCoverAble'

export default buildCoverAble({
  typeName: 'Choices',
  component: class extends React.Component {
    render () {
      let _items = this.props.items.map((x, idx) => {
        return <button 
          className={ css.choice } 
          key={idx}
          onClick={ evt => this._select(x) }
        >{ x }</button>
      })

      return <div className={ css.Choices }>
        { _items }
      </div>
    }

    async _select (x) {
      this.props._object.handle('select', x)
    }
  }
})