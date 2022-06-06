export type ProfileInterface = {
    id: number;
    followers: number;
    following: number;
    username: string;
    email: string;
    created_at: string;
    avatar: string | null;
    cover: string | null;
}

export enum ActionType {
    GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_SUCCESS",
}

interface getUserProfleAction {
    type: ActionType.GET_USER_PROFILE_SUCCESS;
    payload: ProfileInterface;
}


export type Action = getUserProfleAction