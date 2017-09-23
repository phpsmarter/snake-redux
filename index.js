import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './app'

import keyChange from './key-change'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

keyChange(store.dispatch)

// start game
store.dispatch({ type: 'SETUP' })
