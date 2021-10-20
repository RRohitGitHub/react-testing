import { combineReducers } from "redux";
import success from './successReducer'
import posts from './posts/reducer'

let roodReducer = combineReducers({
    posts
})

export default roodReducer