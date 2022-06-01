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
        default:
            return state;
    }
}