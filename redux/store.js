import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
    applyMiddleware(thunk, createLogger())
)(createStore)
//you can add middleware

export default function configureStore (initalState = {todos:[], user:{}}){
    // rootReducer needs kind of default value 
    return finalCreateStore(rootReducer, initalState)
}
