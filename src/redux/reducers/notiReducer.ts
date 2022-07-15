import { ActionType, Action, NotificationInterface } from "../actionTypes/notificationTypes";
interface State {
    notifications: NotificationInterface[] | null;
    current_notification: string | null;
}

const initialState = {
    notifications: null,
    current_notification: null,
}

export const notiReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.GET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload
            }
        case ActionType.SET_CURRENT_NOTIFICATION:
            return {
                ...state,
                current_notification: action.payload
            }
        case ActionType.DELETE_CURRENT_NOTIFICATION:
            return {
                ...state,
                current_notification: null
            }
        default:
            return state;
    }
}