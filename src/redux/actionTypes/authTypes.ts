export const AUTH_LOADING = "AUTH_LOADING"
export const AUTH_ERROR = "AUTH_ERROR"



export const REGISTER = "REGISTER"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"


export enum ActionType {
    LOGIN = "LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_ERROR = "LOGIN_ERROR"
}

interface loginAction {
    type: ActionType.LOGIN;
}

interface loginActionSuccess {
    type: ActionType.LOGIN_SUCCESS;
    payload: string;
}
interface loginError {
    type: ActionType.LOGIN_ERROR;
}

export type Action = loginAction | loginActionSuccess | loginError