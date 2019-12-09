export default class AppendAble {
  constructor () {
    this.base = 'AppendAble'

    if (!this.typeName) {
      throw new Error('AppendAble.typeName must be set.')
    }
  }
}