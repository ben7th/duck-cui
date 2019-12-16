import SayAble from '../../interfaces/SayAble'
import React from 'react'
import css from './Audio.scss'
import ReactPlayer from 'react-player'
import classNames from 'classnames/bind'
import FontIcon from '../../components-new/icons/FontIcon'

export default class Audio extends SayAble {
  component = class extends React.Component {
    render () {
      let { ready, duration, playing } = this.state

      return <div className={ css.Audio }>
        <AudioIcon playing={ playing } />
        <ReactPlayer 
          className={ css.rplayer }
          width='0' height='0'
          url='http://tna-upload.oss-cn-shanghai.aliyuncs.com/vultr-upload/2019-10-16/8bit/music.mp3'
          ref={ node => this.$player = node }
          playing={ playing }
          onReady={ evt => this.ready() }
          onEnded={ evt => this.ended() }
        />
        {
          ready ? <span>{ duration }″</span> : 
            <div className={ css.loading }><FontIcon icon='loading' /></div>
        }
      </div>
    }

    state = {
      ready: false,
      duration: 0,
      playing: false
    }

    ready () {
      let duration = this.$player.getDuration()
      duration = Math.ceil(duration)
      this.setState({ duration, ready: true })
    }

    ended () {
      this.setState({ playing: false })
    }

    handleBoxClick () {
      let { playing } = this.state

      if (playing === true ) {
        this.setState({ playing: false })
        this.$player.seekTo(0)
      }

      if (playing === false) {
        this.setState({ playing: true })
      }
    }
  }

  constructor (props) {
    super()
    this.props = props
  }

  get typeName () {
    return 'Audio'
  }
}

class AudioIcon extends React.Component {
  render () {
    let { playing } = this.props
    let className = classNames.bind(css)({
      AudioIcon: true,
      playing
    })

    return <div className={ className }>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  }
}