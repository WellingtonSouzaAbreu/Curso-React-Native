import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user.js'
import postsReducer from './reducers/posts.js'

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig