import React from 'react'

import css from './index.scss'

import { BrowserRouter, Route, Link } from 'react-router-dom'

import Introduction from './Introduction'
import Basic from './Basic'

class Index extends React.Component {
  render () {
    return <div className={ css.index }>
      <h1>Duck CUI</h1>
      <p>提供多种能力支持 cui 快速适配业务逻辑</p>
      <ul>
        <li><Link to='/introduction'>Introduction</Link></li>
        <li><Link to='/basic'>Basic</Link></li>
      </ul>
    </div>
  }
}

export default () => (
  <BrowserRouter>
    <Route exact path='/' component={ Index } />
    <Route path='/introduction' component={ Introduction } />
    <Route path='/basic' component={ Basic } />
  </BrowserRouter>
)