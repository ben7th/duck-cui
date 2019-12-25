import React from 'react'

import css from './CoverItems.scss'

export default class CoverItems extends React.Component {
  render () {
    let _children = this.props.coverItems.map((x, idx) => {
      if (x.base === 'CoverAble') {
        return <div className={ css.CoverAble } key={ idx }>
          { React.createElement(x.component, { ...x.props, ref: (node) => {
            x.$context = node
          }}) }
        </div>
      }
    })

    return _children
  }
}