import React from 'react'

import css from './index.scss'

import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import pages from './pages'

import {
  WeatherPage
} from './pages/advanced'

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
          <span>综合演示</span>
          <ul>
            <li><L to='/advanced/weather'>天气查询</L></li>
          </ul>
        </li>
        <li>
          <span>AppendAble</span>
          <ul>
            <li><span>Tip</span></li>
            <li>
              <span>SayAble</span>
              <ul>
                <li><L to='/AppendAble/Loading'>Loading</L></li>
                <li>
                  <L to='/AppendAble/Text'>Text</L>
                  <ul>
                    <li><L to='/AppendAble/MarkdownText'>MarkdownText</L></li>
                  </ul>
                </li>
                <li><L to='/AppendAble/Image'>Image</L></li>
                <li><L to='/AppendAble/Audio'>Audio</L></li>
                <li><span>Video</span></li>
                <li><span>Link</span></li>
                <li><span>Card</span></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span>CoverAble</span>
          <ul>
            <li><L to='/AppendAble/Input'>Input</L></li>
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
          <Route exact path='/basic' component={ pages.BasicPage } />

          <Route exact path='/advanced/weather' component={ WeatherPage } />

          <Route exact path='/AppendAble/Loading' component={ pages.LoadingPage } />
          <Route exact path='/AppendAble/Text' component={ pages.TextPage } />
          <Route exact path='/AppendAble/MarkdownText' component={ pages.MarkdownTextPage } />
          <Route exact path='/AppendAble/Image' component={ pages.ImagePage } />
          <Route exact path='/AppendAble/Audio' component={ pages.AudioPage } />

          <Route exact path='/AppendAble/Input' component={ pages.InputPage } />
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