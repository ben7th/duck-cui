import React from 'react'

import DemoBox from './components/DemoBox'
import DemoButton from './components/DemoButton'

import adapter from './adapter'
const { Appends } = adapter
const { Tip } = Appends

export default class DemoBasic extends React.Component {
  render () {
    return <DemoBox ref={ $node => {
      if ($node) { this.cuic = $node.cuic }
    } } >
  </DemoBox>
}

  async componentDidMount () {
    await this.cuic.append(new Tip({ text: '1' }))
    await this.cuic.append(new Tip({ text: '11' }))
    await this.cuic.append(new Tip({ text: '21' }))
    await this.cuic.append(new Tip({ text: '1211' }))
    await this.cuic.append(new Tip({ text: '111221' }))
    await this.cuic.append(new Tip({ text: '312211' }))
    await this.cuic.append(new Tip({ text: '13112221' }))
    await this.cuic.append(new Tip({ text: '1113213211' }))
    await this.cuic.append(new Tip({ text: '31131211131221' }))
  }
}