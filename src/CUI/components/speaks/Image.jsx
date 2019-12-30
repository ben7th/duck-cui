import React from 'react'
import css from './Image.scss'
import buildSpeakAble from '../../interfaces/buildSpeakAble'
import Img from 'react-image'
import FontIcon from '../../components/icons/FontIcon'
import classNames from 'classnames/bind'

export default buildSpeakAble({
  typeName: 'Image',
  component: class extends React.Component {
    render () {
      let className = classNames.bind(css)({
        Image: true,
        loading: !this.state.loaded,
        loaded: this.state.loaded
      })

      return <div className={ className }>
        <Img 
          src={ this.props.src } 
          onLoad={ evt => this.imgLoaded() }
        />
        {
          this.state.loaded ? null : (
            <>
              <FontIcon icon='image' className={ css.ig } />
              <FontIcon icon='loading' className={ css.ld } />
            </>
          )
        }
      </div>
    }

    state = {
      loaded: false
    }

    imgLoaded () {
      this.setState({ loaded: true })
    }
  }
})