import React from 'react'

import DemoBox from './components/DemoBox'
import DemoButton from './components/DemoButton'
import Text from '../../../CUI/components-new/says/Text'
import Picker from '../../../CUI/components-new/covers/Picker'

const d1data = [
  [
    { label: '矿泉水/纯净水', value: '1' },
    { label: '可乐', value: '2' },
    { label: '柠檬茶', value: '3' },
    { label: '咖啡', value: '4', selected: true},
    { label: '茶叶', value: '5' },
    { label: '果汁', value: '6' },
    { label: '酒', value: '7' },
  ]
]

const d2data =[
  [
    { label: '鼠🐭', value: '1' },
    { label: '牛🐂', value: '2' },
    { label: '虎🐯', value: '3' },
    { label: '兔🐰', value: '4' },
    { label: '龙🐲', value: '5' },
    { label: '蛇🐍', value: '6' },
    { label: '马🐴', value: '7' },
    { label: '羊🐑', value: '8' },
    { label: '猴🐵', value: '9' },
    { label: '鸡🐔', value: '10' },
    { label: '狗🐶', value: '11' },
    { label: '猪🐷', value: '12' },
  ],
  [
    { label: 'A 型', value: 'A' },
    { label: 'B 型', value: 'B' },
    { label: 'O 型', value: 'O' },
    { label: 'AB 型', value: 'AB' },
    { label: '不知道鸭', value: 'unknown' },
  ]
]

const d3data =[
  [
    { label: '苹果', value: '1' },
    { label: '香蕉', value: '2' },
    { label: '荔枝', value: '3', selected: true},
    { label: '石榴', value: '4' },
    { label: '西瓜', value: '5' },
  ],
  [
    { label: '芒果', value: '6' },
    { label: '猕猴桃', value: '7' },
    { label: '油桃', value: '8', selected: true},
    { label: '雪梨', value: '9' },
    { label: '火龙果', value: '10' },
  ],
  [
    { label: '巧克力', value: '11' },
    { label: '冰淇淋', value: '12', selected: true},
    { label: '蓝莓酱', value: '13' },
    { label: '淡奶油', value: '14' },
    { label: '绿豆沙', value: '15' },
  ]
]

export default class extends React.Component {
  render () {
    return <DemoBox size='large' ref={ $node => {
        if ($node) { this.cuic = $node.cuic }
      } } >
      <DemoButton onClick={ async () => {
        await this.d1()
      } }>一列</DemoButton>
      <DemoButton onClick={ async () => {
        await this.d2()
      } }>两列</DemoButton>
      <DemoButton onClick={ async () => {
        await this.d3()
      } }>三列</DemoButton>
    </DemoBox>
  }

  async componentDidMount () {
    await this.d1()
  }

  async _reset () {
    await this.cuic.removeAll()
    await this.cuic.removeCoverAble({ typeName: 'Picker' })
  }

  async d1 () {
    await this._reset()
    await this.cuic.append(new Text({ text: '你喜欢哪种饮料鸭？' }))

    let picker = new Picker({ data: d1data })
    picker.on('send', data => {
      console.log(data)
    })
    await this.cuic.cover(picker)
  }

  async d2 () {
    await this._reset()

    await this.cuic.append(new Text({ text: '你是什么生肖？什么血型？' }))

    let picker = new Picker({ data: d2data })
    picker.on('send', data => {
      console.log(data)
    })
    await this.cuic.cover(picker)
  }

  async d3 () {
    await this._reset()

    await this.cuic.append(new Text({ text: '请选择你的甜点套餐搭配' }))

    let picker = new Picker({ data: d3data })
    picker.on('send', data => {
      console.log(data)
    })
    await this.cuic.cover(picker)
  }
}