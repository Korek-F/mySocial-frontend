
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
    GET_POSTS = "GET_POSTS",
    GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
    GET_POSTS_ERROR = "GET_POSTS_ERROR",
}

interface getPostsAction {
    type: ActionType.GET_POSTS;
}

interface getPostsSuccessAction {
    type: ActionType.GET_POSTS_SUCCESS;
    payload: PostInterface[]
}

export type Action = getPostsAction | getPostsSuccessAction