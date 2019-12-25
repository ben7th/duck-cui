import React from 'react'
import css from './DocIndex.scss'

import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import pages from './pages'

const indexData = [
  { title: '介绍', path: '/', component: pages.IntroPage },
  { title: '集成演示', children: [
    { title: '基本对话', path: '/basic', component: pages.BasicPage },
    { title: '天气查询', path: '/advanced/weather', component: pages.WeatherPage }
  ] },
  { title: '组件', children: [
    { title: 'AppendAble', children: [
      { title: 'Tip', path: '/AppendAble/Tip', component: pages.TipPage },
      { title: 'SayAble', children: [
        { title: 'Loading', path: '/AppendAble/Loading', component: pages.LoadingPage },
        { title: 'Text', path: '/AppendAble/Text', component: pages.TextPage },
        { title: 'Image', path: '/AppendAble/Image', component: pages.ImagePage },
        { title: 'Audio', path: '/AppendAble/Audio', component: pages.AudioPage },
        { title: 'Video', path: '/AppendAble/Video', component: pages.VideoPage },
        { title: 'Link' },
        { title: 'Card' }
      ] }
    ] },
    { title: 'CoverAble', children: [
      { title: 'Input', path: '/CoverAble/Input', component: pages.InputPage },
      { title: 'Choices', path: '/CoverAble/Choices', component: pages.ChoicesPage },
      { title: 'Picker', path: '/CoverAble/Picker', component: pages.PickerPage },
      { title: 'ImagePreviewer' }
    ] },
  ] },
  { title: 'Loader' },
  { title: 'Events' }
]

class Index extends React.Component {
  render () {
    return <div className={ css.index }>
      <TOC />
      <div className={ css.main }>
        <div className={ css.content }>
          <RouteContent />
        </div>
      </div>
    </div>
  }
}

class TOC extends React.Component {
  render () {
    let _index = indexData.map((x, idx) => {
      return <TOCItem data={ x } key={ idx } />
    })

    return <ul className={ css.TOC }>
      { _index }
    </ul>
  }
}

class TOCItem extends React.Component {
  render () {
    let { data } = this.props
    let { path, children } = data

    let _title = path ? 
      <NavLink exact to={ data.path } activeClassName={ css.linkActive }>
        { data.title }
      </NavLink> : 
      <span>{ data.title }</span>
      
    let _children = children ? <ul>{
      children.map((c, idx) => {
        return <TOCItem data={ c } key={ idx } />
      })
    }</ul> : null

    return <li>
      { _title }
      { _children }
    </li>
  }
}

class RouteContent extends React.Component {
  render () {
    let _routes = indexData.map((x, idx) => {
      return <RouteContentItem data={ x } key={ idx } />
    })

    return <>
      { _routes }
    </>
  }
}

class RouteContentItem extends React.Component {
  render () {
    let { data } = this.props
    let { path, component, children } = data

    let _item = <Route exact path={ path } component={ component } />
    let _children = children ? children.map((c, idx) => {
      return <RouteContentItem data={ c } key={ idx } />
    }) : null

    return <>
      { _item }
      { _children }
    </>
  }
}

export default () => (
  <BrowserRouter>
    <Route path='/' component={ Index } />
  </BrowserRouter>
)