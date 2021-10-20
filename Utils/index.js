import { checkPropTypes } from "prop-types";
import { applyMiddleware, createStore } from "redux";
import middlewares from '../src/createStore'
import roodReducer from "../src/reducers";
import ReduxThunk from 'redux-thunk'

export const  findByTestAttr = (component,attr)=>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkProps = (component,expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes,expectedProps,'props',component.name);
    return propsErr;
}

export const testStore = (initialState)=>{
    const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)
    return createStoreWithMiddleware(roodReducer,initialState);
}