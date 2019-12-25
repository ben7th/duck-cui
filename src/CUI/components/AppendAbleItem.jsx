import React from 'react'

import css from './AppendAbleItem.scss'

import SibbayAvatar from './SibbayAvatar'

export default class AppendAbleItem extends React.Component {
  render () {
    let x = this.props.data

    if (x.base === 'AppendAble') {
      // let { typeName } = x

      return <div className={ `${css.AppendAble}` }>
        { React.createElement(x.component, x.props) }
      </div>
    }

    if (x.base === 'SpeakAble') {
      let { side, typeName } = x
      
      return <div className={ `${css.SpeakAble} ${css[`side-${side}`]} ${css[`type-${typeName}`]}` }>
        <SibbayAvatar side={ side } />
        <div className={ css.box } onClick={ evt => this.boxClick() }>
          { React.createElement(x.component, { ...x.props, ref: (node) => {
            this.$boxChild = node
          } }) }
        </div>
      </div>
    }
  }

  boxClick () {
    if (this.$boxChild.handleBoxClick) {
      this.$boxChild.handleBoxClick()
    }
  }
}