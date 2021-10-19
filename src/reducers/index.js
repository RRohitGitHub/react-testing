import { combineReducers } from "redux";
import success from './successReducer'
import postsReducer from './posts/reducer'

let roodReducer = combineReducers({
    postsReducer
})

export default roodReducer