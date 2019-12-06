import MRIClient from '../api/mri-client'
import MRIResponse from './mri-response'
import UIController from './ui-controller'

export default class CUIAdapter {
  constructor ({ $MRI }) {
    this.$MRI = $MRI

    this.client = new MRIClient()
    this.controller = new UIController({ $MRI })
  }

  async open () {
    let waitFunc = this.client.open
    let res = await this.controller.loadingUntilThen({ waitFunc })
    new MRIResponse(res).deal(this)
  }

  async waitCMDwait (duration) {
    let waitFunc = () => 'waitCMDwait ok'
    let res = await this.controller.loadingUntilThen({ waitFunc, duration })
    await this.waitend()
  }

  async waitend () {
    let waitFunc = this.client.waitend
    let res = await this.controller.loadingUntilThen({ waitFunc })
    new MRIResponse(res).deal(this)
  }

  async sendChoice ({ choice }) {
    if (choice.rpc) {
      this.controller.appendMERPC(choice.d)
    } else {
      this.controller.appendMEText(choice.d)
    }
    this.controller.clearReplies()

    let waitFunc = this.client.s_choice
    let res = await this.controller.loadingUntilThen({ waitFunc })
    new MRIResponse(res).deal(this)
  }
}