import React from 'react'
import { render } from 'react-dom'

// production mode
// import DemoPage from 'duck-cui'
// import 'duck-cui/lib/main.min.css'

// development mode
import DocumentPage from './document'

render(<DocumentPage />, document.getElementById('app'))