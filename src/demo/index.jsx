import React from 'react'

import css from './index.scss'

import { BrowserRouter, Route, Link } from 'react-router-dom'

import Basic from './Basic'
import LoadingDemo from './LoadingDemo'

class Index extends React.Component {
  render () {
    return <div className={ css.index }>
      <ul className={ css.side }>
        <li><Link to='/'>介绍</Link></li>
        <li><Link to='/basic'>基本演示</Link></li>
        <li>
          <Link to='/'>AppendAble</Link>
          <ul>
            <li><Link to='/AppendAble/Loading'>Loading</Link></li>
            <li><Link to='/'>Text</Link></li>
            <li><Link to='/'>Image</Link></li>
            <li><Link to='/'>Audio</Link></li>
            <li><Link to='/'>Video</Link></li>
            <li><Link to='/'>Link</Link></li>
            <li><Link to='/'>Tip</Link></li>
            <li><Link to='/'>Card</Link></li>
            <li><Link to='/'>MarkdownText</Link></li>
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
            <h1>Duck CUI</h1>
            <p>一个 CUI 支持框架。提供多种能力帮助 CUI 快速适配业务逻辑，实现所需场景。</p>
            <h2>使用方法</h2>
            <h3>安装引用</h3>
            <h3>在网页中使用</h3>
            <h3>在微信小程序中使用</h3>
            <h2>兼容性说明</h2>
          </Route>
          <Route exact path='/basic' component={ Basic } />
          <Route exact path='/AppendAble/Loading' component={ LoadingDemo } />
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