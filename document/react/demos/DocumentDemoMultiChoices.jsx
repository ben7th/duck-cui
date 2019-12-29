import React from 'react'

import DemoBox from './components/DemoBox'
import DemoButton from './components/DemoButton'

import adapter from './adapter'
const { Speaks, Appends, Covers } = adapter
const { Loading, Text } = Speaks
const { MultiChoices } = Covers

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
    await this.cuic.append(new Text({ text: '你休闲时会做什么鸭？', speaker: 'duck' }))

    let items = [
      { label: '看电视', id: 1 },
      { label: '听音乐', id: 2 },
      { label: '看电影', id: 3 },
      { label: '听广播', id: 4 },
      { label: '看书', id: 5 },
      { label: '上网', id: 6 },
      { label: '找人聊天', id: 7 },
    ]

    let cs = new MultiChoices({ items })
    cs.on('send', async x => {
      let { selectedItems } = x
      let str = selectedItems.map(x => x.label).join("、")
      await this.cuic.append(new Text({ text: str, speaker: 'slime' }))
    })
    await this.cuic.cover(cs)
  }
}