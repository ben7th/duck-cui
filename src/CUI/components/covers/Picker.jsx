import React from 'react'
import css from './Picker.scss'
import buildCoverAble from '../../interfaces/buildCoverAble'

import MultiPicker from 'rmc-picker/lib/MultiPicker'
import Picker from 'rmc-picker/lib/Picker'

export default buildCoverAble({
  typeName: 'Picker',
  events: ['send'],
  component: class extends React.Component {
    render () {
      let { data } = this.props
      return <div className={ css.Picker }>
        <DuckPicker data={ data } ref={ node => this.picker = node } />
        <div className={ css.bar }>
          <button className={ css.sendBtn } 
            onClick={ evt => {
              let value = this.picker.getValue()
              this._send(value)
            } 
          }>确定</button>
        </div>
      </div>
    }
  }
})

class DuckPicker extends React.Component {
  render () {
    // 这里只能这样写，不能再分出一层组件，否则 onValueChange 事件无法触发
    let _pickers = this.props.data.map((x, idx) => {
      let _items = x.map((y, idy) => {
        let { value, label } = y
        return <Picker.Item 
          className={ css.pickerItem }
          value={ value }
          key={ idy }
        >
          { label }
        </Picker.Item>
      })

      return <Picker indicatorClassName={ css.indicator } key={ idx }>
        { _items }
      </Picker>
    })

    return <MultiPicker
      selectedValue={ this.state.values }
      onValueChange={ values => this.onValueChange(values) }
      onScrollChange={ values => this.onScrollChange(values) }
    >
      { _pickers }
    </MultiPicker>
  }

  state = {
    values: []
  }

  UNSAFE_componentWillMount () {
    // console.log(this.props)
    let values = this.props.data.map(x => {
      let i = x.filter(y => y.selected === true)[0]
      return i ? i.value : null
    })
    
    this.setState({ values })
  }

  onValueChange (values) {
    // console.log(values)
    this.setState({ values })
  }

  onScrollChange (values) {
    // console.log(values)
    // 暂时用不到
  }

  // TODO 函数实现重构
  getValue () {
    let { values } = this.state
    let { data } = this.props
    let labels = data.map((d, idx) => {
      let _h = {}
      d.forEach(x => _h[x.value] = x.label)
      return _h[values[idx]]
    })
    // let labels = values.map(v => _d[v])
    return { values, labels }
  }
}