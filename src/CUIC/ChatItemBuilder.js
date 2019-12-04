const ChatItemBuilder = {
  AI: {
    Loading: () => ({ from: 'AI', type: 'Loading' }),
    Text: (text) => ({ from: 'AI', type: 'Text', text }),
    MDText: (text) => ({ from: 'AI', type: 'MDText', text }),
    Audio: (url) => ({ from: 'AI', type: 'Audio', url }),
    Gif: (url) => ({ from: 'AI', type: 'Gif', url }),
    Img: (url) => ({ from: 'AI', type: 'Img', url }),
    Video: (url) => ({ from: 'AI', type: 'Video', url }),
    Link: ({ text, href }) => ({ from: 'AI', type: 'Link', text, href }),
    TextEachChar: (text) => ({ from: 'AI', type: 'TextEachChar', text }),
    WebCard: ({ title, desc, icon, url }) => ({ from: 'AI', type: 'WebCard', title, desc, icon, url }),
    MsgPrompt: ({ content }) => ({ from: 'AI', type: 'MsgPrompt', content }),
  },

  ME: {
    Text: (text) => ({ from: 'ME', type: 'Text', text }),
    RPC: (text) => ({ from: 'ME', type: 'RPC', text }),
  }
}

export default ChatItemBuilder