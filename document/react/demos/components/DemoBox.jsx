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
          <CUI ready={ context => this.cuic = context } />
        </PhoneUI>
      </div>
      <div className={ css.control }>
        { this.props.children }
      </div>
    </div>
  }
}