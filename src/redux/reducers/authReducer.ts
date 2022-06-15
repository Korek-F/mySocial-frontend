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
        case ActionType.LOADING:
            return {
                ...state,
                loading: true
            }
        case ActionType.STOP_LOADING:
            return {
                ...state,
                loading: false
            }
        case ActionType.LOGIN_SUCCESS:
            return {
                ...state,
                access: action.payload,
            }
        case ActionType.ERROR:
            console.log("ERROR_MESSAGE", action.payload)
            return {
                ...state,
                error: action.payload,
            }
        case ActionType.VERIFY_SUCCESS:
            return {
                ...state,
                loading: false,
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
        case ActionType.LOGOUT:
            return {
                ...state,
                access: null,
                refresh: null
            }
        case ActionType.MESSAGE:
            console.log("MESSAGE", action.payload)
            return {
                ...state,
                message: action.payload,
            }
        default:
            return state;
    }
}