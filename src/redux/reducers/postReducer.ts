
import { Action, ActionType, PostInterface, PostMetaInterface, PostFullDataInterface } from "../actionTypes/PostTypes"

interface State {
    posts: PostInterface[],
    profile_posts: PostInterface[],
    posts_meta: PostMetaInterface | null,
    current_post: PostFullDataInterface | null,
}

const initialState = {
    posts: [],
    profile_posts: [],
    posts_meta: null,
    current_post: null
}

export const postReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
            }
        case ActionType.GET_POSTS_META_SUCCESS:
            return {
                ...state,
                posts_meta: action.payload,
            }
        case ActionType.LOAD_MORE_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...action.payload]
            }
        case ActionType.GET_USER_POSTS_SUCCESS:
            return {
                ...state,
                profile_posts: action.payload,
            }
        case ActionType.SEND_POST_SUCCESS:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case ActionType.DELETE_POST_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                posts: [...state.posts.filter(e => e.id !== action.payload)]
            }
        case ActionType.CHANGE_LIKE_STATUS:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.id ?
                    { ...post, is_liked_by_me: action.payload.is_liked_by_me, likes: action.payload.likes } :
                    post),
                profile_posts: state.profile_posts.map(post => post.id === action.payload.id ?
                    { ...post, is_liked_by_me: action.payload.is_liked_by_me, likes: action.payload.likes } :
                    post),



            }
        case ActionType.GET_FULL_DATA_POST:
            return {
                ...state,
                current_post: action.payload
            }
        default:
            return state;
    }
}