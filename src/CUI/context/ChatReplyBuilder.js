const ChatReplyBuilder = {
  choice ({ c, d, rpc, isDemo }) {
    return { type: 'Choice', c, d, rpc }
  },

  demoChoice ({ d, children, code }) {
    // console.log('demoChoice', { d, children, code })
    return { type: 'DemoChoice', d, children, code }
  },

  demoMChoice ({ d }) {
    return { type: 'DemoMChoice', d }
  }
}

export default ChatReplyBuilder