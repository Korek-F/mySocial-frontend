import { Dispatch } from "react"
import { BASE_URL } from "../../constants/addresses"
import { Action, ActionType } from "../actionTypes/PostTypes"
import { Action as Action2, ActionType as ActionType2 } from "../actionTypes/authTypes"
import axios from 'axios';
import authHeader from "../../utils/authHeaders";

export const getPosts = () => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        dispatch({ type: ActionType2.LOADING, })
        try {
            const res = await axios.get(`${BASE_URL}/blog/posts`, { "headers": authHeader() })
            console.log(res.data)
            dispatch({
                type: ActionType.GET_POSTS_SUCCESS,
                payload: res.data
            })
            dispatch({ type: ActionType2.STOP_LOADING, })
        }
        catch (e) {
            console.log(e)
            dispatch({ type: ActionType2.STOP_LOADING, })
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
            console.log(e)
            dispatch({ type: ActionType2.STOP_LOADING, })
        }
    }
}

export const sendPost = (title: string, body: string) => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        dispatch({ type: ActionType2.LOADING })
        try {
            const res = await axios.post(`${BASE_URL}/blog/posts`, { "title": title, "body": body }, { "headers": authHeader() })
            console.log(res.data)
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
            console.log(e)
            dispatch({ type: ActionType2.STOP_LOADING, })
        }
    }
}

export const deletePost = (id: number) => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        dispatch({ type: ActionType2.LOADING })
        try {
            const res = await axios.delete(`${BASE_URL}/blog/post/${id}`, { "headers": authHeader() })
            console.log(res.data)
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
            console.log(e)
            dispatch({ type: ActionType2.STOP_LOADING, })
        }
    }
}