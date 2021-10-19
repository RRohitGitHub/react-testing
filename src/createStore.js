import { applyMiddleware, createStore } from "redux";
import roodReducer from "./reducers";
import ReduxThunk from 'redux-thunk'

export const middlewares = [ReduxThunk]

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

const store = createStoreWithMiddleware(roodReducer);

export default store