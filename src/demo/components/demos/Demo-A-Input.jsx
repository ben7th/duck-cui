import React from 'react'

import DemoBox from './components/DemoBox'
import DemoButton from './components/DemoButton'
import Input from '../../../CUI/components-new/covers/Input'
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
    await this.cuic.append(new Text({ text: '说点啥呗~' }))

    let input = new Input({ 
      placeholder: '请输入……',
      maxRows: 3
    })
    .on('send', async (evt) => {
      let { value } = evt
      await this.cuic.append(new Text({ text: value }).setSide('local'))
      await input.$context.clear()
      await this.cuic.append(new Text({ text: '好鸭' }))
    })

    await this.cuic.cover(input)
  }
}