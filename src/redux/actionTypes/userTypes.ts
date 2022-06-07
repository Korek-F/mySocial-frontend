export type ProfileInterface = {
    id: number;
    followers: number;
    following: number;
    username: string;
    email: string;
    created_at: string;
    avatar: string | null;
    cover: string | null;
    is_followed_by_me: boolean;
}

export type FollowActionDataInterface = {
    follow: boolean;
    followers: string;
}
export enum ActionType {
    GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_SUCCESS",
    GET_OTHER_USER_PROFILE_SUCCESS = "GET_OTHER_USER_PROFILE_SUCCESS",
    FOLLOW_ACTION_SUCCESS = "FOLLOW_ACTION_SUCCESS",
}

interface getUserProfleAction {
    type: ActionType.GET_USER_PROFILE_SUCCESS;
    payload: ProfileInterface;
}

interface getOtherUserProfleAction {
    type: ActionType.GET_OTHER_USER_PROFILE_SUCCESS;
    payload: ProfileInterface;
}

interface followAction {
    type: ActionType.FOLLOW_ACTION_SUCCESS;
    payload: FollowActionDataInterface;
}

export type Action = getUserProfleAction | getOtherUserProfleAction | followAction