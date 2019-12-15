export default class CoverAble {
  constructor () {
    this.base = 'CoverAble'

    if (!this.typeName) {
      throw new Error('CoverAble.typeName must be set.')
    }
  }
}