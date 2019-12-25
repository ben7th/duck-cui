export default ({ typeName, component }) => {
  return class {
    constructor (props) {
      this.props = props
    }

    base = 'SpeakAble'
    side = 'remote'
    typeName = typeName
    component = component

    setSide (side) {
      this.side = side
      return this
    }
  }
}