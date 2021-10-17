import React from 'react'
import { shallow } from 'enzyme'
import Headline from './headline'
import { findByTestAttr } from '../../../Utils'

const setUp = (props={})=>{
    const component = shallow(<Headline {...props} />)
    return component;
}

describe('Headline Component',()=>{

    describe('Have Props',() => {
        let wrapper;
        beforeEach(()=>{
            const props={
                header:'Test Header',
                desc:'Test Desc'
            }
            wrapper = setUp(props)
        })

        it('Should render without errors',()=>{
            const component = findByTestAttr(wrapper,'headlineComponent');
            expect(component.length).toBe(1);
        })

    })

    describe('Have NO props',()=>{

    })

})