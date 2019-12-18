export default ({ typeName, component }) => {
  return class {
    constructor (props) {
      this.props = props
    }

    base = 'AppendAble'
    typeName = typeName
    component = component
  }
}