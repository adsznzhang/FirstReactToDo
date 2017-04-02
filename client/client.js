import React from 'react'
//using curling bracket is because we can add more methods easily later.
import{render} from 'react-dom'
import App from '../components/app'
import configureStore from '../redux/store.js'
import {Provider} from 'react-redux'

let initalState = {
    todos:[{
        id:0,
        completed: false,
        text: 'Inital todo for demo purpose'
    }],
    user:{
        username: 'zhangzhen',
        id: 13
    }
}

let store = configureStore(initalState)

// config and create our store
//


render(
        <Provider store = {store}>
        <App/>
        </Provider>,
document.getElementById('app')
)
