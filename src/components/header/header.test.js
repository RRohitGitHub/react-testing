import React from 'react'
import {shallow} from 'enzyme'
import Header from './Header'
import { findByTestAttr } from '../../../Utils';

const setUp = (props={})=>{
    const component = shallow(<Header {...props} />);
    console.log(component)
    return component;
}


describe('Header Component',()=>{

    let component;
    beforeEach(()=>{
        component = setUp();
    })
 

    it('It should render without errors',()=>{
        console.log(component)
        const wrapper = findByTestAttr(component,'headerComponent');
        expect(wrapper.length).toBe(1);
    })


    it('Should render a logo',()=>{
        const wrapper = findByTestAttr(component,'logo-img');
        expect(wrapper.length).toBe(1);
    })
})
