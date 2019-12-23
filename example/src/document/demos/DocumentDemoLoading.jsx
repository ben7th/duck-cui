import React from 'react'

import DemoBox from './components/DemoBox'
import DemoButton from './components/DemoButton'

import adapter from './adapter'
const { Says, Appends } = adapter
const { Loading } = Says
const { Tip } = Appends

export default class DemoBasic extends React.Component {
  render () {
    return <DemoBox ref={ $node => {
      if ($node) { this.cuic = $node.cuic }
    } } >
    <DemoButton onClick={ async () => {
      await this.appendLoading()
    } }>Append Loading</DemoButton>
    <DemoButton onClick={ async () => {
      await this.removeLast()
    } }>Remove Last Loading</DemoButton>
    <DemoButton onClick={ async () => {
      await this.removeAll()
    } }>Remove All Loading</DemoButton>
  </DemoBox>
}

  async componentDidMount () {
    await this.cuic.append(new Tip({ text: '点击右侧按钮来测试' }))
    await this.appendLoading()
  }

  async appendLoading () {
    await this.cuic.append(new Loading())
  }

  async removeLast () {
    await this.cuic.removeLast({ typeName: 'Loading' })
  }

  async removeAll () {
    await this.cuic.removeAll({ typeName: 'Loading' })
  }
}