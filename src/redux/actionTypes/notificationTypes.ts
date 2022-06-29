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
}

interface getNotificationsAction {
    type: ActionType.GET_NOTIFICATIONS;
    payload: NotificationInterface[];
}

export type Action = getNotificationsAction