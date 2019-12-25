import React from 'react'
import css from './CUI.scss'

import CUIBackground from './CUIBackground'

import AppendItems from './components-new/AppendItems'
import CoverItems from './components-new/CoverItems'

import CUIContext from './context/CUIContext'

export default class CUI extends React.Component {
  state = {
    appendItems: [],
    coverItems: [],
  }

  render () {
    return <>
      <CUIBackground />
      <div className={ css.CUI } id='MRI-Scroller'>
        <AppendItems appendItems={ this.state.appendItems } />
        <CoverItems coverItems={ this.state.coverItems } />
      </div>
    </>
  }

  componentDidMount () {
    let context = new CUIContext({ $CUI: this })
    if (this.props.ready) {
      this.props.ready(context)
    }
  }
}