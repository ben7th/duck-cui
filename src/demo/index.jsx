import React from 'react'

import css from './index.scss'

import { BrowserRouter, Route, Link } from 'react-router-dom'

import { 
  BasicPage,
  LoadingPage
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

class Index extends React.Component {
  render () {
    return <div className={ css.index }>
      <ul className={ css.side }>
        <li><Link to='/'>介绍</Link></li>
        <li><Link to='/basic'>基本演示</Link></li>
        <li>
          <span>AppendAble</span>
          <ul>
            <li><Link to='/AppendAble/Loading'>Loading</Link></li>
            <li><span>Text</span></li>
            <li><span>Image</span></li>
            <li><span>Audio</span></li>
            <li><span>Video</span></li>
            <li><span>Link</span></li>
            <li><span>Tip</span></li>
            <li><span>Card</span></li>
            <li><span>MarkdownText</span></li>
          </ul>
        </li>
        <li>
          <Link to='/'>CoverAble</Link>
          <ul>
            <li><Link to='/'>Input</Link></li>
            <li><Link to='/'>Choices</Link></li>
            <li><Link to='/'>Wheel</Link></li>
          </ul>
        </li>
        <li><Link to='/'>Loader</Link></li>
        <li><Link to='/'>Event Binding</Link></li>
      </ul>
      <div className={ css.main }>
        <div className={ css.content }>
          <Route exact path='/'>
            <Markdown>{ md }</Markdown>
          </Route>
          <Route exact path='/basic' component={ BasicPage } />
          <Route exact path='/AppendAble/Loading' component={ LoadingPage } />
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