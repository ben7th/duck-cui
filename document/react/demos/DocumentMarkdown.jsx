import React from 'react'
import css from './DocumentMarkdown.scss'

import Markdown from 'markdown-to-jsx'

import prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'

// default, coy, dark, funky, okaidia, solarizedlight, tomorrow, twilight
import 'prismjs/themes/prism-okaidia.css'

export default class DocumentMarkdown extends React.Component {
  render () {
    let { overrides, children } = this.props

    return <div className={ css.DocumentMarkdown }>
      <Markdown
        className={ css['markdown-body'] }
        options={ { overrides } }
      >{ children }</Markdown>
    </div>
  }

  componentDidMount () {
    prism.highlightAll()
  }
}