import React from 'react'
import css from './ChatItem.scss'

import SibbayAvatar from './SibbayAvatar'
import ChatBubble from './ChatBubble'

import classNames from 'classnames/bind'

class _ChatItemImg extends React.Component {
  state = {
    detail: false,
    loaded: false
  }

  showDetail () {
    this.setState({ detail: true })
  }

  hideDetail () {
    this.setState({ detail: false })
  }

  loaded () {
    this.setState({ loaded: true })
  }

  render () {
    let { data } = this.props
    let { url } = data
    let isFull = url.includes('http://') || url.includes('https://')
    let _url = isFull ? url : `https://oss-public-t.xiaowhite.com/${ data.url }`

    let { detail, loaded } = this.state
    
    if (detail) {
      return (
        <div className={ css.showdetailimg } onClick={ evt => this.hideDetail() }>
          {/* <img src={ _url } onClick={ evt => evt.stopPropagation() } /> */}
          <img src={ _url } />
        </div>
      )
    }

    if (!loaded) {
      return (
        <>
        <_ChatItem from='AI' type='Loading' />
        <img 
          className={ css.notload }
          src={ _url } 
          onLoad={ evt => this.loaded() }
        />
        </>
      )
    }

    return (
      <_ChatItem from='AI' type='Img'>
        <img 
          src={ _url } 
          onClick={ evt => this.showDetail() }
        />
      </_ChatItem>
    )
  }
}

class _ChatItem extends React.Component {
  render () {
    let { children, from, type } = this.props

    let className = classNames.bind(css)({
      chatitem: true,
      [`from-${ from }`]: true,
      [`type-${ type }`]: true
    })

    let avatar = from == 'AI' ? <SibbayAvatar /> : null

    return (
      <div className={ className }>
        { avatar }
        <ChatBubble from={ from } type={ type }>{ children }</ChatBubble>
      </div>
    )
  }
}

class EachChar extends React.Component {
  state = {
    chars: [],
    textNow: ''
  }

  async componentDidMount () {
    let chars = this.props.text.split('')
    await this.showNextChar(chars, 1)
    console.log('aaaaa')
  }

  async showNextChar (chars, idx) {
    if (idx == chars.length + 1) {
      return false
    }

    let textNow = chars.slice(0, idx)
    this.setState({ textNow })

    let p = new Promise(resolve => {
      setTimeout(async () => {
        resolve(await this.showNextChar(chars, idx + 1))
      }, 150)
    })

    return p
  }

  render () {
    let { text } = this.props
    let { textNow } = this.state

    return (
      <div>
        { textNow }
      </div>
    )
  }
}

const AI = {
  Text: ({ data }) => (
    <_ChatItem from='AI' type='Text'>{ data.text }</_ChatItem>
  ),

  MDText: ({ data }) => {
    return <_ChatItem from='AI' type='MDText'>
      <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
    </_ChatItem>
  },

  TextEachChar: ({ data }) => (
    <_ChatItem from='AI' type='TextEachChar'>
      <EachChar text={ data.text} />
    </_ChatItem>
  ),

  Loading: () => (
    <_ChatItem from='AI' type='Loading' />
  ),

  Audio: ({ data }) => (
    <_ChatItem from='AI' type='Audio'>
      <audio src={ `${ data.url }` } controls></audio>
    </_ChatItem>
  ),

  Gif: ({ data }) => (
    <_ChatItem from='AI' type='Gif'>
      <img src={ data.url } />
    </_ChatItem>
  ),

  Img: _ChatItemImg,

  Video: ({ data }) => (
    <_ChatItem from='AI' type='Video'>
      <video controls src={ `${ data.url }` }></video>
    </_ChatItem>
  ),

  Link: class extends React.Component {
    componentWillMount () {
      let { data } = this.props

      if (data.text == 'CALL') {
        console.log(data.href)
        location.href = data.href
      }
    }

    render () {
      let { data } = this.props

      return (
        <_ChatItem from='AI' type='Link'>
          <a href={ data.href }>{ data.text }</a>
        </_ChatItem>
      )
    }
  },

  WebCard: class extends React.Component {
    render () {
      let { data } = this.props

      return (
        <_ChatItem from='AI' type='WebCard'>
          <a href={ data.url } target='_blank'>
            <div>{ data.title }</div>
            <div>
              <span>{ data.desc }</span>
              <i></i>
            </div>
          </a>
        </_ChatItem>
      )
    }
  },

  MsgPrompt: class extends React.Component {
    render () {
      let { data } = this.props

      return (
        <_ChatItem from='AI' type='MsgPrompt'>
          { data.content }
        </_ChatItem>
      )
    }
  },
}

const ME = {
  Text: ({ data }) => (
    <_ChatItem from='ME' type='Text'>{ data.text }</_ChatItem>
  ),

  RPC: ({ data }) => (
    <_ChatItem from='ME' type='RPC'>{ data.text }</_ChatItem>
  )
}

/*
  ChatItem.AI.Text
  ChatItem.AI.Loading

  ChatItem.ME.Text
*/

export default { AI, ME }