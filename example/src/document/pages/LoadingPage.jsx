import React from 'react'

import { DocumentDemoLoading } from '../demos'
import DocumentMarkdown from '../demos/DocumentMarkdown'

const md = `
# Loading

Loading 是一种常用的对话气泡。当场景业务逻辑上需要用户等待，或者有一些耗时的加载时（例如网络请求），可以根据需要显示一个或多个 Loading 对话气泡。而当加载完成时，可以主动地把 Loading 移除，继续显示其他类型的对话气泡。

## Props

|Method|Description|
|-|-|
|\`setSide(side)\`|设置对话气泡出现的方位|

<Demo />
`

export default class LoadingDemo extends React.Component {
  render () {
    return <DocumentMarkdown
      overrides={ { Demo: DocumentDemoLoading } }
    >{ md }</DocumentMarkdown>
  }
}