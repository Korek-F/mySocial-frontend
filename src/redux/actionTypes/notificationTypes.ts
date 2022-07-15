import { UserLessInfoInterface } from "./PostTypes"


export type NotificationInterface = {
    id: number;
    from_user: UserLessInfoInterface;
    notification_type: string;
    created: string;
    has_been_seen: boolean;
    post: number;
    comment: number;
    to_user: number;
}

export enum ActionType {
    GET_NOTIFICATIONS,
    SET_CURRENT_NOTIFICATION,
    DELETE_CURRENT_NOTIFICATION,
}

interface getNotificationsAction {
    type: ActionType.GET_NOTIFICATIONS;
    payload: NotificationInterface[];
}

interface setCurrentNotificationAction {
    type: ActionType.SET_CURRENT_NOTIFICATION;
    payload: string;
}

interface deleteCurrentNotification {
    type: ActionType.DELETE_CURRENT_NOTIFICATION
}

export type Action = getNotificationsAction | setCurrentNotificationAction | deleteCurrentNotification