export default class AppendAble {
  constructor () {
    this.base = 'AppendAble'

    if (!this.name) {
      throw new Error('AppendAble.name must be set.')
    }
  }
}