import { ActionType, Action, NotificationInterface } from "../actionTypes/notificationTypes";
interface State {
    notifications: NotificationInterface[] | null;
}

const initialState = {
    notifications: null,
}

export const notiReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ActionType.GET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload
            }
        default:
            return state;
    }
}