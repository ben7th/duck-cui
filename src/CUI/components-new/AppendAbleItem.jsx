import React from 'react'

import css from './AppendAbleItem.scss'

import SibbayAvatar from './SibbayAvatar'

export default class AppendAbleItem extends React.Component {
  render () {
    let x = this.props.data

    if (x.base === 'AppendAble') {
      return <div className={ css.AppendAble }>
        { React.createElement(x.component, x.props) }
      </div>
    }

    if (x.base === 'SayAble') {
      return <div className={ `${css.SayAble} ${css[`side-${x.side}`]}` }>
        <SibbayAvatar />
        <div className={ css.box }>
          { React.createElement(x.component, x.props) }
        </div>
      </div>
    }
  }
}