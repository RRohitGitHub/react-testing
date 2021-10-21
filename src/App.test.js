import { shallow } from 'enzyme';
import React from 'react'
import { findByTestAttr, testStore } from '../Utils'
import App from './App';


const setUp = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive()
    console.log(wrapper.debug())
    return wrapper;
}   

describe('App Component',()=>{

    let wrapper;
    beforeEach(()=>{
        const initialState = {
            posts:[{
                title:'Example title 1',
                body:'Some text'
            },
            {
                title:'Example title 2',
                body:'Some text'
            },{
                title:'Example title 3',
                body:'Some text'
            }]
        }
        wrapper = setUp(initialState);
    })

    it('Should render without errors',()=>{
        const component = findByTestAttr(wrapper,'appComponent');
        expect(component.length).toBe(1);
    })

    // Testing method that updates a state
    it(' exampleMethod_updateState method should update state as expected',()=>{
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_UpdateState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    })

    it(' exampleMethod_returnValue method should return value as expected',()=>{
        const classInstance = wrapper.instance();
        const value = classInstance.exampleMethod_returnValue(10);
        expect(value).toBe(20);
    })

})