import moxios from 'moxios'
import { testStore } from '../../Utils';
import {fetchPosts} from '../actions/index'
 

 describe('Fetch Posts action',()=>{4

    beforeEach(()=>{
        moxios.install(); //Whenever we hit axios, it will replace with Moxios
    })

    test('Store is updated correctly ', () => {
        
        const expectedState = [{
            title:'Example title 1',
            body:'Some Text'
        },
        {
            title:'Example title 2',
            body:'Some Text'
        },
        {
            title:'Example title 3',
            body:'Some Text'
        }]

        const store = testStore();

        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:expectedState
            })
        });

        return store.dispatch(fetchPosts())
        .then(()=>{
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState)
        })

    })
    

    afterEach(()=>{
        moxios.uninstall();
    })

 })