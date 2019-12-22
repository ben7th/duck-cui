import React from 'react'
import css from './Video.scss'
import ReactPlayer from 'react-player'
import classNames from 'classnames/bind'
import FontIcon from '../../components-new/icons/FontIcon'
import buildSayAble from '../../interfaces/buildSayAble'

export default buildSayAble({
  typeName: 'Video',
  component: class extends React.Component {
    render () {
      let { playing, width, height, ready } = this.state
      let { url } = this.props

      let className = classNames.bind(css)({
        Video: true,
        loading: !ready
      })

      let _loadingIcon = ready ? null : 
        <div className={ css.loading }><FontIcon icon='loading' /></div>

      let _playIcon = ready ? ( 
        playing ? null :
          <div className={ css.playicon } onClick={ evt => this.play() }></div>
      ) : null

      let _pauseIcon = ready ? (
        playing ? 
        <div className={ css.pauseIcon } onClick={ evt => this.pause() }></div> : null
      ) : null

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
        { _loadingIcon }
        { _playIcon }
        { _pauseIcon }
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

    // handleBoxClick () {
    //   let { playing } = this.state

    //   if (playing === true ) {
    //     this.setState({ playing: false })
    //     this.$player.seekTo(0)
    //   }

    //   if (playing === false) {
    //     this.setState({ playing: true })
    //   }
    // }
  }
})