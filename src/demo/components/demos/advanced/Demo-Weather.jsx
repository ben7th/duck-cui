import React from 'react'

import DemoBox from '../components/DemoBox'
import DemoButton from '../components/DemoButton'
import Loading from '../../../../CUI/components-new/says/Loading'
import Text from '../../../../CUI/components-new/says/Text'
import Input from '../../../../CUI/components-new/covers/Input'

import getForecast from '../../../api/heweather'

export default class DemoBasic extends React.Component {
  render () {
    return <DemoBox size='large' ref={ $node => {
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
    await this.cuic.removeAll()

    await this.loadingAndSay({ text: '小鸭可以帮你查询天气' })
    await this.loadingAndSay({ text: '输入城市名喔' })

    let input = new Input({ 
      placeholder: '输入城市名',
      maxRows: 3
    }).on('send', async (evt) => {
      console.log(evt)
      let { value } = evt
      let location = value
      await this.cuic.append(new Text({ text: value }).setSide('local'))
      await input.$context.clear()
      await this.cuic._scrollToBottom()
      await this.queryWeather({ location })
    })

    await this.cuic.cover(input)
  }

  async loadingAndSay ({ text }) {
    await this.cuic.append(new Loading())
    await this.cuic.waitFor({ duration: 500 })
    await this.cuic.removeLast({ typeName: 'Loading' })
    await this.cuic.append(new Text({ text }).setSide('remote'))
    await this.cuic._scrollToBottom()
  }

  async queryWeather ({ location }) {
    await this.cuic.append(new Loading())
    await this.cuic._scrollToBottom()

    let p = Promise.all([ 
      getForecast({ location }),
      this.cuic.waitFor({ duration: 500 })
    ])
    let res = await p
    let data = res[0].HeWeather6
    console.log(data)

    await this.cuic.removeLast({ typeName: 'Loading' })

    if (data[0].status === 'unknown location') {
      await this.cuic.append(new Text({ text: `没有查到 ${location} 这个城市喔` }).setSide('remote'))
    }

    if (data[0].basic) {
      let l = data[0].basic.location
      await this.cuic.append(new Text({ text: `查到啦，${l}的天气是：` }).setSide('remote'))
      await this.cuic._scrollToBottom()

      let d = data[0].daily_forecast.map(x => {
        let { date, tmp_min, tmp_max, cond_txt_d, cond_txt_n } = x
        date = date.replace('2019-', '')
        let tmp = `${tmp_min}~${tmp_max}℃`
        return `|${date}|${tmp}|${cond_txt_d}|`
      })

      d.unshift('|-|-|-|')
      d.unshift('|日期|温度|天气|')

      console.log(d)

      await this.cuic.append(new Loading())
      await this.cuic._scrollToBottom()
      await this.cuic.waitFor({ duration: 500 })
      await this.cuic.removeLast({ typeName: 'Loading' })
      await this.cuic.append(new Text({ 
        markdown: `${d.join('\n')}` 
      }).setSide('remote'))

      await this.cuic._scrollToBottom()
    }
  }
}