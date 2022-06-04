import { Action, ActionType } from "../actionTypes/authTypes";

interface State {
    access: string | null;
    refresh: string | null;
    loading: boolean;
    error: string | null;
    message: string | null;
}


const initialState = {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    loading: false,
    error: null,
    message: null
}

export const authReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.LOGIN:
            return {
                ...state,
                loading: true
            }
        case ActionType.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                access: action.payload,
                message: "Successfully logged in!"
            }
        case ActionType.LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: "Wrong password or Email"
            }
        case ActionType.VERIFY:
            return {
                ...state,
                loading: true
            }
        case ActionType.VERIFY_SUCCESS:
            return {
                ...state,
                loading: true,
                message: action.payload,
            }
        case ActionType.DELETE_MESSAGES:
            return {
                ...state,
                message: null,
            }
        case ActionType.DELETE_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}