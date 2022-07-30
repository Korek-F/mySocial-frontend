import { ActionType, Action, NotificationInterface } from "../actionTypes/notificationTypes";
interface State {
    notifications: NotificationInterface[] | null;
    current_notification: string | null;
    unseen_notifications_count: number;
}

const initialState = {
    notifications: null,
    current_notification: null,
    unseen_notifications_count: 0,
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
        case ActionType.UNSEEN_NOTIFICATIONS_COUNT:
            console.log("SS", action.payload)
            return {
                ...state,
                unseen_notifications_count: action.payload
            }
        case ActionType.UNSEEN_NOTIFICATIONS_COUNT_INCREMENT:
            return {
                ...state,
                unseen_notifications_count: state.unseen_notifications_count + 1
            }
        default:
            return state;
    }
}