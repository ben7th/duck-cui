import React from 'react'

import DemoBox from './components/DemoBox'
import DemoButton from './components/DemoButton'
import Text from '../../../CUI/components-new/says/Text'
import Tip from '../../../CUI/components-new/appends/Tip'

export default class DemoBasic extends React.Component {
  render () {
    return <DemoBox ref={ $node => {
      if ($node) { this.cuic = $node.cuic }
    } } >
    <DemoButton onClick={ async () => {
      await this.appendRemote()
    } }>Markdown Text Remote</DemoButton>
    <DemoButton onClick={ async () => {
      await this.appendLocal()
    } }>Markdown Text Local</DemoButton>
    <DemoButton onClick={ async () => {
      await this.removeLast()
    } }>Remove Last Text</DemoButton>
    <DemoButton onClick={ async () => {
      await this.removeAll()
    } }>Remove All Text</DemoButton>

    <DemoButton onClick={ async () => {
      await this.mdTitle()
    } }>多级标题</DemoButton>
    <DemoButton onClick={ async () => {
      await this.mdTextStyle()
    } }>文字修饰</DemoButton>
    <DemoButton onClick={ async () => {
      await this.mdQuote()
    } }>引用</DemoButton>
    <DemoButton onClick={ async () => {
      await this.mdUList()
    } }>无序列表</DemoButton>
    <DemoButton onClick={ async () => {
      await this.mdOList()
    } }>有序列表</DemoButton>
    <DemoButton onClick={ async () => {
      await this.mdTable()
    } }>表格</DemoButton>
  </DemoBox>
}

  async componentDidMount () {
    await this.cuic.append(new Tip({ text: '点击右侧按钮来测试' }))
    await this.appendRemote()
    await this.appendLocal()

    await this.mdTitle()
    await this.mdTextStyle()
    await this.mdQuote()
    await this.mdUList()
    await this.mdOList()
    await this.mdTable()
  }

  async appendRemote () {
    let markdown = [
      '# 啊啊啊~'
    ].join('\n')

    await this.cuic.append(new Text({ markdown }))
  }

  async appendLocal () {
    let markdown = [
      '## *不错喔*  '
    ].join('\n')

    await this.cuic.append(new Text({ markdown }).setSide('local'))
  }

  async mdTitle () {
    await this.cuic.append(new Text({ markdown: [
      '# title 1',
      '## title 2',
      '### title 3',
      '#### title 4',
      '##### title 5',
      '###### title 6',
    ].join('\n') }))
  }

  async mdTextStyle () {
    await this.cuic.append(new Text({ markdown: [
      '**粗体**  ',
      '*斜体*  ',
      '***粗斜体***  ',
      '~~删除线~~  ',
    ].join('\n') }))
  }

  async mdQuote () {
    await this.cuic.append(new Text({ markdown: [
      '> 引用  ',
      '> 引用  ',
      '>> 引用引用  ',
      '>>> 引用引用引用  ',
    ].join('\n') }))
  }

  async mdUList () {
    await this.cuic.append(new Text({ markdown: [
      '- 香蕉',
      '- 芒果',
      '- 橘子',
      '- 甘蔗',
      '   - 柚子',
      '   - 西瓜'
    ].join('\n') }))
  }
  
  async mdOList () {
    await this.cuic.append(new Text({ markdown: [
      '1. 香蕉',
      '2. 芒果',
      '3. 橘子',
      '4. 甘蔗',
      '   1. 柚子',
      '   2. 西瓜'
    ].join('\n') }))
  }

  async mdTable () {
    await this.cuic.append(new Text({ markdown: [
      '|时间|地点|',
      '|-|-|',
      '|五月|北京|',
      '|十月|杭州|',
      '|十一月|广州|',
    ].join('\n') }))
  }

  async removeLast () {
    await this.cuic.removeLast({ typeName: 'Text' })
  }

  async removeAll () {
    await this.cuic.removeAll({ typeName: 'Text' })
  }
}