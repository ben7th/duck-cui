/*** examples/src/app.js ***/
import React from 'react'
import { render } from 'react-dom'

// production mode
// import ReactDemo from 'duck-cui'
// import 'duck-cui/lib/main.min.css'

// development mode
import { DemoPage } from '../../src/index' // 引入组件

// const App = () => <DemoPage />
// render(<App />, document.getElementById('root'))

render(<DemoPage />, document.getElementById('app'))