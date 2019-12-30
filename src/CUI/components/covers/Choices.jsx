import React from 'react'
import css from './Choices.scss'
import buildCoverAble from '../../interfaces/buildCoverAble'

export default buildCoverAble({
  typeName: 'Choices',
  events: ['select'],
  component: class extends React.Component {
    render () {
      let _items = this.props.items.map((x, idx) => {
        let { label } = x

        return <button 
          className={ css.choice } 
          key={ idx }
          onClick={ evt => this._select(x) }
        >{ label }</button>
      })

      return <div className={ css.Choices }>
        { _items }
      </div>
    }
  }
})