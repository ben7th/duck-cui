import React from 'react'

import { DocumentDemoImage } from '../demos'
import DocumentMarkdown from '../demos/DocumentMarkdown'

const md = `
# BackgroundLayer

\`BackgroundLayer\` 是 \`CUI\` 的背景层。通常来说，这里可以放置一些装饰性的，不包括交互的内容。例如：给聊天界面设置底色，底图等。

## Context Methods

|Method|Description|
|-|-|
|\`setBackgroundContent({ content })\`|设置背景层的内容|

### 代码示例

\`\`\`jsx
let content = <div className={ css.customBg }>
  <div className={ css.bg }></div>
  <div className={ css.topshadow }></div>
  <div className={ css.imgbg }>
    <img src={ src } />
  </div>
</div>

this.cuic.setBackgroundContent({ content })
\`\`\`

<Demo />
`

export default class LoadingDemo extends React.Component {
  render () {
    return <DocumentMarkdown
      overrides={ { Demo: DocumentDemoImage } }
    >{ md }</DocumentMarkdown>
  }
}