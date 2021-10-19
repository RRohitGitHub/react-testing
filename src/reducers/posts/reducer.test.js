import { types } from "../../actions/types";
import postReducer from './reducer'

describe('Post Reducer',()=>{

    it('Should return default state',()=>{
        const newState = postReducer(undefined,{});
        expect(newState).toEqual([]);
    })

    it('Should return new state if recieving type',()=>{
        const posts = [{title:'TEST 1'},{title:'TEST 2'},{title:'TEST 2'}]
        const newState = postReducer(undefined,{
            type:types.GET_POSTS,
            payload:posts
        })
        expect(newState).toEqual(posts);
    })
})