import React from 'react'
import css from './MReplies.scss'
import Reply from './Reply'
import classNames from 'classnames/bind'

export default class extends React.Component {
  render () {
    let { mReplies, $MRI } = this.props

    let children = mReplies.map((x, idx) => {
      let _t = Reply[x.type]
      return <_t key={ idx } choice={ x } $MRI={ $MRI } />
    })

    let selectedOne = false
    for (let r of mReplies) {
      if (r.selected) {
        selectedOne = true
        break
      }
    }
  
    let className = classNames.bind(css)({
      mReplies: true,
      empty: children.length === 0,
      selectedOne
    })
  
    return (
      <div className={ className }>
        { children }
        <div className={ css.ok }
          onClick={ evt => this.ok() }
        >确定</div>
      </div>
    )
  }

  async ok () {
    let { mReplies, $MRI } = this.props
    await $MRI.cui.player.okMChoice(mReplies)
  }
}