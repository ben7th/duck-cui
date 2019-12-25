import React from 'react'

import css from './DemoBox.scss'

import PhoneUI from './PhoneUI'
import { CUI } from '../adapter'

export default class DemoBox extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <div className={ css.DemoBox }>
      <div className={ css.phone }>
        <PhoneUI size={ this.props.size }>
          <CUI ready={ context => this.onReady(context) } />
        </PhoneUI>
      </div>
      <div className={ css.control }>
        { this.props.children }
      </div>
    </div>
  }

  onReady (context) {
    this.cuic = context

    let content = <div className={ css.customBg }>
      <div className={ css.bg }></div>
      <div className={ css.topshadow }></div>
      <div className={ css.imgbg }>
        {/* <img src={ bg } /> */}
      </div>
    </div>

    this.cuic.setBackgroundContent({ content })
  }
}

