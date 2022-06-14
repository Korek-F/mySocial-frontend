import { Dispatch } from "react"
import { BASE_URL } from "../../constants/addresses"
import { Action, ActionType, UpdateUserInterface } from "../actionTypes/userTypes"
import { Action as Action2, ActionType as ActionType2 } from "../actionTypes/authTypes"
import axios from 'axios';
import authHeader from "../../utils/authHeaders";

export const getUserProfile = (username: string) => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        dispatch({ type: ActionType2.LOADING })
        try {
            const res = await axios.get(`${BASE_URL}/auth/get-user/${username}`)

            dispatch({
                type: ActionType.GET_USER_PROFILE_SUCCESS,
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

export const getOtherUserProfile = (username: string) => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        dispatch({ type: ActionType2.LOADING })
        try {
            const res = await axios.get(`${BASE_URL}/auth/get-user/${username}`, { "headers": authHeader() })

            dispatch({
                type: ActionType.GET_OTHER_USER_PROFILE_SUCCESS,
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

export const followAction = (username: string) => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        dispatch({ type: ActionType2.LOADING })
        try {
            const res = await axios.post(`${BASE_URL}/auth/follow-action/`, { "username": username }, { "headers": authHeader() }
            )

            dispatch({
                type: ActionType.FOLLOW_ACTION_SUCCESS,
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

export const editUser = (data: UpdateUserInterface) => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        dispatch({ type: ActionType2.LOADING })
        try {
            const res = await axios.patch(`${BASE_URL}/auth/edit-user/`, data, { "headers": authHeader() })

            dispatch({ type: ActionType2.MESSAGE, payload: "Successfully editted!" })

            dispatch({ type: ActionType2.STOP_LOADING, })

            dispatch({
                type: ActionType.GET_USER_PROFILE_SUCCESS,
                payload: res.data
            })

        }
        catch (e) {
            console.log(e)
            dispatch({ type: ActionType2.STOP_LOADING, })
        }
    }
}