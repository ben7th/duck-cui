import React from 'react'

import DemoBox from './components/DemoBox'
import DemoButton from './components/DemoButton'

import adapter from './adapter'
const { Speaks, Appends } = adapter
const { Text } = Speaks

import css from './DocumentDemoBackgroundLayer.scss'
import starBG from './assets/star-bg.jpg'

export default class extends React.Component {
  render () {
    return <DemoBox ref={ $node => this.$node = $node }>
      <DemoButton onClick={ async () => {
        await this.white()
      } }>纯色背景</DemoButton>
      <DemoButton onClick={ async () => {
        await this.blue()
      } }>渐变背景</DemoButton>
      <DemoButton onClick={ async () => {
        await this.image()
      } }>图片背景</DemoButton>
      <DemoButton onClick={ async () => {
        await this.anim()
      } }>动态背景</DemoButton>
    </DemoBox>
  }

  async componentDidMount () {
    this.cuic = this.$node.cuic
    this.cuic.append(new Text({ text: '背景可以更换', speaker: 'duck' }))
    await this.image()
  }

  async white () {
    let content = <div className={ css.bg1 }></div>
    this.cuic.setBackgroundContent({ content })
  }

  async blue () {
    let content = <div className={ css.bg2 }></div>
    this.cuic.setBackgroundContent({ content })
  }

  async image () {
    let content = <div className={ css.bg3 } style={{
      backgroundImage: `url(${starBG})`
    }}></div>
    this.cuic.setBackgroundContent({ content })
  }

  async anim () {
    let content = <div className={ css.bg4 }>
      <span></span>
    </div>
    this.cuic.setBackgroundContent({ content })
  }
}