import React from 'react'

import DemoBox from './components/DemoBox'
import DemoButton from './components/DemoButton'

import adapter from './adapter'
const { Speaks, Covers } = adapter
const { Loading, Text } = Speaks
const { Input } = Covers

import getForecast from '../../api/heweather'

export default class DemoBasic extends React.Component {
  render () {
    return <DemoBox 
      size='large' 
      cuiOptions={{ autoScrollBottom: true }} 
      ref={ $node => {
        if ($node) { this.cuic = $node.cuic }
      } } >
    </DemoBox>
  }

  async componentDidMount () {
    await this.demo()
  }

  async demo () {
    await this.cuic.removeAll()

    await this.loadingAndSpeak({ text: '小鸭可以帮你查询天气' })
    await this.loadingAndSpeak({ text: '输入城市名喔' })

    let input = new Input({ 
      placeholder: '输入城市名',
      maxRows: 3
    }).on('send', async (evt) => {
      console.log(evt)
      let { value } = evt
      let location = value
      await this.cuic.append(new Text({ text: value, speaker: 'slime' }))
      await input.$context.clear()
      await this.queryWeather({ location })
    })

    await this.cuic.cover(input)
  }

  async loadingAndSpeak ({ text }) {
    await this.cuic.append(new Loading({ speaker: 'duck' }))
    await this.cuic.waitFor({ duration: 500 })
    await this.cuic.removeLast({ typeName: 'Loading' })
    await this.cuic.append(new Text({ text, speaker: 'duck' }))
  }

  async queryWeather ({ location }) {
    await this.cuic.append(new Loading({ speaker: 'duck' }))

    let p = Promise.all([ 
      getForecast({ location }),
      this.cuic.waitFor({ duration: 500 })
    ])
    let res = await p
    let data = res[0].HeWeather6
    console.log(data)

    await this.cuic.removeLast({ typeName: 'Loading' })

    if (data[0].status === 'unknown location') {
      await this.cuic.append(new Text({ text: `没有查到 ${location} 这个城市喔`, speaker: 'duck' }))
    }

    if (data[0].basic) {
      let l = data[0].basic.location
      await this.cuic.append(new Text({ text: `查到啦，${l}的天气是：`, speaker: 'duck' }))

      let d = data[0].daily_forecast.map(x => {
        let { date, tmp_min, tmp_max, cond_txt_d, cond_txt_n } = x
        date = date.replace('2019-', '')
        let tmp = `${tmp_min}~${tmp_max}℃`
        return `|${date}|${tmp}|${cond_txt_d}|`
      })

      d.unshift('|-|-|-|')
      d.unshift('|日期|温度|天气|')

      console.log(d)

      await this.cuic.append(new Loading({ speaker: 'duck' }))
      await this.cuic.waitFor({ duration: 500 })
      await this.cuic.removeLast({ typeName: 'Loading' })
      await this.cuic.append(new Text({ 
        markdown: `${d.join('\n')}`, speaker: 'duck' 
      }))
    }
  }
}