import React from 'react'

import css from './DemoBox.scss'

import PhoneUI from './PhoneUI'
import CUI from '../../../../../../src/CUI/CUI'

export default class DemoBox extends React.Component {
  render () {
    return <div className={ css.DemoBox }>
      <div className={ css.phone }>
        <PhoneUI size={ this.props.size }>
          <CUI ref={ $node => {
            if ($node) { this.cuic = $node.cuic }
          } } />
        </PhoneUI>
      </div>
      <div className={ css.control }>
        { this.props.children }
      </div>
    </div>
  }
}