import React from 'react'

import DemoBox from './components/DemoBox'
import DemoButton from './components/DemoButton'

import adapter from './adapter'
const { Says, Appends } = adapter
const { Text } = Says
const { Tip } = Appends

export default class DemoBasic extends React.Component {
  render () {
    return <DemoBox ref={ $node => {
      if ($node) { this.cuic = $node.cuic }
    } } >
    <DemoButton onClick={ async () => {
      await this.appendRemote()
    } }>Append Text Remote</DemoButton>
    <DemoButton onClick={ async () => {
      await this.appendLocal()
    } }>Append Text Local</DemoButton>
    <DemoButton onClick={ async () => {
      await this.removeLast()
    } }>Remove Last Text</DemoButton>
    <DemoButton onClick={ async () => {
      await this.removeAll()
    } }>Remove All Text</DemoButton>
  </DemoBox>
}

  async componentDidMount () {
    await this.cuic.append(new Tip({ text: '点击右侧按钮来测试' }))
    await this.appendRemote()
    await this.appendLocal()
  }

  async appendRemote () {
    await this.cuic.append(new Text({ text: 'hello' }))
  }

  async appendLocal () {
    await this.cuic.append(new Text({ text: '你好' }).setSide('local'))
  }

  async removeLast () {
    await this.cuic.removeLast({ typeName: 'Text' })
  }

  async removeAll () {
    await this.cuic.removeAll({ typeName: 'Text' })
  }
}