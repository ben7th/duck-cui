import SayAble from '../../interfaces/SayAble'
import React from 'react'
import css from './Text.scss'
import MarkdownIt from 'markdown-it'

export default class Text extends SayAble {
  component = class extends React.Component {
    render () {
      let { text, markdown } = this.props

      // markdown
      if (markdown) {
        let mdtext = new MarkdownIt().render(markdown)

        return <div className={ css.Text }>
          <div className={ css.markdown } dangerouslySetInnerHTML={{ __html: mdtext }}></div>
        </div>
      }

      // text
      return <div className={ css.Text }>
        <span>{ text }</span>
      </div>
    }
  }

  constructor (props) {
    super()
    this.props = props
  }

  get typeName () {
    return 'Text'
  }
}