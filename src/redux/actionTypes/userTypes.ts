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
    name: string | null;
}

export type UpdateUserInterface = {
    name?: string | null,
    avatar?: string | null;
    cover?: string | null;
}

export type FollowActionDataInterface = {
    follow: boolean;
    followers: string;
}
export enum ActionType {
    GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_SUCCESS",
    GET_OTHER_USER_PROFILE_SUCCESS = "GET_OTHER_USER_PROFILE_SUCCESS",
    FOLLOW_ACTION_SUCCESS = "FOLLOW_ACTION_SUCCESS",
    EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS",
    REMOVE_USER_PROFILE_DATA = "REMOVE_USER_PROFILE_DATA"
}

interface getUserProfleAction {
    type: ActionType.GET_USER_PROFILE_SUCCESS;
    payload: ProfileInterface | null;
}

interface getOtherUserProfleAction {
    type: ActionType.GET_OTHER_USER_PROFILE_SUCCESS;
    payload: ProfileInterface | null;
}

interface followAction {
    type: ActionType.FOLLOW_ACTION_SUCCESS;
    payload: FollowActionDataInterface;
}

interface editUserSuccess {
    type: ActionType.EDIT_USER_SUCCESS;
}

interface removeUserProfileData {
    type: ActionType.REMOVE_USER_PROFILE_DATA;
}

export type Action = getUserProfleAction | getOtherUserProfleAction | followAction | editUserSuccess | removeUserProfileData