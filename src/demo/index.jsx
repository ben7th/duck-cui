import React from 'react'

import css from './index.scss'

import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'

import { 
  BasicPage,
  LoadingPage,
  TextPage,
  ImagePage
} from './pages/index'

import Markdown from 'markdown-to-jsx'

const md = `
# Duck CUI

一个 CUI 支持框架。提供多种 CUI 所需要的能力。  
使用极其简洁的代码和编程方式，帮助 CUI 快速适配业务逻辑，实现所需场景。

## 使用方法

### 安装引用

### 在网页中使用

### 在微信小程序中使用

## 兼容性说明

## 用到的库，感谢！

- [lodash](https://www.lodashjs.com/)  
- [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx)
`

const L = (props) => {
  return <NavLink exact to={ props.to } activeClassName={ css.linkActive }>{ props.children }</NavLink>
}

class Index extends React.Component {
  render () {
    return <div className={ css.index }>
      <ul className={ css.side }>
        <li><L to='/'>介绍</L></li>
        <li><L to='/basic'>基本演示</L></li>
        <li>
          <span>AppendAble</span>
          <ul>
            <li><span>Tip</span></li>
            <li>
              <span>SayAble</span>
              <ul>
                <li><L to='/AppendAble/Loading'>Loading</L></li>
                <li><L to='/AppendAble/Text'>Text</L></li>
                <li><L to='/AppendAble/Image'>Image</L></li>
                <li><span>Audio</span></li>
                <li><span>Video</span></li>
                <li><span>Link</span></li>
                <li><span>Card</span></li>
                <li><span>MarkdownText</span></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span>CoverAble</span>
          <ul>
            <li><span>Input</span></li>
            <li><span>Choices</span></li>
            <li><span>Wheel</span></li>
            <li><span>ImagePreviewer</span></li>
          </ul>
        </li>
        <li><span>Loader</span></li>
        <li><span>Events</span></li>
      </ul>
      <div className={ css.main }>
        <div className={ css.content }>
          <Route exact path='/'>
            <Markdown>{ md }</Markdown>
          </Route>
          <Route exact path='/basic' component={ BasicPage } />

          <Route exact path='/AppendAble/Loading' component={ LoadingPage } />
          <Route exact path='/AppendAble/Text' component={ TextPage } />
          <Route exact path='/AppendAble/Image' component={ ImagePage } />
        </div>
      </div>
    </div>
  }
}

export default () => (
  <BrowserRouter>
    <Route path='/' component={ Index } />
  </BrowserRouter>
)