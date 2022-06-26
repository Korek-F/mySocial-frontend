
import { Action, ActionType, PostInterface, PostMetaInterface, CommentInterface } from "../actionTypes/PostTypes"


interface State {
    posts: PostInterface[],
    profile_posts: PostInterface[],
    posts_meta: PostMetaInterface | null,
    current_post_comments: CommentInterface[] | null,
    post: PostInterface | null,
}

const initialState = {
    posts: [],
    profile_posts: [],
    posts_meta: null,
    post: null,
    current_post_comments: null
}

const getComment: any = (id: number,
    comments: any, likes: number, is_liked_by_me: boolean) => {
    let new_comments = []
    for (const comment of comments) {
        if (comment.id === id) {
            comment.likes = likes
            comment.is_liked_by_me = is_liked_by_me
        }
        comment.current_post_comments = getComment(id, comment.comment_child, likes, is_liked_by_me)
        new_comments.push(comment)

    }
    return new_comments
}




export const postReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.GET_POST_COMMENTS:
            return {
                ...state,
                current_post_comments: action.payload
            }
        case ActionType.GET_POST:
            return {
                ...state,
                post: action.payload
            }
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
                posts: [...state.posts.filter(e => e.id !== action.payload)],
                profile_posts: [...state.profile_posts.filter(e => e.id !== action.payload)]
            }

        case ActionType.CHANGE_LIKE_STATUS:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.id ?
                    action.payload : post),
                profile_posts: state.profile_posts.map(post => post.id === action.payload.id ? action.payload : post),
                post: action.payload,
            }
        case ActionType.CHANGE_COMMENT_LIKE_STATUS:
            const id = action.payload.id
            const new_comments = getComment(action.payload.id, state.current_post_comments, action.payload.likes, action.payload.is_liked_by_me)
            console.log(new_comments)
            return {
                ...state
            }
        default:
            return state;
    }
}