export default ({ typeName, component, events }) => {
  return class {
    constructor (props) {
      this.props = props
      this.props._object = this
      this.eventHandlers = {}
    }

    base = 'CoverAble'
    typeName = typeName
    component = component

    on (eventName, func) {
      this.eventHandlers[eventName] = func
      return this
    }

    handle (eventName, evt) {
      let func = this.eventHandlers[eventName]
      if (func) {
        func(evt)
      }
    }
  }
}