import {ADD_POST, ADD_COMMENT} from './actionTypes.js'

export const addPost = post => {
    return{
        type: ADD_POST,
        payload: post 
    }
}

export const addComment = payload => {
    console.log(payload)
    return {
        type: ADD_COMMENT,
        payload 
    }
}