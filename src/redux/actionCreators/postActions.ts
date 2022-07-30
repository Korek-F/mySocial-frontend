import { Dispatch } from "react"
import { BASE_URL } from "../../constants/addresses"
import { Action, ActionType } from "../actionTypes/PostTypes"
import { Action as Action2, ActionType as ActionType2 } from "../actionTypes/authTypes"
import axios from 'axios';
import authHeader from "../../utils/authHeaders";
import { getErrors } from "../../utils/getErrors";

export const getPosts = (page = 1) => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        dispatch({ type: ActionType2.LOADING, })
        try {
            const res = await axios.get(`${BASE_URL}/blog/posts?page=${page}`, { "headers": authHeader() })
            if (page > 1) {
                dispatch({
                    type: ActionType.LOAD_MORE_POSTS,
                    payload: res.data.data
                })
            } else {
                dispatch({
                    type: ActionType.GET_POSTS_SUCCESS,
                    payload: res.data.data
                })
            }

            dispatch({
                type: ActionType.GET_POSTS_META_SUCCESS,
                payload: res.data.meta
            })
            dispatch({ type: ActionType2.STOP_LOADING, })
        }
        catch (e) {
            dispatch({ type: ActionType2.STOP_LOADING, })
            dispatch({
                type: ActionType2.ERROR,
                payload: getErrors(e)
            })
        }
    }
}

export const getUserPosts = (username: string) => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        dispatch({ type: ActionType2.LOADING, })
        try {
            const res = await axios.get(`${BASE_URL}/blog/user/${username}`, { "headers": authHeader() })
            console.log(res.data)
            dispatch({
                type: ActionType.GET_USER_POSTS_SUCCESS,
                payload: res.data
            })
            dispatch({ type: ActionType2.STOP_LOADING, })
        }
        catch (e) {
            dispatch({ type: ActionType2.STOP_LOADING, })
            dispatch({
                type: ActionType2.ERROR,
                payload: getErrors(e)
            })
        }
    }
}

export const sendPost = (title: string, body: string) => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        dispatch({ type: ActionType2.LOADING })
        try {

            const res = await axios.post(`${BASE_URL}/blog/posts`, { "title": title, "body": body }, { "headers": authHeader() })
            dispatch({
                type: ActionType.SEND_POST_SUCCESS,
                payload: res.data
            })
            dispatch({
                type: ActionType2.MESSAGE,
                payload: "Post successfully added!"
            })
            dispatch({ type: ActionType2.STOP_LOADING, })
        }
        catch (e) {
            dispatch({ type: ActionType2.STOP_LOADING, })
            dispatch({
                type: ActionType2.ERROR,
                payload: getErrors(e)
            })
        }
    }
}

export const deletePost = (id: number) => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        dispatch({ type: ActionType2.LOADING })
        try {
            await axios.delete(`${BASE_URL}/blog/post-delete/${id}`, { "headers": authHeader() })
            dispatch({
                type: ActionType.DELETE_POST_SUCCESS,
                payload: id
            })
            dispatch({
                type: ActionType2.MESSAGE,
                payload: "Post successfully deleted!"
            })
            dispatch({ type: ActionType2.STOP_LOADING, })
        }
        catch (e) {
            dispatch({ type: ActionType2.STOP_LOADING, })
            dispatch({
                type: ActionType2.ERROR,
                payload: getErrors(e)
            })
        }
    }
}

export const changeLikeStatus = (id: number, post: boolean = false) => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        dispatch({ type: ActionType2.LOADING })
        try {
            if (post) {
                const res = await axios.patch(`${BASE_URL}/blog/post/like-dislike`,
                    { "id": id }, { "headers": authHeader() })
                dispatch({
                    type: ActionType.CHANGE_LIKE_STATUS,
                    payload: res.data
                })
            } else {
                const res = await axios.patch(`${BASE_URL}/blog/comment/like-dislike`,
                    { "id": id }, { "headers": authHeader() })
                dispatch({
                    type: ActionType.CHANGE_COMMENT_LIKE_STATUS,
                    payload: res.data
                })
            }
            dispatch({
                type: ActionType2.MESSAGE,
                payload: "Successed"
            })
            dispatch({ type: ActionType2.STOP_LOADING, })

        }
        catch (e) {
            dispatch({ type: ActionType2.STOP_LOADING, })
            dispatch({
                type: ActionType2.ERROR,
                payload: getErrors(e)
            })
        }
    }
}

export const getPostComments = (post_id: string) => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        dispatch({ type: ActionType2.LOADING })

        try {
            const res = await axios.get(`${BASE_URL}/blog/post/${post_id}/details`, { "headers": authHeader() })

            dispatch({ type: ActionType.GET_POST_COMMENTS, payload: res.data })
            dispatch({ type: ActionType2.STOP_LOADING, })
        }
        catch (e) {
            dispatch({ type: ActionType2.STOP_LOADING, })
            dispatch({
                type: ActionType2.ERROR,
                payload: getErrors(e)
            })
        }
    }
}

export const getPost = (post_id: string) => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        dispatch({ type: ActionType2.LOADING })
        try {
            const res = await axios.get(`${BASE_URL}/blog/post/${post_id}/`, { "headers": authHeader() })
            console.log("POST", res)
            dispatch({ type: ActionType.GET_POST, payload: res.data })
            dispatch({ type: ActionType2.STOP_LOADING, })
        }
        catch (e) {
            dispatch({ type: ActionType2.STOP_LOADING, })
            dispatch({
                type: ActionType2.ERROR,
                payload: getErrors(e)
            })
        }
    }
}

export const sendComment = (post_id: number, content: string,
    parent_id: null | number = null) => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        try {
            console.log("parent_id", parent_id)
            const res = await axios.post(`${BASE_URL}/blog/post/${post_id}/details`, { "content": content, "parent_id": parent_id }, { "headers": authHeader() })
            console.log(res)
            dispatch({ type: ActionType2.STOP_LOADING, })
            dispatch({ type: ActionType.SEND_COMMENT, payload: res.data })
            dispatch({ type: ActionType2.MESSAGE, payload: "Sended!" })
        }
        catch (e) {
            dispatch({ type: ActionType2.STOP_LOADING, })
            dispatch({
                type: ActionType2.ERROR,
                payload: getErrors(e)
            })
        }
    }
}

export const deleteComment = (comment_id: number) => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        try {
            await axios.delete(`${BASE_URL}/blog/comment-delete/${comment_id}`, { "headers": authHeader() })
            dispatch({ type: ActionType2.STOP_LOADING, })
            dispatch({ type: ActionType.DELETE_COMMENT, payload: comment_id })
            dispatch({ type: ActionType2.MESSAGE, payload: "Deleted!" })
        }
        catch (e) {
            dispatch({ type: ActionType2.STOP_LOADING, })
            dispatch({
                type: ActionType2.ERROR,
                payload: getErrors(e)
            })
        }
    }
}