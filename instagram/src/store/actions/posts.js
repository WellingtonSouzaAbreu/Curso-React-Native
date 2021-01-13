import { ADD_POST, ADD_COMMENT } from './actionTypes.js'
import axios from 'axios'


export const addPost = post => {
    return dispatch => {
        axios.post('/posts.json', { ...post })
            .catch(err => console.log(err))
            .then(res => dispatch({
                type: ADD_POST,
                payload: post
            }))
    }
    /* return{
        type: ADD_POST,
        payload: post 
    } */
}

export const addComment = payload => {
    console.log(payload)
    return {
        type: ADD_COMMENT,
        payload
    }
}