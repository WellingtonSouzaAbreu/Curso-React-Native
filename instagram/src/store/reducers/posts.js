import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes.js'

const initialState = {
    posts: [
        {
            id: Math.random(),
            nickname: 'Rafael Pereira Filho',
            email: 'rafaelprrf@gmail.com',
            image: require('./../../../assets/imgs/fence.jpg'),
            comments: [
                {
                    nickname: 'Jong Ray Sheldon',
                    comment: 'Stunning'
                },
                {
                    nickname: 'Ana Júlia Arruda',
                    comment: 'Foto linda! Onde foi Tirada?'
                }
            ]
        },
        {
            id: Math.random(),
            nickname: 'Keila Ferreira de Noronha',
            email: 'kfinha@gmail.com',
            image: require('./../../../assets/imgs/bw.jpg'),
            comments: []
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...ADD_POST,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(action.payload.comment)
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }

        default: return state
    }
}

export default reducer
