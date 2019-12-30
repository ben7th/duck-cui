import React from 'react'
import css from './Video.scss'
import ReactPlayer from 'react-player'
import classNames from 'classnames/bind'
import FontIcon from '../../components/icons/FontIcon'
import buildSpeakAble from '../../interfaces/buildSpeakAble'

export default buildSpeakAble({
  typeName: 'Video',
  component: class extends React.Component {
    render () {
      let { playing, width, height, ready } = this.state
      let { url } = this.props

      let className = classNames.bind(css)({
        Video: true,
        loading: !ready
      })

      let _loadingIcon = <div className={ css.loading }>
        <FontIcon icon='video' className={ css.vd } />
        <FontIcon icon='loading' className={ css.ld } />
      </div>
        
      let _playIcon = <div className={ css.playicon } 
        onClick={ evt => this.play() }></div>

      let _pauseIcon = <div className={ css.pauseIcon } 
        onClick={ evt => this.pause() }></div>

      let _show = ready ? (
        playing ? _pauseIcon : _playIcon
      ) : _loadingIcon

      return <div className={ className }>
        <ReactPlayer 
          className={ css.rplayer }
          width={ width } height={ height }
          url={ url }
          ref={ node => this.$player = node }
          playing={ playing }
          onReady={ evt => this.ready() }
          onEnded={ evt => this.ended() }
        />
        { _show }
      </div>
    }

    state = {
      ready: false,
      playing: false,
      width: 0,
      height: 0
    }

    ready () {
      this.setState({ ready: true, width: '100%', height: 'auto' })
    }

    play () {
      let { playing } = this.state
      if (playing === false) {
        this.setState({ playing: true })
      }
    }

    pause () {
      this.setState({ playing: false })
    }

    ended () {
      this.setState({ playing: false })
    }
  }
})