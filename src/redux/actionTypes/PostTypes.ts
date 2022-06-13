
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
    am_i_author: boolean;
    is_liked_by_me: boolean;
    likes: number;


}


export enum ActionType {
    GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
    GET_USER_POSTS_SUCCESS = "GET_USER_POSTS_SUCCESS",
    SEND_POST_SUCCESS = "SEND_POST_SUCCESS",
    DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS",
    CHANGE_LIKE_STATUS = "CHANGE_LIKE_STATUS"
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

interface deletePostSuccessAction {
    type: ActionType.DELETE_POST_SUCCESS,
    payload: number
}

interface changeLikeStatusAction {
    type: ActionType.CHANGE_LIKE_STATUS,
    payload: PostInterface
}

export type Action = getPostsSuccessAction | getUserPostsSuccessAction | sendPostSuccessAction | deletePostSuccessAction | changeLikeStatusAction