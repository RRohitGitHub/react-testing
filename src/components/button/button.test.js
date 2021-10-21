import { shallow } from "enzyme";
import SharedButton from ".";
import { checkProps, findByTestAttr } from "../../../Utils";


describe('Shared Button Component',()=>{

    describe('Checking proptypes',()=>{
        it('Should not throw a warning',()=>{
            const expectedProps = {
                buttonText:'Example Button Text',
                emitEvent:()=>{

                }
            };

            const propsError = checkProps(SharedButton,expectedProps);
            expect(propsError).toBeUndefined();
        })
    })

    describe('Renders',()=>{

        let wrapper;
        let mockFunc;
        beforeEach(()=>{
            mockFunc = jest.fn();
            const props = {
                buttonText:'Example button Text',
                emitEvent:mockFunc
            }
            wrapper = shallow(<SharedButton {...props} />)
        })

        it('Should render a button',()=>{
            const button = findByTestAttr(wrapper,'buttonComponent')
            expect(button.length).toBe(1);
        })

        it('Should emit callback on click event',()=>{
            const button = findByTestAttr(wrapper,'buttonComponent')
            button.simulate('click');
            const callbacks = mockFunc.mock.calls.length
            expect(callbacks).toBe(1)
        })


    })

    
})