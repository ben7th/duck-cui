import React from 'react'

import DemoBox from './components/DemoBox'
import DemoButton from './components/DemoButton'

import adapter from './adapter'
const { Says } = adapter
const { Audio, Text } = Says

export default class extends React.Component {
  render () {
    return <DemoBox ref={ $node => {
      if ($node) { this.cuic = $node.cuic }
    } } >
  </DemoBox>
}

  async componentDidMount () {
    await this.demo()
  }

  async demo () {
    this.cuic.append(new Text({ text: '这些是不同长度的音频喔' }))
    this.cuic.append(new Audio({ url: 'https://tna-upload.oss-cn-shanghai.aliyuncs.com/vultr-upload/2019-10-16/8bit/music.mp3' }))
    this.cuic.append(new Audio({ url: 'https://tna-upload.oss-cn-shanghai.aliyuncs.com/vultr-upload/2019-10-10/%E8%B6%85%E6%83%91%E6%98%9F%E6%88%98%E8%AE%B0-area1-8bit.mp3' }))
    this.cuic.append(new Audio({ url: 'https://tna-upload.oss-cn-shanghai.aliyuncs.com/vultr-upload/2019-10-10/NieR%20Automata%20OST-The%20Weight%20of%20the%20World%20ENG.mp3'}))
  }
}