import { Action, ActionType, PostInterface } from "../actionTypes/PostTypes"

interface State {
    posts: PostInterface[],
}

const initialState = {
    posts: [],
}

export const postReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
            }
        default:
            return state;
    }
}