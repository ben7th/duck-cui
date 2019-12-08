import React from 'react'

import css from './demos.scss'

import PhoneUI from './PhoneUI'
import Button from './Button'
import CUI from '../../CUI/CUI'

import Timeout from 'await-timeout'
import Tip from '../../CUI/components-new/appends/Tip'
import Text from '../../CUI/components-new/says/Text'

class DemoBox extends React.Component {
  render () {
    return <div className={ css.demobox }>
      <div className={ css.phone }>
        <PhoneUI>
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

export class Demo0 extends React.Component {
  render () {
    return <DemoBox ref={ $node => {
        if ($node) { this.cuic = $node.cuic }
      } } >
      <Button onClick={ async () => {
        await this.demo()
      } }>再来一次</Button>
    </DemoBox>
  }

  async componentDidMount () {
    await this.demo()
  }

  async demo () {
    await this.cuic.clearAllNodes()

    await this.loadingAndSay({ text: '你好，我是小黄鸭' })
    await this.loadingAndSay({ text: '当你有问题想不明白时，可以和我讲讲' })
    await this.loadingAndSay({ text: '虽然我回答不了你的问题，但是讲出来可能有助于你自己想清楚' })
    await this.loadingAndSay({ text: '多和朋友沟通，不要总是自己工作鸭' })

    let tip = new Tip({ text: '演示完啦，想再看就点“再来一次”' })
    await this.cuic.append(tip)
  }

  async loadingAndSay ({ text }) {
    this.cuic.appendLoading()
    await Timeout.set(1000)
    this.cuic.removeLoading()

    let t = new Text({ text }).setSide('remote')
    await this.cuic.append(t)
  }

  // async loadingAndSayMe ({ text }) {
  //   this.cuic.appendLoading()
  //   await Timeout.set(1000)
  //   this.cuic.removeLoading()

  //   let t = new Text({ text }).setSide('local')
  //   await this.cuic.append(t)
  // }
}

export class DemoLoading extends React.Component {
  render () {
    return <DemoBox ref={ $node => {
        if ($node) { this.cuic = $node.cuic }
      } } >
      <Button onClick={ async () => {
        await this.appendLoading()
      } }>Append Loading</Button>
      <Button onClick={ async () => {
        await this.removeLast()
      } }>Remove Last Loading</Button>
      <Button onClick={ async () => {
        await this.removeAll()
      } }>Remove All Loading</Button>
    </DemoBox>
  }

  async componentDidMount () {
    await this.cuic.appendLoading()
  }

  async appendLoading () {
    await this.cuic.appendLoading()
  }

  async removeLast () {
    await this.cuic.removeLastNode()
  }

  async removeAll () {
    await this.cuic.removeLoading()
  }
}