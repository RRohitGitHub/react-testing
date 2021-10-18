import React from 'react'
import { shallow } from 'enzyme'
import Headline from './headline'
import { checkProps, findByTestAttr } from '../../../Utils'
import { checkPropTypes } from 'prop-types'

const setUp = (props={})=>{
    const component = shallow(<Headline {...props} />)
    return component;
}

describe('Headline Component',()=>{

    describe('Check Prop Types',()=>{

        it("Should not throw a warning",()=>{

            const expectedProps = {
                header:'Test Header',
                desc:'Test Desc',
                tempArr:[{
                    fName:'Test fName',
                    lName:'Test lName',
                    email:'test@gmail.com',
                    age:23,
                    onlineStatus:false
                }]
            }

            const propsErr = checkProps(Headline,expectedProps);
            expect(propsErr).toBeUndefined();

        })
    })

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

        it('Should render a H1',()=>{
            const h1 = findByTestAttr(wrapper,'header');
            expect(h1.length).toBe(1);
        })

        it('Should render a paragraph',()=>{
            const p = findByTestAttr(wrapper,'desc');
            expect(p.length).toBe(1)
        })

    })

    describe('Have NO props',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp();
        })

        it('Should not render',()=>{
            const component = findByTestAttr(wrapper,'');
            expect(component.length).toBe(0);
        })
    })

})