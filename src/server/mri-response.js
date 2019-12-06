class Show {
  constructor ({ show }) {
    this.show = show
  }

  deal (adapter) {
    this.show.forEach(x => {
      let { type } = x
      if (type === 'text') {
        this._dealText({ item: x, adapter })
        return
      }

      if (type === 'audio') {
        this._dealAudio({ item: x, adapter })
      }

      if (type === 'gif') {
        this._dealGif({ item: x, adapter })
      }

      if (type === 'img') {
        this._dealImg({ item: x, adapter })
      }

      if (type === 'video' || type === 'svideo') {
        this._dealVideo({ item: x, adapter })
      }

      console.log('未处理的 show 类型：', type)
    })
  }

  _dealText ({ item, adapter }) {
    let { content } = item
    adapter.cui.appendAIText(content)
  }

  _dealAudio ({ item, adapter}) {
    let { content } = item
    adapter.cui.appendAIAudio(content)
  }

  _dealGif ({ item, adapter }) {
    let { content } = item
    adapter.cui.appendAIGif(content)
  }

  _dealImg ({ item, adapter }) {
    let { content } = item
    adapter.cui.appendAIImg(content)
  }

  _dealVideo({ item, adapter }) {
    let { content } = item
    adapter.cui.appendAIVideo(content)
  }
}

class CMD {
  constructor ({ cmd }) {
    this.cmd = cmd
  }

  deal (adapter) {
    let { type } = this.cmd

    if (type === 'wait') {
      this._dealWait(adapter)
    }

    if (type === 's_choice') {
      this._dealChoice(adapter)
    }
  }

  _dealWait (adapter) {
    console.log('deal CMD wait')
    let { duration } = this.cmd
    adapter.waitCMDwait(duration)
  }

  _dealChoice (adapter) {
    console.log('deal CMD choice', this.cmd)
    let choices = this.cmd.choice
    adapter.cui.showChoices({ choices })
  }
}

class MRIResponse {
  constructor (resp) {
    this.data = resp.data
  }

  deal (adapter) {
    console.log('deal:', { data: this.data })
    let { show, cmd } = this.data
    new Show({ show }).deal(adapter)
    if (cmd) {
      new CMD({ cmd }).deal(adapter)
    }
  }
}

export default MRIResponse