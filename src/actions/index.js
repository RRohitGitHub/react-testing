import axios from "axios"
import { types } from "./types"


export const fetchPosts = () => async (dispatch)=>{
    console.log('Fetch Posts clicked')
    await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(res=>{
        dispatch({
            type:types.GET_POSTS,
            payload:res.data
        })
    })
    .catch(error=>{
        
    })
}