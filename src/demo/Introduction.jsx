import React from 'react'

import css from './Introduction.scss'

export default class Introduction extends React.Component {
  render () {
    return <div className={ css.Introduction }>
      这是简介
    </div>
  }
}