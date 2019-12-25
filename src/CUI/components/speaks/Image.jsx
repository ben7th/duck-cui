import React from 'react'
import css from './Image.scss'
import buildSpeakAble from '../../interfaces/buildSpeakAble'

export default buildSpeakAble({
  typeName: 'Image',
  component: class extends React.Component {
    render () {
      return <div className={ css.Image }>
        <img src={ this.props.src } />
      </div>
    }
  }
})