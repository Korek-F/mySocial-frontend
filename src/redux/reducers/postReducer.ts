import { Action, ActionType, PostInterface } from "../actionTypes/PostTypes"

interface State {
    posts: PostInterface[],
    profile_posts: PostInterface[],
}

const initialState = {
    posts: [],
    profile_posts: []
}

export const postReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
            }
        case ActionType.GET_USER_POSTS_SUCCESS:
            return {
                ...state,
                profile_posts: action.payload,
            }
        default:
            return state;
    }
}