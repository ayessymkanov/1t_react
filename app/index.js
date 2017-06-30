import React from 'react'
import ReactDOM from 'react-dom'
import './sanitize.scss'
import './grid.scss'
import './base.scss'
import App from './components/app/App'
import { store } from './store'
import { Provider } from 'react-redux'

window.store = store

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
