import { Action, ActionType, ProfileInterface } from "../actionTypes/userTypes";

interface State {
    user: ProfileInterface | null,
    current_user: ProfileInterface | any,

}

const initialState = {
    user: null,
    current_user: null
}

export const userReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.GET_USER_PROFILE_SUCCESS:
            console.log("REDUCER", action.payload)
            return {
                ...state,
                user: action.payload
            }
        case ActionType.GET_OTHER_USER_PROFILE_SUCCESS:
            return {
                ...state,
                current_user: action.payload
            }
        case ActionType.FOLLOW_ACTION_SUCCESS:
            return {
                ...state,
                current_user: { ...state.current_user, followers: action.payload.followers, is_followed_by_me: action.payload.follow }
            }
        default:
            return state;
    }
}