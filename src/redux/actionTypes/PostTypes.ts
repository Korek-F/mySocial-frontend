

export type UserLessInfoInterface = {
    username: string;
    avatar: string;
    name: string | null;
}

export type CommentInterface = {
    id: number;
    author: UserLessInfoInterface;
    likes: number;
    am_i_author: boolean;
    is_liked_by_me: boolean;
    content: string;
    post: number;
    created: string;
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
    most_popular_comment: CommentInterface;
}

export type PostMetaInterface = {
    all_data: number;
    page: number;
    page_size: number;
    next: string;
    previous: string;
}

export enum ActionType {
    GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
    GET_USER_POSTS_SUCCESS = "GET_USER_POSTS_SUCCESS",
    SEND_POST_SUCCESS = "SEND_POST_SUCCESS",
    DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS",
    CHANGE_LIKE_STATUS = "CHANGE_LIKE_STATUS",
    GET_POSTS_META_SUCCESS = "GET_POSTS_META_SUCCESS",
    LOAD_MORE_POSTS = "LOAD_MORE_POSTS"
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

interface getPostMetaAction {
    type: ActionType.GET_POSTS_META_SUCCESS,
    payload: PostMetaInterface
}

interface loadMorePostAction {
    type: ActionType.LOAD_MORE_POSTS,
    payload: PostInterface[]
}


export type Action = getPostsSuccessAction | getUserPostsSuccessAction | sendPostSuccessAction | deletePostSuccessAction | changeLikeStatusAction | getPostMetaAction | loadMorePostAction