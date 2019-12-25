import React from 'react'

import DemoBox from './components/DemoBox'
import DemoButton from './components/DemoButton'

import adapter from './adapter'
const { Says, Appends } = adapter
const { Image } = Says
const { Tip } = Appends

import i1 from './assets/duck.png'
import i2 from './assets/slime.jpg'

export default class DemoBasic extends React.Component {
  render () {
    return <DemoBox ref={ $node => {
      if ($node) { this.cuic = $node.cuic }
    } } >
    <DemoButton onClick={ async () => {
      await this.appendRemote()
    } }>Append Image Remote</DemoButton>
    <DemoButton onClick={ async () => {
      await this.appendLocal()
    } }>Append Image Local</DemoButton>
    <DemoButton onClick={ async () => {
      await this.removeLast()
    } }>Remove Last Image</DemoButton>
    <DemoButton onClick={ async () => {
      await this.removeAll()
    } }>Remove All Image</DemoButton>
  </DemoBox>
}

  async componentDidMount () {
    await this.cuic.append(new Tip({ text: '点击右侧按钮来测试' }))
    await this.appendRemote()
    await this.appendLocal()
  }

  async appendRemote () {
    await this.cuic.append(new Image({ src: i1 }))
  }

  async appendLocal () {
    await this.cuic.append(new Image({ src: i2 }).setSide('local'))
  }

  async removeLast () {
    await this.cuic.removeLast({ typeName: 'Image' })
  }

  async removeAll () {
    await this.cuic.removeAll({ typeName: 'Image' })
  }
}