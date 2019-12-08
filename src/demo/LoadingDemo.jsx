import React from 'react'

import { DemoLoading } from './components/demos'

export default class LoadingDemo extends React.Component {
  render () {
    return <div>
      <h1>Loading</h1>
      <p>Loading 是一种常用的对话气泡。当场景业务逻辑上需要用户等待，或者有一些耗时的加载时（例如网络请求），可以根据需要显示一个或多个 Loading 对话气泡。而当加载完成时，可以主动地把 Loading 移除，继续显示其他类型的对话气泡。</p>
      <p>以下是基本的使用例子：</p>
      <DemoLoading />
    </div>
  }
}