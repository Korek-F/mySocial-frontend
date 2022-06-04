
export enum ActionType {
    LOGIN = "LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_ERROR = "LOGIN_ERROR",
    VERIFY = "VERIFY",
    VERIFY_SUCCESS = "VERIFY_SUCCESS",
    VERIFY_ERROR = "VERIFY_ERROR",
    DELETE_ERRORS = "DELETE_ERRORS",
    DELETE_MESSAGES = "DELETE_MESSAGES"
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

interface verifyAction {
    type: ActionType.VERIFY
}

interface verifySuccessAction {
    type: ActionType.VERIFY_SUCCESS;
    payload: string;
}

interface verifyErrorAction {
    type: ActionType.VERIFY_ERROR
}

interface deleteMessagesAction {
    type: ActionType.DELETE_MESSAGES
}

interface deleteErrorsAction {
    type: ActionType.DELETE_ERRORS
}

export type Action = loginAction | loginActionSuccess | loginError | verifyAction
    | verifySuccessAction | verifyErrorAction | deleteMessagesAction | deleteErrorsAction