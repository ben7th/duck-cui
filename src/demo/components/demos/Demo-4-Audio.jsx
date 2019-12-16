import React from 'react'

import DemoBox from './components/DemoBox'
import DemoButton from './components/DemoButton'
import Audio from '../../../CUI/components-new/says/Audio'
import Text from '../../../CUI/components-new/says/Text'
import Tip from '../../../CUI/components-new/appends/Tip'

export default class extends React.Component {
  render () {
    return <DemoBox ref={ $node => {
      if ($node) { this.cuic = $node.cuic }
    } } >
  </DemoBox>
}

  async componentDidMount () {
    await this.demo()
  }

  async demo () {
    this.cuic.append(new Text({ text: '这是音频喔' }))
    this.cuic.append(new Audio({ }))
  }
}