import { combineReducers} from 'redux'
import todoReducer from './todoReducer.js'
import userReducer from './userReducer.js'

const rootReducer = combineReducers({
    todos:todoReducer ,
    user:userReducer
})

export default rootReducer
