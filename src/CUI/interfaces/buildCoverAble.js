export default ({ typeName, component, events }) => {
  return class {
    constructor (props) {
      this.props = props || {}
      this.props._object = this
      this.eventHandlers = {}

      this._initComponent()
    }

    _initComponent () {
      events.forEach(evtName => {
        component.prototype[`_${evtName}`] = (params) => {
          this.handle(evtName, params)
        }
      })
      this.component = component
      this.events = events
    }

    base = 'CoverAble'
    typeName = typeName

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