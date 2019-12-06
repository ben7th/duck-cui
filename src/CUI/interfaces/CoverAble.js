export default class CoverAble {
  constructor () {
    this.base = 'CoverAble'

    if (!this.name) {
      throw new Error('CoverAble.name must be set.')
    }
  }
}