import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)