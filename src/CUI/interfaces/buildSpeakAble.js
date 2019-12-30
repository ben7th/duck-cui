import uuidv1 from 'uuid/v1'

class NoSpeakerError extends Error {
  constructor (message) {
    super(message)
    this.name = 'NoSpeakerError'
  }
}

export default ({ typeName, component }) => {
  return class {
    constructor (props) {
      this.id = uuidv1()
      this.props = props || {}
      this.speaker = this.props.speaker

      // if (!this.speaker) {
      //   throw new NoSpeakerError('SpeakAble 对象必须指定 Speaker')
      // }
    }

    base = 'SpeakAble'
    side = 'remote'
    typeName = typeName
    component = component
  }
}