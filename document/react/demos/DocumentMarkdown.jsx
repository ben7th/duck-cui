import React from 'react'
import css from './DocumentMarkdown.scss'

import Markdown from 'markdown-to-jsx'

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
}