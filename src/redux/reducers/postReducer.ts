import { Action, ActionType, PostInterface } from "../actionTypes/PostTypes"

interface State {
    posts: PostInterface[],
    post_error: string | null;
    post_loading: boolean;
    post_message: string | null;
}

const initialState = {
    posts: [],
    post_error: null,
    post_loading: false,
    post_message: null
}

export const postReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.GET_POSTS:
            return {
                ...state,
                post_loading: true
            }
        case ActionType.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                post_loading: false,
                post_message: "Posts loaded successfully!"
            }
        default:
            return state;
    }
}