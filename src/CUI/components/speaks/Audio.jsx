import React from 'react'
import css from './Audio.scss'
import ReactPlayer from 'react-player'
import classNames from 'classnames/bind'
import FontIcon from '../icons/FontIcon'
import buildSpeakAble from '../../interfaces/buildSpeakAble'

export default buildSpeakAble({
  typeName: 'Audio',
  component: class extends React.Component {
    render () {
      let { ready, duration, playing } = this.state
      let { url } = this.props

      return <div className={ css.Audio }>
        <AudioIcon playing={ playing } />
        <ReactPlayer 
          className={ css.rplayer }
          width='0' height='0'
          url={ url }
          ref={ node => this.$player = node }
          playing={ playing }
          onReady={ evt => this.ready() }
          onEnded={ evt => this.ended() }
        />
        {
          ready ? <span>{ duration }</span> : 
            <div className={ css.loading }><FontIcon icon='loading' /></div>
        }
      </div>
    }

    state = {
      ready: false,
      duration: null,
      playing: false
    }

    ready () {
      let d = this.$player.getDuration()
      d = Math.ceil(d)
      let m = ~~(d / 60)
      let s = d % 60
      let duration = `${ m > 0 ? `${m}′` : '' }${ s >= 10 ? s : `0${ s }` }″`
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
})

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