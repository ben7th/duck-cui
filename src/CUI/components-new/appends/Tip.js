import React from 'react'
import css from './Tip.scss'
import buildAppendAble from '../../interfaces/buildAppendAble'

export default buildAppendAble({ 
  typeName: 'Tip', 
  component: class extends React.Component {
    render () {
      return <div className={ css.Tip }>
        <span>{ this.props.text }</span>
      </div>
    }
  } 
})
