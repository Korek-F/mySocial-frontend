
export type TokenInterface = {
    exp: number;
    iat: number;
    jti: string;
    token_type: string;
    user_id: number;
    user_username: string;
}

export enum ActionType {
    LOADING = "LOADING",
    STOP_LOADING = "STOP_LOADING",
    ERROR = "ERROR",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    VERIFY_SUCCESS = "VERIFY_SUCCESS",
    DELETE_MESSAGES = "DELETE_MESSAGES",
    DELETE_ERRORS = "DELETE_ERRORS",
    LOGOUT = "LOGOUT",
    MESSAGE = "MESSAGE",
    REGISTER = "REGISTER"
}

interface loadingAction {
    type: ActionType.LOADING;
}
interface stopLoadingAction {
    type: ActionType.STOP_LOADING;
}


interface errorAction {
    type: ActionType.ERROR;
    payload: string;
}
interface messageAction {
    type: ActionType.MESSAGE;
    payload: string
}

interface loginActionSuccess {
    type: ActionType.LOGIN_SUCCESS;
    payload: string;
}

interface verifySuccessAction {
    type: ActionType.VERIFY_SUCCESS;
}

interface deleteMessagesAction {
    type: ActionType.DELETE_MESSAGES
}

interface deleteErrorsAction {
    type: ActionType.DELETE_ERRORS
}

interface logoutAction {
    type: ActionType.LOGOUT
}

interface registerAction {
    type: ActionType.REGISTER
}

export type Action = loginActionSuccess | loadingAction | errorAction | verifySuccessAction | deleteMessagesAction | deleteErrorsAction | logoutAction | messageAction | stopLoadingAction | registerAction