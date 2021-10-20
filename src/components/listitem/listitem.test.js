import React from 'react'
import ListItem from './index'
import { checkProps, findByTestAttr } from '../../../Utils'
import { shallow } from 'enzyme'

describe('List Item Component', () => {
    describe('Checking PropTypes',()=>{
        it('Should Not throw a warning',()=>{
            const expectedProps = {
                title:'Example Title',
                desc:'Some Text'
            }

            const propsError = checkProps(ListItem,expectedProps)
            expect(propsError).toBeUndefined();
        })
    })

    describe('Component renders',()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
                title:'Example Title',
                desc:'Some Text'
            }
            wrapper = shallow(<ListItem {...props} />);
        });

        it('Should render without error',()=>{
            const component = findByTestAttr(wrapper,'listItemComponent')
            expect(component.length).toBe(1);
        })

        it('Should render a title',()=>{
            const title = findByTestAttr(wrapper,'componentTitle')
            expect(title.length).toBe(1);
        })

        it('Should render a description',()=>{
            const description = findByTestAttr(wrapper,'componentDescription')
            expect(description.length).toBe(1)
        })
    })

    describe('Should NOT render',()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
                desc:'Some Text'
            }
            wrapper = shallow(<ListItem {...props} />);
        });

        it('Component is not rendered',()=>{
            const component = findByTestAttr(wrapper,'listItemComponent');
            expect(component.length).toBe(0);
        })
    });
})
