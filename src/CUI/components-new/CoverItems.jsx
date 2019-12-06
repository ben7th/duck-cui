import React from 'react'

import css from './CoverItems.scss'

export default class CoverItems extends React.Component {
  render () {
    let children = this.props.items.map((x, idx) => {
      if (x.base === 'CoverAble') {
        return <div className={ css.AppendAble } key={ idx }>
          { React.createElement(x.component, x.props) }
        </div>
      }
    })

    return <div className={ css.CoverItems }>
      { children }
    </div>
  }
}