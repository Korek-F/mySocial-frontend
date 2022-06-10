
export type UserLessInfoInterface = {
    username: string;
    avatar: string;
}


export type PostInterface = {
    id: number;
    author: UserLessInfoInterface;
    title: string;
    body: string;
    created: string;
}


export enum ActionType {
    GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
    GET_USER_POSTS_SUCCESS = "GET_USER_POSTS_SUCCESS",
    SEND_POST_SUCCESS = "SEND_POST_SUCCESS",
}


interface getPostsSuccessAction {
    type: ActionType.GET_POSTS_SUCCESS;
    payload: PostInterface[]
}

interface getUserPostsSuccessAction {
    type: ActionType.GET_USER_POSTS_SUCCESS;
    payload: PostInterface[]
}

interface sendPostSuccessAction {
    type: ActionType.SEND_POST_SUCCESS,
    payload: PostInterface
}

export type Action = getPostsSuccessAction | getUserPostsSuccessAction | sendPostSuccessAction