import AppendAble from './AppendAble'

export default class SayAble extends AppendAble {
  constructor () {
    super()
    
    this.base = 'SayAble'
    this.side = 'remote'

    // if (!this.side) {
    //   throw new Error('SayAble.side must be set.')
    // }
  }

  setSide (side) {
    this.side = side
    return this
  }
}