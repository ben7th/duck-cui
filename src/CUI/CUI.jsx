import React from 'react'
import css from './CUI.scss'

import BackgroundLayer from './components/BackgroundLayer'
import AppendItems from './components/AppendItems'
import CoverItems from './components/CoverItems'

import CUIContext from './context/CUIContext'

export default class CUI extends React.Component {
  state = {
    _backgroundLayerContent: null,
    appendItems: [],
    coverItems: [],
  }

  render () {
    return <>
      <div className={ css.CUI } id='MRI-Scroller'>
        <BackgroundLayer>{ this.state._backgroundLayerContent }</BackgroundLayer>
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