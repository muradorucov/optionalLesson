import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import { globalStore } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={globalStore}>
    <App />
  </Provider>,
)
