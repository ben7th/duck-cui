import React from 'react'
import css from './BackgroundLayer.scss'

export default class BackgroundLayer extends React.Component {
  render () {
    return <div className={ css.BackgroundLayer }>
      { this.props.children }
    </div>
  }
}