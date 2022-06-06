import { Action, ActionType, ProfileInterface } from "../actionTypes/userTypes";

interface State {
    user: ProfileInterface | null,

}

const initialState = {
    user: null,
}

export const userReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}