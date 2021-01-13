import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './reducers/user.js'
import postsReducer from './reducers/posts.js'

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig