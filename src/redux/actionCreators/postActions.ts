import { Dispatch } from "react"
import { BASE_URL } from "../../constants/addresses"
import { Action, ActionType } from "../actionTypes/PostTypes"
import axios from 'axios';

export const getPosts = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_POSTS
        })
        try {
            const res = await axios.get(`${BASE_URL}/blog/all-posts`)
            console.log(res.data)
            dispatch({
                type: ActionType.GET_POSTS_SUCCESS,
                payload: res.data
            })
        }
        catch (e) {
            console.log(e)
        }
    }
}