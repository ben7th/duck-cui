import React from 'react'
import css from './Image.scss'
import buildSayAble from '../../interfaces/buildSayAble'

export default buildSayAble({
  typeName: 'Image',
  component: class extends React.Component {
    render () {
      return <div className={ css.Image }>
        <img src={ this.props.src } />
      </div>
    }
  }
})