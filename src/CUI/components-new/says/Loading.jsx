import React from 'react'
import css from './Loading.scss'
import buildSayAble from '../../interfaces/buildSayAble'

export default buildSayAble({ 
  typeName: 'Loading', 
  component: class extends React.Component {
    render () {
      return <div className={ css.Loading }>
        <div className={ css.c1 }></div>
        <div className={ css.c2 }></div>
        <div className={ css.c3 }></div>
      </div>
    }
  }
})