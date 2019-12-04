import React from 'react'
import css from './Reply.scss'
import classNames from 'classnames/bind'

class Choice extends React.Component {
  render () {
    let { choice } = this.props

    let className = classNames.bind(css)({
      reply: true,
      choice: true,
      rpc: !!choice.rpc
    })

    return (
      <div 
        className={ className } 
        onClick={evt => this.click() }>{ choice.d }</div>
    )
  }

  click () {
    let { choice, $MRI } = this.props
    $MRI.adapter.sendChoice({ choice })
  }
}

const computeXYChange = ({ $node, $anchor }) => {
  let anchorRect = $node.getBoundingClientRect()
  let nodeRect = $anchor.getBoundingClientRect()

  // 2 倍缩放
  let xChange = (nodeRect.right - anchorRect.right) * 2
  let yChange = (nodeRect.top - anchorRect.top) * 2

  return { xChange, yChange }
}

class DemoChoice extends React.Component {
  state = {
    animationClassName: null,

    xChange: 0,
    yChange: 0,
  }

  componentDidUpdate () {
    let { choice } = this.props
    let { animationClassName } = this.state

    if (animationClassName) { return }

    if (choice.runAnimation == 'flyup') {
      animationClassName = 'flyup'
      this.setState({ animationClassName })

      let $anchor = document.getElementById('_reply_anchor')
      let $node = this.$node
      let { xChange, yChange } = computeXYChange({ $anchor, $node })

      console.log({ xChange, yChange })
      this.setState({ xChange, yChange: yChange + 100 })

      setTimeout(() => {
        this.setState({ xChange, yChange })
      }, 150)
    }

    if (choice.runAnimation == 'fadedown') {
      animationClassName = 'fadedown'
      this.setState({ animationClassName })
    }
  }

  render () {
    let { choice } = this.props
    let { animationClassName, xChange, yChange } = this.state

    let className = classNames.bind(css)({
      reply: true,
      choice: true,
      rpc: !!choice.rpc,
      [ animationClassName ]: true
    })

    let style = {
      transform: `translate(${ xChange }px, ${ yChange }px)`
    }

    return (
      <div 
        ref={ node => this.$node = node }
        className={ className } 
        style={ style }
        onClick={evt => this.click() }>{ choice.d }</div>
    )
  }

  async click () {
    let { choice, $MRI } = this.props
    console.log('点击 demoChoice', choice, $MRI)
    await $MRI.cui.player.sendChoice({ choice })
  }
}

class DemoMChoice extends React.Component {
  state = {
    selected: false
  }

  render () {
    let { choice } = this.props
    let { selected } = this.state

    let className = classNames.bind(css)({
      mreply: true,
      selected
    })

    return (
      <div 
        ref={ node => this.$node = node }
        className={ className } 
        onClick={evt => this.click() }>{ choice.d }</div>
    )
  }

  async click () {
    let { choice, $MRI } = this.props
    console.log('点击 demoMChoice', choice, $MRI)
    let { selected } = choice
    choice.selected = !selected
    this.setState({ selected: choice.selected })
    $MRI.cui.player.selectMChoice({ choice })
  }
}

const types = { Choice, DemoChoice, DemoMChoice }

export default types