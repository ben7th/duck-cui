import React from 'react'

import DemoBox from './components/DemoBox'
import DemoButton from './components/DemoButton'
import Choices from '../../../CUI/components-new/covers/Choices'
import Text from '../../../CUI/components-new/says/Text'

export default class extends React.Component {
  render () {
    return <DemoBox ref={ $node => {
        if ($node) { this.cuic = $node.cuic }
      } } >
      {/* <DemoButton onClick={ async () => {
        await this.demo()
      } }>再走一个</DemoButton> */}
    </DemoBox>
  }

  async componentDidMount () {
    await this.demo()
  }

  async demo () {
    await this.cuic.append(new Text({ text: '你喜欢什么水果鸭？' }))

    let cs = new Choices({ items: [
      '西瓜', '苹果', '橘子', '樱桃', '芒果', '哈密瓜', '猕猴桃'
    ] })
    cs.onSelect(async x => {
      await this.cuic.append(new Text({ text: x }).setSide('local'))
    })
    await this.cuic.cover(cs)
  }
}