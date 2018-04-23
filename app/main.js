import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './src/App'

import './assets/css/reset.css'
import './assets/icon/iconfont.css'

import 'sweetalert2/dist/sweetalert2.min.css'

ReactDOM.render(
  <App />,
  document.querySelector('#app')
)