/*** examples/src/app.js ***/
import React from 'react'
import { render } from 'react-dom'
// import ReactDemo from 'duck-cui'
// import 'duck-cui/lib/main.min.css'
import { DemoPage } from '../../src/index' // 引入组件

const App = () => <DemoPage />
render(<App />, document.getElementById('root'))